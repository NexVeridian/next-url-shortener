"use client";
import CardGrid from "@/components/card-grid";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { querydb } from "./db";
import Loading from "./loading";

export default function StatsPage() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await querydb();
      // @ts-ignore
      setData(result);
    };
    fetchData();
  }, []);

  if (data.length !== 0 && data !== undefined && data !== null) {
    const formatDate = (dateString: string | number | Date) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2);
      return `${month}/${day}/${year}`;
    };

    // @ts-ignore
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

  return data.length === 0 ? (
    <Loading />
  ) : (
    <CardGrid max_rows={1}>
      <Card>
        {/* @ts-ignore */}
        <DataTable columns={columns} data={data} />
      </Card>
    </CardGrid>
  );
}
