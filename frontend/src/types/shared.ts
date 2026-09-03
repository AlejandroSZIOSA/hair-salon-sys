export type AppointmentStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled";

export type PaymentStatus = "unpaid" | "paid" | "refunded";

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  active: boolean;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Appointment {
  id: number;
  customerId: number;
  employeeId: number;
  serviceId: number;
  startTime: string;
  endTime: string;
  status: AppointmentStatus;
  paymentStatus: PaymentStatus;
  notes?: string;
}
