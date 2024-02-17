"use server";
import "dotenv";
import { Surreal } from "surrealdb.js";
const db = new Surreal();

export async function initConnection(): Promise<Surreal> {
  try {
    db.connect("http://" + process.env.DB_URL_PORT + "/rpc", {
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
