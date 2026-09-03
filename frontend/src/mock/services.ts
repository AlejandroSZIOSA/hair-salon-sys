import type { Service } from "@/types/shared";

export const mockServices: Service[] = [
  {
    id: 1,
    name: "Haircut",
    description: "Classic haircut",
    price: 350,
    durationMinutes: 30,
    active: true,
  },
  {
    id: 2,
    name: "Haircut + Beard",
    description: "Haircut and beard trim",
    price: 450,
    durationMinutes: 45,
    active: true,
  },
  {
    id: 3,
    name: "Hair Coloring",
    description: "Full hair coloring",
    price: 900,
    durationMinutes: 120,
    active: false,
  },
];
