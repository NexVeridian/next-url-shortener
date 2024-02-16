"use client";
import CardGrid from "@/components/card-grid";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";
import CreateCard from "./create/create";

export default function Home() {
  return (
    <CardGrid>
      {/* <Card>
        <Link href="/create">
          <CardHeader>
            <CardTitle>Create a Shortened URL</CardTitle>
          </CardHeader>
        </Link>
      </Card> */}
      <CreateCard />

      <Card>
        <Link href="/stats">
          <CardHeader>
            <CardTitle>Site Stats</CardTitle>
          </CardHeader>
        </Link>
      </Card>
    </CardGrid>
  );
}
