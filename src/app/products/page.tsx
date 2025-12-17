import Categories from "@/components/Categories";
import { EDropdown } from "@/components/EDropdown";
import ProductsGrid from "@/components/ProductsGrid";
import { productsDummy, sortList } from "@/data";

const Page = () => {
  return (
    <div className=" main-container flex-col gap-8 m-4 ">
      <Categories />
      <EDropdown name="sortBy" data={sortList} />
      <ProductsGrid products={productsDummy} />
    </div>
  );
};

export default Page;
