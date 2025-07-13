import { Button } from "./ui/button";
import { useCartStore } from "@/lib/store";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="border rounded-lg p-4">
      <a href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <h3 className="text-lg font-bold mt-4">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
      </a>
      <Button className="mt-4 w-full" onClick={() => addItem(product)}>
        Add to Cart
      </Button>
    </div>
  );
}