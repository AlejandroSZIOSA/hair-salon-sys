export type Available = {
  id: string;
  date: string;
  availableSlots: string[];
};

export const AVAILABLE: Available[] = [
  {
    id: "1",
    date: "2026-09-15",
    availableSlots: ["09:00", "09:30", "10:00", "10:30", "11:00"],
  },
  {
    id: "2",
    date: "2026-09-16",
    availableSlots: ["09:00", "09:30", "10:00", "10:30"],
  },
];
