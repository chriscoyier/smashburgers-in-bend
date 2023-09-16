import { z, defineCollection } from "astro:content";

const burgersCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      restaurant: z.string(),
      image: image(),
      website: z.string().url(),
      location: z.string(),
      summary: z.string(),
      bg: z.string(),
      color: z.string(),
    }),
});

export const collections = {
  burgers: burgersCollection,
};
