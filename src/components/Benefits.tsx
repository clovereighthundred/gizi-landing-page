import { Brain, Rocket, Target, Zap } from "lucide-react";

function Benefits() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#f5f5f5]">
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-50 via-white to-[#5d2de6]/12"></div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading and subheading */}
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Why students and creators love our approach.
            </h2>
            <p className="text-gray-600 font-Be-Vietnam-Pro text-base lg:text-[22px]">
              It's not about selling you the most expensive laptop. It's about
              matching you with the one that perfectly fits your needs — saving
              you stress, time, and money.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            <div className="flex justify-center px-4">
              <div
                className="w-full max-w-3xl bg-blue-50/50 rounded-3xl shadow-lg border border-blue-100 p-8 md:p-12
              transform transition-all duration-300 hover:scale-102 hover:shadow-2xl"
              >
                <div className="max-w-2xl mx-auto px-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-semibold font-Be-Vietnam-Pro text-[#030303] mb-1">
                          Lightning Fast
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-Be-Vietnam-Pro">
                          60 seconds vs. 60 hours of research
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Target className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-semibold font-Be-Vietnam-Pro text-[#030303] mb-1">
                          Laser Accurate
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-Be-Vietnam-Pro">
                          Matches based on your actual usage, not marketing hype
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Brain className="w-6 h-6 lg:w-8 lg:h-8 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-semibold font-Be-Vietnam-Pro text-[#030303] mb-1">
                          Genuinely Smart
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-Be-Vietnam-Pro">
                          Considers factors humans miss: thermal management,
                          software optimization, long-term value
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-semibold font-Be-Vietnam-Pro text-[#030303] mb-1">
                          Stress-Free
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-Be-Vietnam-Pro">
                          No more analysis paralysis or buyer's remorse
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
