import { z, defineCollection } from "astro:content";

const burgersCollection = defineCollection({
  type: "content",
  schema: z.object({
    restaurant: z.string(),
    website: z.string(),
    location: z.string(),
    summary: z.string(),
    bg: z.string(),
    color: z.string(),
  }),
});

export const collections = {
  burgers: burgersCollection,
};
