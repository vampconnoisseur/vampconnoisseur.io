import { Project } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";

export async function fetchProjects(): Promise<Project[]> {
  noStore();
  try {
    const data = await sql<Project>`
      SELECT * FROM projects
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch projects.");
  }
}
