import { redirect } from "next/navigation";
import { querydb } from "./db";

// export default function Page({ params }: { params: { slug: string } }) {
// 	redirect(`https://${params.slug}`)
// }

export default function Page({ params }: { params: { slug: string } }) {
	redirect(`https://${querydb(params.slug)}`)
}
