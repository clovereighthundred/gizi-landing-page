import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, status: "pending" }]);

    if (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Thanks for joining the waitlist!🎉");
      setEmail("");
    }

    setLoading(false);
  };

  return (
    <section className="relative lg:min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-full blur-3xl"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 mx-0 md:mx-0 px-4 sm:px-6 lg:px-0 pt-4 sm:pt-12 lg:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-24 lg:pl-8 xl:pl-16 lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="max-w-6xl lg:mx-0 lg:ml-0">
          <div className="text-center lg:text-left space-y-6 md:space-y-8 lg:space-y-12 lg:max-w-4xl lg:mx-0">
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
            <div
              id="waitlist"
              className="bg-white backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl max-w-md mx-auto lg:mx-0 hover:scale-[1.04] transition-all duration-200"
            >
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
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#2556bc] to-blue-600 hover:from-[#1e4a9f] hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transform hover:scale-[1.05] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {loading ? "Submitting..." : ""}
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
                  {message && (
                    <p className="text-center text-sm mt-2">{message}</p> // Display success or error message
                  )}
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
          </div>
        </div>

        {/* Hero Image visible only on desktop */}
        <div className="hidden lg:flex lg:items-stretch lg:justify-end lg:h-full">
          <div className="relative w-full max-w-2xl xl:max-w-3xl flex items-center">
            <img
              src="/macbook3.png"
              alt="Perfect laptop match for your needs"
              className="w-full h-[900px] object-cover drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-300 max-h-[900px] lg:min-h-screen xl:max-h-[1000px]"
            />
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>{" "}
      {/* Main content ends here */}
    </section>
  );
}

export default Hero;
