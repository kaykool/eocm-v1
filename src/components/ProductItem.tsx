import { Product } from "@/types";

interface IProductItem {
  product: Product;
}

const ProductItem = ({ product }: IProductItem) => {
  return <div className="border min-h-72">{product.name}</div>;
};

export default ProductItem;
