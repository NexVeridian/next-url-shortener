"use server";
import { initConnection } from "@/components/db-utils";

export async function querydb(slug: string) {
	try {
		let db = await initConnection();
		let long_url = await db.query(`
		update url:[$id] set clicks = clicks + 1 ;
		select * from url:[$id];
		`, { id: slug });

		// @ts-ignore
		long_url = long_url[0][0].long_url;
		return long_url;
	} catch (e) {
		return;
	}
}
