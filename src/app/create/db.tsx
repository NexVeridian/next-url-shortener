"use server";
import { z } from "zod";
import { formSchema } from "./page";

export async function querydb(values: z.infer<typeof formSchema>) {
	// let db = await initConnection();
	// let url = await db.query(`
	// create url:[rand::string(8)] CONTENT {
	// 		long_url: string::replace($long_url, "http://", "https://"),
	// 		clicks: 0,
	// 		date_added: time::now(),
	// 		date_accessed: <future> { time::now() }
	// } return id[0];
	// `, { long_url: values.url });
	let url = "test";

	console.log(values.url, url)
	return url;
}
