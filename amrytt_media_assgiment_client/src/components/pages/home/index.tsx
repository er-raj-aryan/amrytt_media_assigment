"use client"

import { productCard } from "@/data/dashboard";
import ProductCard from "./productCard";
import TopProductCard from "./topProductCard";

export default function HomePage() {



  return (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
            <h1 className="font-public-sans font-medium text-[28px] leading-[32.9px] tracking-[0.01em] text-left" style={{textDecorationSkipInk: "none"}}>Welcome Back Jenil</h1>
            <p className="font-public-sans font-normal text-[18px] leading-[28px] tracking-[0.01em] text-left text-jumbo-400" style={{textDecorationSkipInk: "none"}}>Lorem ipsum dolor si amet welcome back jenil</p>
        </div>
        <div className="flex flex-wrap gap-6 w-full">
          {
            productCard.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))
          }
        </div>
        <div>
          <TopProductCard />
        </div>
    </div>
  );
}
