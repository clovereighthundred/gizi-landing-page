import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  // return (
  //   <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-[#f8f8f8] flex justify-center items-center">
  //     <div className="flex items-center flex-col xl:flex-row justify-center gap-10 md:gap-20 w-full relative">
  //       <div className="grid lg:grid-cols-2 gap-12 items-center">
  //         {/* Hero Content */}
  //         <div className="space-y-8">
  //           <div className="space-y-4">
  //             <h1 className="text-4xl/tight sm:text-8xl/tight lg:text-6xl xl:text-7xl mb-6 lg:mb-8 font-semibold font-Poppins text-black text-center md:text-left leading-tight">
  //               Find gadgets that suit{" "}
  //               <span className="text-[#2556bc]">your needs</span>
  //             </h1>
  //             <br />
  //             <p className="text-[20px] sm:text-[20px] lg:text-xl mb-8 lg:mb-12 text-muted-foreground font-Be-Vietnam-Pro">
  //               Our intelligent system eliminates the guesswork by analyzing
  //               your unique needs and matching you to the perfect laptop in
  //               under 60 seconds.
  //             </p>
  //           </div>

  //           {/* Waitlist email form */}
  //           <div className="space-y-4 ">
  //             <h3 className="text-lg font-Be-Vietnam-Pro font-semibold text-black">
  //               Join the waitlist for early access
  //             </h3>
  //             <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
  //               <Input
  //                 type="email"
  //                 placeholder="Enter your email"
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //                 required
  //                 className="flex-1"
  //               />
  //               <Button type="submit" variant="default" className="px-6">
  //                 Join Waitlist
  //               </Button>
  //             </form>
  //             <p className=" font-Be-Vietnam-Pro text-sm text-muted-foreground">
  //               Be the first to know when we launch. No spam, ever.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-full blur-3xl"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center lg:text-left space-y-8 lg:space-y-12">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  AI-Powered Matching
                </span>
              </div>
            </div>

            {/* Hero Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl md:[98px] font-semibold font-Poppins text-gray-900 leading-[1.1] tracking-tight">
                Find gadgets that suit{" "}
                <span className="relative">
                  <span className="text-transparent bg-gradient-to-r from-[#2556bc] via-blue-600 to-purple-600 bg-clip-text">
                    your needs
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2556bc]/20 via-blue-600/20 to-purple-600/20 blur-lg -z-10 rounded-lg"></div>
                </span>
              </h1>

              <p className="text-lg sm:text-xl/snug text-gray-600 font-Be-Vietnam-Pro leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our intelligent system eliminates the guesswork by analyzing
                your unique needs and matching you to the perfect laptop in
                under 60 seconds.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 py-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#2556bc]">
                  10K+
                </div>
                <div className="text-sm text-gray-600">Devices Analyzed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#2556bc]">
                  60s
                </div>
                <div className="text-sm text-gray-600">Average Match Time</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#2556bc]">
                  98%
                </div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl max-w-md mx-auto lg:mx-0">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold font-Be-Vietnam-Pro text-gray-900">
                    Join the waitlist for early access
                  </h3>
                  <p className="text-gray-600 font-Be-Vietnam-Pro">
                    Be the first to know when we launch. No spam, ever.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-[#2556bc] focus:ring-2 focus:ring-[#2556bc]/20 transition-all duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2556bc] to-blue-600 hover:from-[#1e4a9f] hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Join Waitlist
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </Button>
                </form>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>100% privacy guaranteed</span>
                </div>
              </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Content ends here */}
    </section>
  );
}

export default Hero;
