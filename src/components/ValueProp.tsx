import { DatabaseZap, Cpu, Gem, BarChart } from "lucide-react";
import { useInView } from "@/lib/useInView";
import "@/lib/scrollAnimations.css";

function ValueProp() {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>({ rootMargin: "-12% 0px" });
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ rootMargin: "-8% 0px" });

  return (
    <section id="valueprop" className="relative py-16 lg:py-24 bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-50 via-white to-[#5d2de6]/8"></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div
            ref={headingRef}
            className={`mb-8 lg:mb-12 reveal ${
              headingInView ? "in-view" : ""
            } reveal-delay-100`}
          >
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Gizi delivers better than generic AI
            </h2>
            <p className="mt-4 text-gray-600 font-Be-Vietnam-Pro text-base lg:text-[20px]">
              Real context. Real performance. Real recommendations.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2  gap-8 md:gap-10 place-items-center"
          >
            <div
              className={`w-full max-w-xs md:max-w-md lg:max-w-lg bg-white shadow-lg border border-gray-100 p-8 md:p-10 rounded-3xl reveal-scale ${
                gridInView ? "in-view" : ""
              } reveal-delay-300 flex flex-col`}
            >
              <div className="flex flex-col items-center text-center gap-6">
                {" "}
                {/* Card 1 */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <DatabaseZap className="w-7 h-7 text-green-500" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-Be-Vietnam-Pro text-[#030303]">
                    Domain-specific performance database
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg font-Be-Vietnam-Pro leading-relaxed max-w-md mx-auto">
                    We analyze real-world benchmarks, workflows and component
                    interactions, not marketing claims.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`w-full max-w-xs md:max-w-md lg:max-w-lg bg-white shadow-lg border border-gray-100 p-8 md:p-10 rounded-3xl reveal-scale ${
                gridInView ? "in-view" : ""
              } reveal-delay-300 flex flex-col`}
            >
              <div className="flex flex-col items-center text-center gap-6">
                {" "}
                {/* Card 2 */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-blue-500" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-Be-Vietnam-Pro text-[#030303]">
                    Context translation engine
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg font-Be-Vietnam-Pro leading-relaxed max-w-md mx-auto">
                    Tell us what you want in your own words, and we translate
                    your goals into technical requirements that actually matter.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`w-full max-w-xs md:max-w-md lg:max-w-lg bg-white shadow-lg border border-gray-100 p-8 md:p-10 rounded-3xl reveal-scale ${
                gridInView ? "in-view" : ""
              } reveal-delay-300 flex flex-col`}
            >
              <div className="flex flex-col items-center text-center gap-6">
                {" "}
                {/* Card 3 */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <Gem className="w-7 h-7 text-purple-500" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-Be-Vietnam-Pro text-[#030303]">
                    Persona-optimized matching
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg font-Be-Vietnam-Pro leading-relaxed max-w-md mx-auto">
                    Gizi matches every user to products based on their unique
                    needs and preferences, not one-size-fits-all criteria.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`w-full max-w-xs md:max-w-md lg:max-w-lg bg-white shadow-lg border border-gray-100 p-8 md:p-10 rounded-3xl reveal-scale ${
                gridInView ? "in-view" : ""
              } reveal-delay-300 flex flex-col`}
            >
              <div className="flex flex-col items-center text-center gap-6">
                {" "}
                {/* Card 4 */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <BarChart className="w-7 h-7 text-orange-500" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-Be-Vietnam-Pro text-[#030303]">
                    Real-world performance, not theoretical specs.
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg font-Be-Vietnam-Pro leading-relaxed max-w-md mx-auto">
                    Our agent picks the device that performs best for your
                    actual use case, based on field-tested impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProp;
