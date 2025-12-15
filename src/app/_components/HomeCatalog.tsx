import Categories from "@/components/Categories";
import ProductsGrid from "@/components/ProductsGrid";
import { productsDummy } from "@/data";

const HomeCatalog = () => {
  return (
    <div
      className="flex flex-col gap-4
     "
    >
      <Categories />
      <ProductsGrid products={productsDummy} />
    </div>
  );
};

export default HomeCatalog;
