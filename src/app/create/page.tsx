"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { querydb } from "./db";

export const formSchema = z.object({
  url: z.string().min(4,
    { message: "The URL must be at least 4 characters long" }
  ).max(100
    , { message: "The URL must be at most 100 characters long" }),
});
const initialState = {
  message: null,
}

export default function Home() {
  const [state, formAction] = useFormState(querydb, initialState);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  })

  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-1 xl:grid-cols-1">
      <Card>
        <CardHeader>
          <CardTitle>Create a Shortened URL</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={form.handleSubmit(querydb)} className="space-y-8">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter a url</FormLabel>
                    <FormControl>
                      <Input placeholder="nexveridian.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>

        </CardContent>
      </Card>
    </div >
  );
}
