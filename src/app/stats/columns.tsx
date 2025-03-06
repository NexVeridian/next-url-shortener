"use client";
import type { ColumnDef } from "@tanstack/react-table";

export type UrlTable = {
	clicks: number;
	date_accessed: Date;
	date_added: Date;
	id: string;
	long_url: string;
};

export const columns: ColumnDef<UrlTable>[] = [
	{
		accessorKey: "clicks",
		header: "Clicks",
	},
	{
		accessorKey: "long_url",
		header: "URL",
	},
	{
		accessorKey: "id",
		header: "Short URL",
	},
	{
		accessorKey: "date_accessed",
		header: "Date Accessed",
	},
	{
		accessorKey: "date_added",
		header: "Date Added",
	},
];
