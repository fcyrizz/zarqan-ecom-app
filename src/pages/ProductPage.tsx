import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import products from "@/data/products.json";
import { ProductCard } from "@/components/ProductCard";
import { useCartStore } from "@/lib/store";

export function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products.filter((p) => product.related.includes(p.id));

  return (
    <div>
      <Header />
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl text-primary mt-2">${product.price}</p>
            <p className="mt-4">{product.description}</p>
            <Button className="mt-8" onClick={() => addItem(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}