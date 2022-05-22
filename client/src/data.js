import { v4 as uuidv4 } from "uuid";

//the slots data is also for a given data => today!!!
const SLOTS = [
  {
    time: "12:30",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "13:10",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "13:50",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "14:30",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "15:10",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "15:50",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "16:30",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "17:10",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "18:50",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "18:30",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "19:10",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "19:50",
    isBooked: true,
    id: uuidv4(),
  },
  {
    time: "20:30",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "21:10",
    isBooked: false,
    id: uuidv4(),
  },
  {
    time: "21:50",
    isBooked: false,
    id: uuidv4(),
  },

  {
    time: "22:30",
    isBooked: false,
    id: uuidv4(),
  },
];

//they should be bookings for a given date => today!
//we can call on booking for any given day.
const BOOKINGS = [
  {
    time: "12:30",
    date: new Date(Date.now()).toDateString(),
    status: "completed",
    name: "Bill Gates",
    phone: "010-0000-0000",
    id: uuidv4(),
    slotId: "",
  },
  {
    time: "14:30",
    date: new Date(Date.now()).toDateString(),
    status: "pending",
    name: "Elon Musk",
    phone: "010-0000-0000",
    id: uuidv4(),
    slotId: "",
  },
  {
    time: "22:30",
    date: new Date(Date.now()).toDateString(),
    status: "cancelled",
    name: "Isaac Newton",
    phone: "010-0000-0000",
    id: uuidv4(),
    slotId: "",
  },
];

export { SLOTS, BOOKINGS };
