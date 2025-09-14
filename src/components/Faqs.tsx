import { Button } from "@/components/ui/button";

function Faqs() {
  return (
    <section className="relative py-16 lg:py-24 bg-slate-50">
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
              Everything you want to know
            </h2>
            <div className="my-4 lg:my-6 p-4">
              <Button className="text-xs font-medium rounded-xl font-Be-Vietnam-Pro text-white bg-sapphire transition-all duration-300">
                FAQs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
