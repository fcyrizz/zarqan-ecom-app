
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center">Subscribe to Our Newsletter</h2>
      <p className="text-center mt-2">
        Get the latest news and updates from ZARQAN.
      </p>
      <form className="flex gap-2 mt-8 max-w-md mx-auto">
        <Input type="email" placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </form>
    </div>
  );
}
