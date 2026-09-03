import type { Appointment } from "@/types/shared";

export const mockAppointments: Appointment[] = [
  {
    id: 1,
    customerId: 1,
    employeeId: 1,
    serviceId: 2,
    startTime: "2026-09-10T10:00:00",
    endTime: "2026-09-10T10:45:00",
    status: "confirmed",
    paymentStatus: "paid",
  },
  {
    id: 2,
    customerId: 2,
    employeeId: 2,
    serviceId: 1,
    startTime: "2026-09-10T11:00:00",
    endTime: "2026-09-10T11:30:00",
    status: "pending",
    paymentStatus: "unpaid",
  },
];
