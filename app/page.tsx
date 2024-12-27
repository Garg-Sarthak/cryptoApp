"use client"
import {config} from "dotenv"
import { useState } from "react";

config()

const socket = new WebSocket(process.env.NEXT_PUBLIC_BINANCE_MICRO_URL as string);  // can't use env variables in client side code



export default function Home() {
  const [price,setPrice] = useState(0)
  
  socket.onmessage = (msg) => {
    if (msg.data === "Connected to server") return
    const dataObj= JSON.parse(msg.data);
    setPrice(dataObj.price);
  }

  return (
    <div>
      Price : {price}
    </div>
  );
}
