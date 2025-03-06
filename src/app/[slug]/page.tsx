"use server";
import { notFound, redirect } from "next/navigation";
import { querydb } from "./db";

export default async function Page({ params }: { params: { slug: string } }) {
	if (params.slug === "favicon.ico") {
		return;
	}

	const long_url = await querydb(params.slug);
	if (long_url === undefined) {
		return notFound();
	}
	redirect(`https://${long_url}`);
}
