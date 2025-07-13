import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCartStore } from "@/lib/store";
import { Cart } from "./Cart";
import { useState } from "react";

export function Header() {
  const items = useCartStore((state) => state.items);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">ZARQAN</h1>
      <nav className="hidden md:flex gap-4">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="relative">
        <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(!isCartOpen)}>
          <ShoppingCart className="h-6 w-6" />
          {items.length > 0 && (
            <span className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full h-4 w-4 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
        {isCartOpen && <Cart />}
      </div>
    </header>
  );
}