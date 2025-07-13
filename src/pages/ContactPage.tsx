
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <form className="max-w-xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <Textarea placeholder="Message" className="mt-4" />
          <Button className="mt-4">Send Message</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
