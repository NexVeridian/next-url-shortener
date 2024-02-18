"use client";
import CardGrid from "@/components/card-grid";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function GlobalError() {
  return (
    <CardGrid max_rows={1}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-red-400">Error</CardTitle>
        </CardHeader>
      </Card>
    </CardGrid>
  );
}
