import Marquee from "react-fast-marquee";

const logos = [
  { name: "yahoo!", icon: "/yahoo.png" },
  { name: "FOX", icon: "/fox.png" },
  { name: "MarketWatch", icon: "/marketwatch.png" },
  { name: "Tripadvisor", icon: "/tripadvisor.png" },
  { name: "DIGITAL JOURNAL", icon: "/digital-journal.png" },
  { name: "NBC", icon: "/nbc.png" },
  { name: "USA TODAY", icon: "/usa-today.png" },
];

const MarqueeSection = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-gray-400 text-md">Eagle Likes is seen on...</p>
      </div>
      <Marquee speed={90} gradient={false} className="py-4">
        {logos.map((logo, i) => (
          <div key={i} className="mx-10">
              <img src={logo.icon} alt={logo.name} className={`w-30 h-30 object-contain ${logo.name === "NBC" ? "w-10! h-10!" : ""} ${logo.name === "FOX" ? "w-15! h-15!" : ""}` } />
            
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
