import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    post: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
      })
    }),
    project: defineCollection({
      source: 'projects/**/*.md',
      type: 'data',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string().optional(),
        linkText: z.string().optional(),
        link2: z.string().optional(),
        linkText2: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()),
        starred: z.boolean().optional().default(false),
        date: z.date().optional(),
      })
    }),
  }
})
