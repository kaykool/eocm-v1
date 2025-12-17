"use client";

import { cn } from "@/lib/cn";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IProductItem {
  product: Product;
}

type ProductType = {
  type: "size" | "color";
  value: string;
};

const ProductItem = ({ product }: IProductItem) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  const [producyType, setProducyType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductType = ({ type, value }: ProductType) => {
    setProducyType((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className=" shadow-lg rounded-lg overflow-hidden min-h-72">
      <div className="relative aspect-[2/2.5]">
        <Link href={`products/${product.id}`}>
          <Image
            src={product.images[product.colors[selectedColorIndex]]}
            fill
            alt={product.name}
            className="hover:scale-105 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="flex flex-col p-4 text-sm gap-2">
        <h3 className="font-bold text-md">{product.name}</h3>
        <p className="py-0 text-gray-600">{product.shortDescription}</p>

        <div className="flex gap-6">
          <div className="flex flex-col  gap-1">
            <div className="">Size</div>
            <select
              name="size"
              id="size"
              className="border p-1 rounded-md"
              onChange={(e) => {
                handleProductType({ type: "size", value: e.target.value });
              }}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <div className="">Colors</div>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color, index) => {
                const isColorSelected = selectedColorIndex === index;

                return (
                  <button
                    onClick={() => {
                      setSelectedColorIndex(index);

                      handleProductType({
                        type: "color",
                        value: color,
                      });
                    }}
                    key={color}
                    className={cn(
                      "flex justify-center items-center rounded-full border border-gray-300 py-1 px-1 gap-1 ",
                      { " px-1.5": selectedColorIndex === index }
                    )}
                  >
                    <span
                      className="rounded-full w-4 h-4 border border-gray-200 flex justify-center items-center"
                      style={{ background: color }}
                    />
                    {isColorSelected && (
                      <span className="text-xs capitalize font-bold text-black ">
                        {color}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center">
          <div className="font-bold text-lg">${product.price.toFixed(0)}</div>
          <button className="p-1 px-2 rounded-md shadow-md text-sm font-semibold border border-gray-400 hover:bg-black hover:text-white">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
