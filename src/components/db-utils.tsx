"use server";
import postgres, { type Sql } from "postgres";
import { Surreal } from "surrealdb";
const db = new Surreal();

export async function initConnectionSurreal(): Promise<Surreal> {
	try {
		await db.connect(`ws://${process.env.DB_URL_PORT}/rpc`, {
			namespace: "url",
			database: "url",
			auth: {
				username: process.env.DB_USER || "root",
				password: process.env.DB_PASSWORD || "root",
			},
		});
	} catch (e) {
		console.error("ERROR", e);
	}

	return db;
}

export async function initConnectionPostgres(): Promise<Sql<{}>> {
	const DB_URL_PORT = (process.env.DB_URL_PORT || "postgres:5432").split(":");
	const sql = postgres({
		host: DB_URL_PORT[0],
		port: Number.parseInt(DB_URL_PORT[1]),
		user: process.env.POSTGRES_USER || "root",
		password: process.env.POSTGRES_PASSWORD || "root",
		database: process.env.POSTGRES_DB || "url",
		max: 100,
		onnotice: () => {},
	});
	return sql;
}
