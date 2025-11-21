import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/lib/useInView";
import "@/lib/scrollAnimations.css";

function Faqs() {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>({ rootMargin: "-12% 0px" });
  const { ref: accordionRef, inView: accordionInView } = useInView<HTMLDivElement>({ rootMargin: "-8% 0px" });
  const faqs = [
    {
      question: "How does the buying agent work?",
      answer:
        "Our agent analyzes your preferences, usage patterns, and requirements, then cross-references this data with our extensive database of products, expert reviews, and user feedback to provide personalized recommendations that best match your needs.",
    },
    {
      question: "Will I only see one recommendation?",
      answer:
        "No, you'll get a shortlist — and we'll clearly show the advantages of each option and how it relates to you, so you can choose with confidence.",
    },
    {
      question:
        "What makes your agent different from just Googling or watching reviews?",
      answer:
        "Reviews and spec sheets can be overwhelming. Our system processes thousands of data points — real-world benchmarks, expert reviews, and performance insights — and translates them into clear, personalized recommendations tailored to you.",
    },
    {
      question: "Are the products shown available for purchase?",
      answer:
        "Yes. Every device recommended on our platform is available for purchase and delivery, directly to you.",
    },
    {
      question: "How do you protect my data?",
      answer:
        "We take privacy seriously. Your personal preferences and data are encrypted and never shared with third parties. We only use anonymous, aggregated data to improve our algorithms.",
    },
  ];

  return (
    <section id="faqs" className="relative py-16 lg:py-24 bg-slate-300">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={headingRef} className={`text-center mb-12 lg:mb-16 space-y-4 reveal ${headingInView ? "in-view" : ""} reveal-delay-100`}>
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Everything you want to know
            </h2>
          </div>

          {/* FAQ Accordions */}
          <div className="max-w-4xl mx-auto">
            <div ref={accordionRef} className={`rounded-2xl border border-gray-100 p-6 sm:p-12 reveal ${accordionInView ? "in-view" : ""}`}>
              <Accordion type="single" collapsible className="w-full space-y">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium font-Be-Vietnam-Pro text-lg lg:text-xl text-[#030303]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 font-Be-Vietnam-Pro text-base lg:text-lg leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-2 font-Be-Vietnam-Pro">
              Have a question not covered here?
            </p>
            <a
              href="mailto:gizigadgets@gmail.com"
              className="text-sapphire hover:underline font-Be-Vietnam-Pro font-semibold"
            >
              Contact our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
