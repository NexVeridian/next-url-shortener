"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { CopyIcon } from "@radix-ui/react-icons";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { querydb } from "./db";
import { formSchema } from "./schema";

const initialState = {
  url: null,
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">Submit</Button>
  );
}

export default function CreateCard() {
  // @ts-ignore
  const [state, formAction] = useFormState(querydb, initialState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  })

  const handleCopyUrl = () => {
    if (state && state.url) {
      const currentSiteName = window.location.hostname;

      let url = undefined;
      if (currentSiteName === "localhost" || currentSiteName === "0.0.0.0") {
        const currentPort = window.location.port;
        url = `http://${currentSiteName}:${currentPort}/${state.url.toString()}`;
      } else {
        url = `https://${currentSiteName}/${state.url.toString()}`;
      }

      navigator.clipboard.writeText(url)
        .catch(err => {
          console.error('Failed to copy URL to clipboard:', err);
        });
    }
  };

  return (
    // <CardGrid>
    <Card>
      <CardHeader>
        <CardTitle>Create a Shortened URL</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          {/* @ts-ignore */}
          <form action={form.handleSubmit(formAction)} className="space-y-8">
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
            <SubmitButton />
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        {state && state.url && (
          <Popover>
            <PopoverTrigger>
              <Button onClick={handleCopyUrl}>
                <CopyIcon className="mr-2 h-4 w-4" /> Copy Url
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-lg">
                Url added to clipboard
              </p>
            </PopoverContent>
          </Popover>
        )}
      </CardFooter>
    </Card>
    // </CardGrid>
  );
}
