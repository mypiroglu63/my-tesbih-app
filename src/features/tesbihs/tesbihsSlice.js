import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    image: "/Çekoslovak.jpeg",
    name: "Çekoslovak Tesbih",
    stone: "Kehribar",
    price: 150,
    description: "Çekoslovak kehribar tesbih.",
  },
  {
    image: "/2.jpeg",
    name: "Eski Alman Katalin Tesbih",
    stone: "Katalin",
    price: 200,
    description: "Eski Alman Katalin tesbih.",
  },
  {
    image: "/4.jpeg",
    name: "Eski Alman Katalin Tesbih",
    stone: "Katalin",
    price: 200,
    description: "Eski Alman Katalin tesbih.",
  },
  {
    image: "/3.jpeg",
    name: "Osmanlı Ağızlık Tesbih",
    stone: "Kehribar",
    price: 250,
    description: "Osmanlı ağızlık tesbih.",
  },
];

const tesbihsSlice = createSlice({
  name: "tesbihs",
  initialState,
  reducers: {},
});

export default tesbihsSlice.reducer;
