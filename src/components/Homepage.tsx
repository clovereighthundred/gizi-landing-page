{
  /* When you're done with a component, import it here and add it into the Homepage function */
}

import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
import ValueProp from "./ValueProp";
import Benefits from "./Benefits";
import Faqs from "./Faqs";
import Footer from "./Footer";

function Homepage() {
  return (
    <div
      id="hero"
      className="w-full min-h-[85vh] bg-[#fdfdfd] flex flex-col pt-[20px] sm:pt-[0]"
    >
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <ValueProp />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Homepage;
