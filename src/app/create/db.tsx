"use server";
import { initConnection } from "@/components/db-utils";
import { formSchema } from "./schema";

export async function querydb(prevState: any, formData: FormData) {
	const values = formSchema.safeParse({ url: formData.get("url") })
	if (!values.success) {
		return { error: values.error };
	}
	const long_url = values.data.url;

	let db = await initConnection();
	let url = await db.query(`
	create url:[rand::string(8)] CONTENT {
			long_url: string::replace($long_url, "http://", "https://"),
			clicks: 0,
			date_added: time::now(),
			date_accessed: <future> { time::now() }
	} return id[0];
	`, { long_url: long_url });

	console.log(long_url, url)
	return { url: url };
}
