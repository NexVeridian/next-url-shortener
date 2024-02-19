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
    <CardGrid maxCols={1}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-red-400">Error + {String(error)}</CardTitle>
        </CardHeader>
      </Card>
    </CardGrid>
  );
}
