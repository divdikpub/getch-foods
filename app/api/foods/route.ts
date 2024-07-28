export interface Food {
  id: number;
  name: string;
  price: number;
}

const foods: Food[] = [
  {
    id: 1,
    name: "Seblak",
    price: 10000,
  },
  {
    id: 2,
    name: "Bakso Malang Enggal",
    price: 20000,
  },
  {
    id: 3,
    name: "Bakso Mas Yos",
    price: 15000,
  },
];

export function GET() {
  return Response.json(foods);
}
