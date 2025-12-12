import Categories from "@/components/Categories";
import ProductsGrid from "@/components/ProductsGrid";
import { productsDummy } from "@/data";

const HomeCatalog = () => {
  return (
    <div className="flex flex-col ">
      <Categories />
      <ProductsGrid products={productsDummy} />
    </div>
  );
};

export default HomeCatalog;
