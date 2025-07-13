
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function AboutPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center">About ZARQAN</h1>
        <div className="max-w-2xl mx-auto mt-8">
          <p>
            ZARQAN is a premium jewelry brand that specializes in creating
            timeless pieces of art. Our mission is to provide our customers
            with the highest quality jewelry that they can cherish for a
            lifetime.
          </p>
          <p className="mt-4">
            We use only the finest materials and our craftsmen are among the
            best in the world. Each piece of jewelry is handcrafted with love
            and care, ensuring that it is a true masterpiece.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
