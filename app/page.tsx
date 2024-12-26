"use client"
import { useState } from "react";
import {config} from "dotenv"

config()

const socket = new WebSocket(process.env.NEXT_PUBLIC_BINANCE_MICRO_URL || "");  // can't use env variables in client side code

export default function Home() {
  const [price,setPrice] = useState(0)
  socket.onmessage = (data) => {
    if (data.data === "Connected to server") return
    const dataObj= JSON.parse(data.data);
    /*
    */
    setPrice(dataObj.price);
  }

  return (
    <div>
      Price : {price}
    </div>
  );
}
