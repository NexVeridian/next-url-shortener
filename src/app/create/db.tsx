"use server";
import { initConnection } from "@/components/db-utils";
import { formSchema } from "./schema";

export async function querydb(prevState: any, formData: FormData) {
	const values = formSchema.safeParse(formData)
	if (!values.success) {
		return { error: values.error };
	}
	const long_url = values.data.url;

	let db = await initConnection();
	let url = await db.query(`
	create url:[rand::string(8)] CONTENT {
			long_url: string::replace(string::replace($long_url, "https://", ""), "http://", ""),
			clicks: 0,
			date_added: time::now(),
			date_accessed: <future> { time::now() }
	} return id[0];
	`, { long_url: long_url });

	// @ts-ignore
	url = url[0][0].id;

	return { url: url };
}
