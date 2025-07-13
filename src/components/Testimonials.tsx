
export function Testimonials() {
  return (
    <div className="py-12 bg-secondary">
      <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-lg">"The best jewelry I've ever owned!"</p>
          <p className="text-gray-500 mt-2">- Jane Doe</p>
        </div>
        <div className="text-center">
          <p className="text-lg">"Amazing quality and craftsmanship."</p>
          <p className="text-gray-500 mt-2">- John Smith</p>
        </div>
        <div className="text-center">
          <p className="text-lg">"I'm in love with my new necklace."</p>
          <p className="text-gray-500 mt-2">- Sarah Johnson</p>
        </div>
      </div>
    </div>
  );
}
