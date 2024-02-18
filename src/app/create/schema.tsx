import { z } from "zod";

export const formSchema = z.object({
  url: z.string().min(4,
    { message: "The URL must be at least 4 characters long" }
  ).max(100
    , { message: "The URL must be at most 100 characters long" }),
});
