import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const ViewAllButton = ({ category }: { category: string }) => {
  return (
    <Link
      href={category ? `/products?category=${category}` : "/products"}
      className="gap-2 rounded-md font-bold p-2 flex justify-center w-full border border-yellow-400"
    >
      View All Products
      <ArrowRight />
    </Link>
  );
};
