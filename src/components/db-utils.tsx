import { Surreal } from 'surrealdb.js';
require('dotenv');

const db = new Surreal();

export async function initConnection(): Promise<Surreal> {
	try {
		db.connect("http://" + process.env.DB_PORT + "/rpc", {
			namespace: 'url',
			database: 'url',

			// @ts-ignore
			auth: {
				username: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
			},
		});
	} catch (e) {
		console.error('ERROR', e);
	}

	return db;
}
