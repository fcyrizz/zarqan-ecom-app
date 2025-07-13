
import { useCartStore } from "@/lib/store";
import { Button } from "./ui/button";

export function Cart() {
  const { items, removeItem } = useCartStore();

  return (
    <div className="absolute top-12 right-0 bg-secondary p-4 rounded-lg w-80">
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                X
              </Button>
            </div>
          ))}
          <Button className="w-full mt-4">Proceed to Checkout</Button>
        </>
      )}
    </div>
  );
}
