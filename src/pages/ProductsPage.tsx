
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import products from "@/data/products.json";

export function ProductsPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
