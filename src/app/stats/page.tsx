import CardGrid from "@/components/card-grid";
import { Card } from "@/components/ui/card";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { querydb } from "./db";

export default async function StatsPage() {
	let data = await querydb();
	return (
		<CardGrid max_rows={1}>
			<Card>
				<DataTable columns={columns} data={data[0]} />
			</Card>
		</CardGrid>
	);
}
