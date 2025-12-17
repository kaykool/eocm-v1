import Categories from "@/components/Categories";
import ProductsGrid from "@/components/ProductsGrid";
import { productsDummy } from "@/data";

const HomeCatalog = async () => {
  return (
    <div className="flex flex-col gap-6 ">
      <Categories />
      <ProductsGrid products={productsDummy} />
    </div>
  );
};

export default HomeCatalog;
