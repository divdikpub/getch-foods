import sql from "@/db";

export interface Food {
  id: number;
  name: string;
  price: number;
}

export async function GET() {
  const foods = await sql`SELECT * FROM foods`;
  return Response.json(foods);
}
