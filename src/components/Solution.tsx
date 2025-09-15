import { Button } from "./ui/button";

function Solution() {
  return (
    <section className="relative py-16 lg:py-24 bg-slate-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-5">
            <div className="my-4 lg:my-6 p-4">
              <Button className="text-xs font-medium rounded-xl font-Be-Vietnam-Pro text-white bg-sapphire transition-all duration-300">
                HOW IT WORKS
              </Button>
            </div>
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Meet the smarter way to choose your next laptop.
            </h2>
            <p className="text-gray-600 font-Be-Vietnam-Pro text-base lg:text-[20px]">
              No more spec overload. No more wasted money. Our algorithm
              analyzes your unique needs — whether you're a designer,
              programmer, gamer, or student — and recommends the laptop that's{" "}
              <span className="italic">actually</span> built for you.
            </p>
          </div>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {/* Image + Card 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  Step 1
                </div>
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 font-Be-Vietnam-Pro">
                  Tell us what matters
                </h3>
                <p className="text-gray-600 text-lg lg:text-[20px] leading-normal font-Be-Vietnam-Pro">
                  Answer a few smart questions about how you'll actually use
                  your laptop. No technical knowledge required—we speak human,
                  not spec-sheet.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/typing.jpg"
                  alt="Step 1 illustration"
                  className="w-full h-auto rounded-2xl shadow-lg max-w-2xl mx-auto
                  transform transition-all duration-300 
                  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
                />
              </div>
            </div>
          </div>

          {/* Image + Card 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            <div className="order-2 lg:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                  Step 2
                </div>
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 font-Be-Vietnam-Pro">
                  AI does the heavy lifting
                </h3>
                <p className="text-gray-600 text-lg lg:text-[20px] leading-normal font-Be-Vietnam-Pro">
                  Our machine learning algorithm analyzes thousands of laptops
                  across performance benchmarks, real-world reviews, and
                  compatibility factors you'd never think to check.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-1">
              <div className="relative">
                <img
                  src="/processing.jpg"
                  alt="Step 1 illustration"
                  className="w-full h-auto rounded-2xl shadow-lg max-w-2xl mx-auto
                  transform transition-all duration-300 
                  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
                />
              </div>
            </div>
          </div>

          {/* Image + Card 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                  Step 3
                </div>
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 font-Be-Vietnam-Pro">
                  Get personalized results
                </h3>
                <p className="text-gray-600 text-lg lg:text-[20px] leading-normal font-Be-Vietnam-Pro">
                  Receive a curated list of personalized recommendations with
                  clear explanations of why each laptop fits your specific needs
                  and budget.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/macbook5.jpg"
                  alt="Step 3 illustration"
                  className="w-full h-auto rounded-2xl shadow-lg max-w-2xl mx-auto
                  transform transition-all duration-300 
                  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
