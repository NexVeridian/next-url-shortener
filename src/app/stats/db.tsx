"use server";
import { initConnection } from "@/components/db-utils";

export async function querydb() {
  try {
    let db = await initConnection();
    let stats = await db.query(`
		select * from url 
		order by clicks desc
		limit 50;
		`);

    // @ts-ignore
    stats = stats[0];

    return stats;
  } catch (e) {
    return [];
  }
}
