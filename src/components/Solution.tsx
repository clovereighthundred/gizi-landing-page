import { Button } from "./ui/button";
import { useInView } from "@/lib/useInView";
import "@/lib/scrollAnimations.css";

function Solution() {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>({ rootMargin: "-12% 0px" });
  const { ref: imageGroupRef, inView: imageGroupInView } = useInView<HTMLDivElement>({ rootMargin: "-10% 0px" });

  return (
    <section id="features" className="relative py-16 lg:py-24 bg-slate-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headingRef}
            className={`text-center mb-12 lg:mb-16 space-y-5 reveal ${
              headingInView ? "in-view" : ""
            } reveal-delay-100`}
          >
            <div className="my-4 lg:my-6 p-4">
              <Button className="text-xs font-medium rounded-xl font-Be-Vietnam-Pro text-white bg-sapphire transition-all duration-300">
                HOW GIZI WORKS
              </Button>
            </div>
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Meet the smarter way to purchase your tech.
            </h2>
            <p className="text-gray-600 font-Be-Vietnam-Pro text-base lg:text-[20px]">
              We analyze your actual needs, whether you design, code, game, or
              study — and match you with the device{" "}
              <span className="italic">truly</span> built for you.
            </p>
          </div>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {/* Image + Card 1 */}
          <div
            ref={imageGroupRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 font-Be-Vietnam-Pro">
                  Tell us what matters
                </h3>
                <p className="text-gray-600 text-lg lg:text-[20px] leading-normal font-Be-Vietnam-Pro">
                  Tell us what you want to do and what's important to you. No
                  need to know specs or technical terms—just share your context
                  in your own words.
                </p>
              </div>
            </div>
            <div
              className={`order-1 lg:order-2 reveal-scale ${
                imageGroupInView ? "in-view" : ""
              }`}
            >
              <div className="relative">
                <img
                  src="/tuwm2.png"
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
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 font-Be-Vietnam-Pro">
                  AI does the heavy lifting
                </h3>
                <p className="text-gray-600 text-lg lg:text-[20px] leading-normal font-Be-Vietnam-Pro">
                  Our buying agent analyzes thousands of products from different
                  sources, benchmarks and reviews and finds the best matches
                  made for you.
                </p>
              </div>
            </div>
            <div
              className={`order-1 lg:order-1 reveal-scale ${
                imageGroupInView ? "in-view" : ""
              }`}
            >
              <div className="relative">
                <img
                  src="/aidthl1.png"
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
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 font-Be-Vietnam-Pro">
                  Get personalized results
                </h3>
                <p className="text-gray-600 text-lg lg:text-[20px] leading-normal font-Be-Vietnam-Pro">
                  We show you products that actually fit, with straightforward
                  explanations of why each one works for you.
                </p>
              </div>
            </div>
            <div
              className={`order-1 lg:order-2 reveal-scale ${
                imageGroupInView ? "in-view" : ""
              }`}
            >
              <div className="relative">
                <img
                  src="/gpr2.jpg"
                  alt="Step 3 illustration"
                  className="w-full h-auto rounded-2xl shadow-lg max-w-2xl mx-auto
                  transform transition-all duration-300 
                  hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
                />
              </div>
            </div>
          </div>

          {/* Image + Card 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            <div className="order-2 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-4xl font-semibold text-gray-900 font-Be-Vietnam-Pro">
                  Purchase your perfect fit
                </h3>
                <p className="text-gray-600 text-lg lg:text-[20px] leading-normal font-Be-Vietnam-Pro">
                  Pick what works for you and check out with confidence.
                </p>
              </div>
            </div>
            <div
              className={`order-1 lg:order-1 reveal-scale ${
                imageGroupInView ? "in-view" : ""
              }`}
            >
              <div className="relative">
                <img
                  src="/pypf.png"
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
