"use server";
import {
	initConnectionPostgres,
	initConnectionSurreal,
} from "@/components/db-utils";

export async function querydb() {
	try {
		let stats = [];
		if (process.env.DB_TYPE === "surrealdb") {
			const db = await initConnectionSurreal();
			// console.log(db);
			stats = await db.query(`
      select * from url 
      order by clicks desc
      limit 10;
      `);

			// @ts-ignore
			stats = stats[0];
		}

		if (process.env.DB_TYPE === "postgres") {
			const sql = await initConnectionPostgres();
			stats = await sql`
      select * from url 
      order by clicks desc
      limit 10;
      `;
		}

		return stats;
	} catch (e) {
		return [];
	}
}
