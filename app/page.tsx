import Button from "@/components/button";
import { Food } from "./api/foods/route";
import { Soup } from "lucide-react";
import FoodButton from "@/components/food-button";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/foods`);
  const foods = (await response.json()) as Food[];

  return (
    <main className="flex flex-col gap-4 justify-center items-center h-[calc(100vh-4rem)]">
      <h1 className="text-4xl">Selamat datang di GetchFoods!</h1>
      <p>(ini halaman home)</p>
      <Button href="/about">Tentang</Button>
      <div className="flex gap-4">
        {foods.map((food) => (
          <div key={food.id} className="p-8 rounded-lg shadow-lg flex-1">
            <Soup className="size-12" />
            <div>{food.name}</div>
            <div>
              {food.price.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}
            </div>
            <FoodButton />
          </div>
        ))}
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";
