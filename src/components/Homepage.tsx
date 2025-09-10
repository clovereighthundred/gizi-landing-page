{
  /* When you're done with a component, import it here and add it into the Homepage function */
}

import Hero from "./Hero";

function Homepage() {
  return (
    <div
      id="hero"
      className="w-full min-h-[85vh] bg-[#fdfdfd] flex flex-col pt-[20px] sm:pt-[0]"
    >
      <Hero />
    </div>
  );
}

export default Homepage;
