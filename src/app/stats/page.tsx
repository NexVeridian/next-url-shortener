"use server";
import CardGrid from "@/components/card-grid";
import { Card } from "@/components/ui/card";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { querydb } from "./db";

export default async function StatsPage() {
  let data = await querydb();
  // @ts-ignore
  data = data[0];

  if (data !== undefined) {
    const formatDate = (dateString: string | number | Date) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2);
      return `${month}/${day}/${year}`;
    };

    data = data.map(item => ({
      // @ts-ignore
      ...item,
      // @ts-ignore
      date_accessed: formatDate(item.date_accessed),
      // @ts-ignore
      date_added: formatDate(item.date_added),
      // @ts-ignore
      id: item.id.replace(/^url:\['(.*)'\]$/, '$1')
    }));
  }

  return (
    <CardGrid max_rows={1}>
      <Card>
        {/* @ts-ignore */}
        <DataTable columns={columns} data={data} />
      </Card>
    </CardGrid>
  );
}
