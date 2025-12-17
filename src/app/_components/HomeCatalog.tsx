import Categories from "@/components/Categories";
import { EDropdown } from "@/components/EDropdown";
import ProductsGrid from "@/components/ProductsGrid";
import { productsDummy, sortList } from "@/data";

const HomeCatalog = async () => {
  return (
    <div className="flex flex-col gap-6 ">
      <Categories />
      <EDropdown name="sortBy" data={sortList} />

      <ProductsGrid products={productsDummy} />
    </div>
  );
};

export default HomeCatalog;
