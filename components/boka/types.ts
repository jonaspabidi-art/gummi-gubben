export type ServiceId = "hjulskifte" | "dackservice" | "dackhotell";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  price: string;
  priceNum: number | null;
  icon: string;
}

export interface Vehicle {
  regNumber: string;
  model: string;
  year: string;
  name: string;
  email: string;
  phone: string;
}

export interface BookingState {
  service: Service | null;
  vehicle: Vehicle | null;
  date: Date | null;
  time: string | null;
}

export const SERVICES: Service[] = [
  {
    id: "hjulskifte",
    title: "Hjulskifte",
    description: "Snabbt och säkert byte mellan sommar- och vinterhjul.",
    price: "450 kr",
    priceNum: 450,
    icon: "tire_repair",
  },
  {
    id: "dackservice",
    title: "Däckservice",
    description: "Balansering, lagning eller kontroll av dina däck.",
    price: "Från 200 kr",
    priceNum: 200,
    icon: "build",
  },
  {
    id: "dackhotell",
    title: "Däckhotell",
    description: "Förvaring, tvätt och kontroll inför nästa säsong.",
    price: "950 kr/säsong",
    priceNum: 950,
    icon: "warehouse",
  },
];

export const TIME_SLOTS = ["08:00", "09:30", "11:00", "13:30", "15:00", "16:30"];
