"use server";
import { initConnection } from "@/components/db-utils";

export async function querydb(slug: string) {
	let db = await initConnection();
	let long_url = await db.query(`
	select * from url:[$id];
	`, { id: slug });

	console.log(long_url, slug)
	return long_url;
}
