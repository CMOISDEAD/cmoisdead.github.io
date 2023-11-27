import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		status: z.enum(["draft", "published"]).default("draft"),
		subtitle: z.string().optional().nullable(),
		subcontent: z.array(z.string()).optional().default([]),
	}),
});

const wiki = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		status: z.enum(["draft", "published"]).default("draft"),
		subtitle: z.string().optional().nullable(),
		subcontent: z.array(z.string()).optional().default([]),
	}),
});

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		status: z
			.enum(["complete", "in-progress", "planned", "abandoned"])
			.default("planned"),
		subtitle: z.string().optional().nullable(),
		subcontent: z.array(z.string()).optional().default([]),
	}),
});

const research = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		associatedPapers: z.array(z.string()),
		status: z.enum(["draft", "published"]).default("draft"),
		asociation: z.string().optional(),
		subtitle: z.string().optional().nullable(),
		subcontent: z.array(z.string()).optional().default([]),
	}),
});

export const collections = { blog, wiki, projects, research };
