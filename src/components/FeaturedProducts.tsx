
import products from "@/data/products.json";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
