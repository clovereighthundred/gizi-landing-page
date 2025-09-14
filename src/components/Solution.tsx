import { Button } from "./ui/button";

function Solution() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-5">
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Meet the smarter way to choose your next laptop.
            </h2>
            <p className="text-gray-600 font-Be-Vietnam-Pro text-base lg:text-[20px]">
              No more spec overload. No more wasted money. Our algorithm
              analyzes your unique needs — whether you're a designer,
              programmer, gamer, or student — and recommends the laptop that's{" "}
              <span className="italic">actually</span> built for you.
            </p>
            <div className="my-4 lg:my-6 p-4">
              <Button className="text-xs font-medium rounded-xl font-Be-Vietnam-Pro text-white bg-electric-indigo transition-all duration-300">
                HOW IT WORKS
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
      </div>
    </section>
  );
}

export default Solution;
