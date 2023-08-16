import { sql } from "@vercel/postgres";

export async function getSortedPostsData() {
  const { rows } = await sql`SELECT * from article;`;
  return rows;
}