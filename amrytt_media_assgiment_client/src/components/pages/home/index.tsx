"use client";

import { productCard } from "@/data/dashboard";
import ProductCard from "./productCard";
import TopProductCard from "./topProductCard";
import TopCategoryCard from "./topCategoryCard";
import { Payment } from "@/utils/model/datatable";
import { useState } from "react";

export default function HomePage() {
  const [productData, setProductData] = useState<Payment[]>([]);
  const [categoryData, setCategoryData] = useState<Payment[]>([]);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1
          className="font-public-sans font-medium text-[28px] leading-[32.9px] tracking-[0.01em] text-left"
          style={{ textDecorationSkipInk: "none" }}
        >
          Welcome Back Jenil
        </h1>
        <p
          className="font-public-sans font-normal text-[18px] leading-[28px] tracking-[0.01em] text-left text-jumbo-400"
          style={{ textDecorationSkipInk: "none" }}
        >
          Lorem ipsum dolor si amet welcome back jenil
        </p>
      </div>
      <div className="flex flex-wrap gap-6 w-full">
        {productCard.map((item) => (
          <ProductCard key={item.id} data={item} productData={productData} categoryData={categoryData} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 w-full">
        <div className="flex-grow">
          <TopProductCard setProductData={setProductData} />
        </div>
        <div className="flex-grow">
          <TopCategoryCard productData={productData} setCategoryData={setCategoryData} />
        </div>
      </div>
    </div>
  );
}
