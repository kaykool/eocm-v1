import Categories from "@/components/Categories";
import ProductsGrid from "@/components/ProductsGrid";
import { productsDummy } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HomeCatalog = async ({ category }: { category: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <Categories />
      <ProductsGrid products={productsDummy} />
      <Link
        href={category ? `/products?category=${category}` : "/products"}
        className="gap-2 font-bold p-2 flex justify-center w-full border border-yellow-400"
      >
        View All Products
        <ArrowRight />
      </Link>
    </div>
  );
};

export default HomeCatalog;
