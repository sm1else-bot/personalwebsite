import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // tech, music, art, writing
  imageUrl: text("image_url"),
  link: text("link"),
});

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  summary: text("summary").notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertArticleSchema = createInsertSchema(articles).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true });

export type Project = typeof projects.$inferSelect;
export type Article = typeof articles.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
