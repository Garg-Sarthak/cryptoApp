"use client"
import OrderBook from "@/components/orderBook";
import OrderPlace from "@/components/orderPlace";
import TradingView from "@/components/tradingView";
import { useState } from "react";

export default function TradePage() {
    const [symbol, setSymbol] = useState("BTC");
    // const [side, setSide] = useState("BUY");

    return (
        <div>
                <select
                    defaultValue={symbol}
                    className="bg-gray-900 ml-14 mt-4 text-white p-2 rounded"
                    onChange={(e) => {
                        const newSymbol = e.target.value;
                        setSymbol(newSymbol);
                        console.log(newSymbol);
                    }}
                >
                    <option value="BTC">BTC/USDT</option>
                    <option value="ETH">ETH/USDT</option>
                    <option value="SOL">SOL/USDT</option>
                    <option value="DOGE">DOGE/USDT</option>
                </select>
            <div className="grid grid-cols-12 text-white ml-10">
              <div className="col-span-6 m-3 min-h-[640px] max-h-[640px]"><TradingView symbol={symbol.toLowerCase() + "usdt"} /></div>
              <div className="col-span-3 m-4 "><OrderBook symbol={symbol.toLowerCase() + "usdt"} /></div>
              <div className="col-span-3 m-4 "><OrderPlace symbol={symbol.toLowerCase() + "usdt"} symbolPrice={0}/></div>
            </div>


        </div>
    );
}


// export default function TradePage(props : any) {
//     const [symbol,setSymbol] = useState("BTC");
//     const [side,setSide] = useState("BUY");
//     console.log(symbol)

//     return (
//       <div>
//         <select defaultValue={symbol} className="bg-gray-800 text-white m-2 p-2 rounded" onChange={
//             (e) => {
//                 setSymbol(e.target.value)
//             }
//             }>
//             <option value="BTC">BTC/USDT</option>
//             <option value="ETH">ETH/USDT</option>
//             <option value="SOL">SOL/USDT</option>
//             <option value="DOGE">DOGE/USDT</option>
//         </select>
//         <OrderBook symbol={symbol.toLowerCase()+"usdt"}/>
//         </div>
//     );
// }
