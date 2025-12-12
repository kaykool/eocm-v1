import { Product } from "@/types";
import ProductItem from "./ProductItem";

interface IProductsGrid {
  products: Product[];
}

const ProductsGrid = ({ products }: IProductsGrid) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
