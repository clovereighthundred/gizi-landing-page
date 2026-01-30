import Footer from "./Footer"
import { useInView } from "@/lib/useInView";
import "@/lib/scrollAnimations.css";

const Company = () => {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>({ rootMargin: "-12% 0px" });
  // const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ rootMargin: "-8% 0px" });
    return (
      <>
        <section id="company" className="relative py-16 lg:py-24 bg-white">
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <div
                ref={headingRef}
                className={`mb-8 lg:mb-12 reveal ${
                  headingInView ? "in-view" : ""
                } reveal-delay-100`}
              >
                <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
                  What we're all about.
                </h2>
                <p className="mt-4 p-8 text-gray-600 font-Be-Vietnam-Pro text-base lg:text-[20px]">
                  At <span className="hover:text-sapphire">Gizi</span>, we're
                  building an AI startup, focused on the development of our
                  buying agent that helps users find products that match their
                  needs, allowing them to shop faster and smarter than ever.
                </p>
              </div>

              <div
                ref={headingRef}
                className={`mb-8 lg:mb-24 reveal ${
                  headingInView ? "in-view" : ""
                } reveal-delay-100`}
              >
                <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
                  The Founding Team
                </h2>

                {/* Images and titles */}
                <div className="m-6 px-4">
                  {/* Grid Container */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                      <img
                        src="/mark.jpg"
                        alt="Markanthony Oboh - Founder"
                        className="w-full h-auto object-cover"
                      />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold font-Be-Vietnam-Pro mb-2">
                          Markanthony Oboh
                        </h3>
                        <p className="text-gray-600 font-Be-Vietnam-Pro">
                          Founder | ML Engineer | CS @ Covenant University
                        </p>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                      <img
                        src="/fela.jpg"
                        alt="Adegbokun Adefela - Co-founder"
                        className="w-full h-auto object-cover"
                      />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold font-Be-Vietnam-Pro mb-2">
                          Adefela Adegbokun
                        </h3>
                        <p className="text-gray-600 font-Be-Vietnam-Pro">
                          Co-founder | Frontend Engineer & Designer | MIS @
                          Covenant University
                        </p>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                      <img
                        src="/pseudoayo.jpg"
                        alt="Ayodeji Amusan - Backend Developer"
                        className="w-full h-auto object-cover"
                      />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold font-Be-Vietnam-Pro mb-2">
                          Ayodeji Amusan
                        </h3>
                        <p className="text-gray-600 font-Be-Vietnam-Pro">
                          Backend Developer | CS @ Covenant University
                        </p>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                      <img
                        src="/ola.jpeg"
                        alt="Olaoluwa Oyeniran - AI Engineer"
                        className="w-full h-auto object-cover"
                      />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold font-Be-Vietnam-Pro mb-2">
                          Olaoluwa Oyeniran
                        </h3>
                        <p className="text-gray-600 font-Be-Vietnam-Pro">
                          AI Engineer | MIS @ Covenant University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
}

export default Company;