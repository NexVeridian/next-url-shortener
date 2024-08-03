"use server";
import { initConnectionPostgres, initConnectionSurreal } from "@/components/db-utils";

export async function querydb(slug: string) {
  let long_url = undefined;
  try {
    if (process.env.DB_TYPE === "surrealdb") {
      let db = await initConnectionSurreal();
      long_url = await db.query(`
      update url:[$id]
      set clicks +=1;
      `, { id: slug });
      // @ts-ignore
      long_url = long_url[0][0].long_url;
    }

    if (process.env.DB_TYPE === "postgres") {
      let sql = await initConnectionPostgres();
      long_url = await sql`
      update url set 
        clicks = clicks + 1,
        date_accessed = now()
      where id = ${slug}
      returning long_url;
      `;
      long_url = long_url[0].long_url;
    }

    console.log(long_url);
    return long_url;
  } catch (e) {
    return;
  }
}
