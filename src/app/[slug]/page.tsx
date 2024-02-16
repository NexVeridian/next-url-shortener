"use server";
import { notFound, redirect } from "next/navigation";
import { querydb } from "./db";

// export default function Page({ params }: { params: { slug: string } }) {
// 	redirect(`https://${params.slug}`)
// }

export default async function Page({ params }: { params: { slug: string } }) {
	if (params.slug == "favicon.ico") {
		return;
	}

	let long_url = await querydb(params.slug);
	if (long_url == undefined) {
		return notFound();
	}
	redirect(`https://${long_url}`);
}
