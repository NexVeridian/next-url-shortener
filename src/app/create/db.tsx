"use server";
import { initConnectionPostgres, initConnectionSurreal } from "@/components/db-utils";
import { formSchema } from "./schema";

function generateRandomString(length: number) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}

export async function querydb(prevState: any, formData: FormData) {
  const values = formSchema.safeParse(formData)
  if (!values.success) {
    return { error: values.error };
  }
  let long_url = values.data.url.replace("https://", "").replace("http://", "");
  long_url = long_url.endsWith('/') ? long_url.slice(0, -1) : long_url;
  let url = undefined;

  try {
    if (process.env.DB_TYPE === "surrealdb") {
      let db = await initConnectionSurreal();
      url = await db.query(`
			create url:[rand::string(8)] CONTENT {
					long_url: $long_url,
					clicks: 0,
					date_added: time::now(),
					date_accessed: <future> { time::now() }
			} return id[0];
			`, {
        long_url: long_url
      });
      // @ts-ignore
      url = url[0][0].id;
    }

    console.log(long_url);
    if (process.env.DB_TYPE === "postgres") {
      let sql = await initConnectionPostgres();
      await sql`
			create table if not exists url (
				id text primary key,
				clicks integer not null,
				long_url text not null,
				date_added timestamp not null,
				date_accessed timestamp not null
			);
			`;

      url = await sql`
			insert into url (id, long_url, clicks, date_added, date_accessed)
			values (
				${generateRandomString(8)},
				${long_url}, 
				0, 
				now(), 
				now()
			)
			returning id;
			`;

      url = url[0].id;
    }

    console.log(url);

    if (process.env.OVERRIDE_URL !== undefined) {
      url = `https://${process.env.OVERRIDE_URL}/${url.toString()}`;
    }

    return { url: url };
  } catch (e) {
    return;
  }
}
