import { Cpu, DollarSign, Clock, HelpCircle } from "lucide-react";
import { useInView } from "@/lib/useInView";
import "@/lib/scrollAnimations.css";

function Problem() {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>({ rootMargin: "-12% 0px" });
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ rootMargin: "-8% 0px" });

  return (
    <section id="problem" className="relative py-16 lg:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-50 via-white to-[#5d2de6]/12"></div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={headingRef} className={`text-center mb-12 lg:mb-16 space-y-4 reveal ${headingInView ? "in-view" : ""} reveal-delay-100`}>
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Tech shopping shouldn't feel like rocket science.
            </h2>
            <p className="text-gray-600 font-Be-Vietnam-Pro text-base lg:text-[22px]">
              We get it. Finding the right device for your needs has become impossibly
              complicated.
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`bg-columbia-blue p-6 lg:p-8 rounded-3xl min-h-[200px] lg:justify-center lg:m-4 flex flex-col reveal-scale ${gridInView ? "in-view" : ""}`}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#030303] text-columbia-blue mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-3 font-Be-Vietnam-Pro">
                Overwhelmed by 1000+ options
              </h3>
              <p className="text-gray-600 text-base sm:text-[17px] lg:text-[18px] flex-grow">
                Every brand claims to be "the best" while offering dozens of
                confusing models with similar-sounding names and specs.
              </p>
            </div>
            <div className={`bg-columbia-blue p-6 lg:p-8 rounded-3xl min-h-[200px] lg:justify-center lg:m-4 flex flex-col reveal-scale ${gridInView ? "in-view" : ""}`}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#030303] text-columbia-blue mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-3 font-Be-Vietnam-Pro">
                Drowning in technical jargon
              </h3>
              <p className="text-gray-600 text-base sm:text-[17px] lg:text-[18px] flex-grow">
                RAM, CPU cores, GPU memory, refresh rates—when did buying a
                laptop require an engineering degree?
              </p>
            </div>
            <div className={`bg-columbia-blue p-6 lg:p-8 rounded-3xl min-h-[200px] lg:justify-center lg:m-4 flex flex-col reveal-scale ${gridInView ? "in-view" : ""}`}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#030303] text-columbia-blue mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-3 font-Be-Vietnam-Pro">
                Wasting weeks of research
              </h3>
              <p className="text-gray-600 text-base sm:text-[17px] lg:text-[18px] flex-grow">
                Hours spent comparing reviews, watching YouTube videos, and
                reading forums—only to feel more confused than when you started.
              </p>
            </div>
            <div className={`bg-columbia-blue p-6 lg:p-8 rounded-3xl min-h-[200px] lg:justify-center lg:m-4 flex flex-col reveal-scale ${gridInView ? "in-view" : ""}`}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#030303] text-columbia-blue mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-3 font-Be-Vietnam-Pro">
                Expensive mistakes
              </h3>
              <p className="text-gray-600 text-base sm:text-[17px] lg:text-[18px] flex-grow">
                That sinking feeling when you realize your "perfect" laptop
                can't handle your workload, runs too hot or dies after 3 hours
                unplugged.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center text-center mt-8 lg:mt-10 p-6">
            <p className="text-gray-600 font-Be-Vietnam-Pro font-medium text-base sm:text-xl lg:text-2xl">
              <span className="text-sapphire ">Sound familiar?</span> You're not
              alone. 73% of laptop buyers report feeling overwhelmed by choice,
              and 41% regret their purchase within 6 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
