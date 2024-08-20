"use client";

import Button from "@/components/button";
import { Food } from "../api/foods/route";
import { useEffect, useState } from "react";

export default function Page() {
  const [foods, setFoods] = useState<Food[]>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/foods`)
      .then((response) => response.json())
      .then((foods) => setFoods(foods));
  }, []);

  return (
    <div>
      <Button>Buat</Button>
      <table className="[&_th]:border [&_td]:border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {foods?.map((food) => (
            <tr key={food.id}>
              <td>{food.id}</td>
              <td>{food.name}</td>
              <td>
                {food.price.toLocaleString("id", {
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
              <td className="p-2 flex gap-2">
                <Button>Edit</Button>
                <Button>Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
