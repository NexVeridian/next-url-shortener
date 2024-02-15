"use client";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      <Card>
        <Link href="/create">
          <CardHeader>
            <CardTitle>Create a Shortened URL</CardTitle>
          </CardHeader>
        </Link>
      </Card>

      <Card>
        <Link href="/stats">
          <CardHeader>
            <CardTitle>Site Stats</CardTitle>
          </CardHeader>
        </Link>
      </Card>
    </div >
  );
}
