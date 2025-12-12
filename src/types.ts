import { JSX } from "react";

type Sizes = "s" | "m" | "l" | "xl" | "xxl";
export type Product = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: Sizes[] | string[];
  colors: string[];
  images: Record<string, string>;
};

export type Category = {
  name: string;
  icon: JSX.Element;
  slug: string;
};
