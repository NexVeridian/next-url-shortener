"use client";
import CardGrid from "@/components/card-grid";
import {
	Card,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

export default function GlobalError({
	error,
}: {
	error: Error & { digest?: string }
}) {
	return (
		<CardGrid max_rows={1}>
			<Card>
				<CardHeader>
					<CardTitle className="text-1xl text-amber-400">Loading...</CardTitle>
				</CardHeader>
			</Card>
		</CardGrid>
	);
}
