"use client";
import CardGrid from "@/components/card-grid";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <CardGrid max_rows={1}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-red-400">404 - Not Found</CardTitle>
        </CardHeader>
      </Card>
    </CardGrid>
  );
}
