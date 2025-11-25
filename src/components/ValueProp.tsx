import { Layers, Cpu, ShieldCheck, BarChart } from "lucide-react";
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
          <div ref={headingRef} className={`mb-8 lg:mb-12 reveal ${headingInView ? "in-view" : ""} reveal-delay-100`}>
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Why Gizi delivers better than generic AI
            </h2>
            <p className="mt-4 text-gray-600 font-Be-Vietnam-Pro text-base lg:text-[20px]">
              Real context. Real performance. Real recommendations.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 justify-center items-stretch`}
          >
            <div
              className={`w-full max-w-xs md:w-80 lg:w-72 xl:w-64 box-border bg-white shadow-lg border border-gray-100 p-5 rounded-3xl reveal-scale ${
                gridInView ? "in-view" : ""
              } reveal-delay-100 min-h-[280px] flex flex-col justify-start`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold font-Be-Vietnam-Pro text-[#030303] mb-2">
                    Real-World Context
                  </h3>
                  <p className="text-gray-600 text-sm font-Be-Vietnam-Pro leading-relaxed hyphens-auto">
                    Gizi uses contextual inputs — workload, preferences, and
                    real usage signals — so recommendations are tailored to how
                    you actually use your device, not just raw specs.
                  </p>
                </div>
              </div>
            </div>

            <div className={`w-full max-w-xs md:w-80 lg:w-72 xl:w-64 box-border bg-white shadow-lg border border-gray-100 p-5 rounded-3xl reveal-scale ${gridInView ? "in-view" : ""} reveal-delay-200 min-h-[280px] flex flex-col justify-start`}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-sapphire" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold font-Be-Vietnam-Pro text-[#030303] mb-2">
                    Expert-Calibrated Models
                  </h3>
                  <p className="text-gray-600 text-sm font-Be-Vietnam-Pro leading-relaxed hyphens-auto">
                    We combine ML with domain expertise — benchmarks and
                    human validation ensure suggestions are practical and
                    reliable for real tasks.
                  </p>
                </div>
              </div>
            </div>

            <div className={`w-full max-w-xs md:w-80 lg:w-72 xl:w-64 box-border bg-white shadow-lg border border-gray-100 p-5 rounded-3xl reveal-scale ${gridInView ? "in-view" : ""} reveal-delay-300 min-h-[280px] flex flex-col justify-start`}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold font-Be-Vietnam-Pro text-[#030303] mb-2">
                    Transparent Recommendations
                  </h3>
                  <p className="text-gray-600 text-sm font-Be-Vietnam-Pro leading-relaxed hyphens-auto">
                    Every suggestion includes reasons and trade-offs so you can
                    understand why a device was chosen — no black-box picks.
                  </p>
                </div>
              </div>
            </div>

            <div className={`w-full max-w-xs md:w-80 lg:w-72 xl:w-64 box-border bg-white shadow-lg border border-gray-100 p-5 rounded-3xl reveal-scale ${gridInView ? "in-view" : ""} reveal-delay-300 min-h-[280px] flex flex-col justify-start`}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold font-Be-Vietnam-Pro text-[#030303] mb-2">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-600 text-sm font-Be-Vietnam-Pro leading-relaxed hyphens-auto">
                    Recommendations learn from real feedback and live data,
                    improving over time so results stay accurate as hardware
                    and workloads evolve.
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
