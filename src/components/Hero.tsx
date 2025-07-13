
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <img
        src="/images/hero-bg.jpg"
        alt="ZARQAN"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold">ZARQAN</h1>
        <p className="text-lg mt-4">Experience the art of jewelry</p>
        <Button className="mt-8">Shop Now</Button>
      </div>
    </div>
  );
}
