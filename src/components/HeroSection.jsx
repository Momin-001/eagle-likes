import { Check, HandCoins, Info, Star } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Premium Followers",
    color: "bg-primary",
    ring: "ring-primary",
    border: "border-primary",
    features: [
      { text: "Premium followers", bold: true },
      { text: "What's the difference?", link: true, color: "text-primary" },
      { text: "Super Fast Delivery", bold: true },
      { text: "No password needed", bold: true },
      { text: "24-hour support", bold: true },
    ],
    selected: true,
    image: "/eagle-blue.png",
  },
  {
    name: "Active Followers",
    color: "bg-pink-600",
    ring: "ring-pink-600",
    border: "border-pink-600",
    features: [
      { text: "Real Active followers", bold: true },
      { text: "What's the difference?", link: true, color: "text-pink-600" },
      { text: "Trusted Delivery", bold: true },
      { text: "30 day refills", bold: true },
      { text: "No password needed", bold: true },
    ],
    selected: false,
    image: "/eagle-pink.png",
  },
  {
    name: "VIP Followers",
    color: "bg-green-600",
    ring: "ring-green-600",
    border: "border-green-600",
    features: [
      { text: "All features of Active, plus:", italic: true, color: "text-green-600" },
      { text: "Real followers from Targeted users", bold: true },
      { text: "Hit the explore page and grow your engagement", bold: true },
      { text: "Instant Delivery Guaranteed", bold: true },
    ],
    selected: false,
    image: "/eagle-green.png",
  },
];

const quantities = [
  { amount: "100", discount: "18%off", bold: true },
  { amount: "250", discount: "40%off", bold: true },
  { amount: "500", discount: "52%off", bold: true },
  { amount: "1000", discount: "63%off", bold: true },
  { amount: "2500", discount: "68%off", bold: true },
  { amount: "5000", discount: "70%off", bold: true },
  { amount: "10000", discount: "83%off", bold: true },
  { amount: "20000", discount: "85%off", bold: true },
];

const HeroSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [selectedQty, setSelectedQty] = useState(0);

  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 glow-top pointer-events-none " />
      <div className="absolute inset-0 glow-both pointer-events-none " />

      <div className="container mx-auto px-4 pt-28 pb-6 text-center relative z-10">
        {/* Grid lines behind title */}
        <div className="absolute inset-x-0 top-28 w-3xl mx-auto h-70 grid-lines opacity-40 pointer-events-none" />

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground py-10 relative z-10">
          Buy Instagram Followers
          <br />
          with <span className="text-gradient-primary">Fast Delivery!</span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8 relative z-10">
          Quickly get premium Instagram followers safely and easily! Boost your IG
          influence and engagement instantly! Always great prices and offers!
        </p>

        {/* VIP toggle */}
        <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
          <div className="bg-secondary/60 rounded-full flex items-center gap-3 px-5 py-2.5 cursor-pointer">
            <Switch />
            <span className="text-sm text-foreground font-medium">
              I need vip followers
            </span>
            <Info className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Plan Cards: horizontal scroll on small screens, grid on md+ */}
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-auto md:px-0 md:grid md:grid-cols-3 md:max-w-4xl md:overflow-visible md:gap-6 ml-2 md:pb-0 mb-12 relative z-10">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(i)}
              className={`relative rounded-2xl p-1px cursor-pointer transition-all shrink-0 w-[min(280px,78vw)] md:w-auto snap-start ${selectedPlan === i ? `ring-2 ${plan.ring}` : ""
                }`}
            >
              <div className="bg-gray-800 rounded-2xl h-full min-h-[240px] md:min-h-0">
                {/* Header */}
                <div className={`bg-linear-to-r ${plan.color} rounded-2xl px-4 py-3 mb-4 flex items-center justify-between`}>
                  <span className="font-display font-bold text-sm text-primary-foreground">{plan.name}</span>
                 <img src={plan.image} alt="eagle" width={24} height={24} />
                </div>

                {/* Features */}
                <div className="space-y-3 text-left p-5">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green mt-0.5 shrink-0" />
                      <span className={`text-sm ${f.bold ? "font-semibold text-foreground" : ""} ${f.link ? "underline cursor-pointer" : ""} ${f.italic ? "italic" : ""} ${f.color ? `${f.color}` : ""}`}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Radio */}
                <div className="flex justify-center my-6">
                  <div className={`w-6 h-6 rounded-full border border-muted-foreground flex items-center justify-center ${selectedPlan === i ? `${plan.border} ${plan.color}` : "border-white"
                    }`}>
                    {selectedPlan === i && <Check className={`w-4 h-4 text-white`} />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantity Grid */}
        <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto relative z-10">
          {quantities.map((q, i) => (
            <button
              key={q.amount}
              onClick={() => setSelectedQty(i)}
              className={`rounded-xl text-center transition-all border border-muted-foreground bg-muted`}
            >
              <div className={`font-display rounded-xl font-bold text-xl md:text-2xl px-4 py-6 ${selectedQty === i
                ? "bg-linear-to-r from-primary/50 to-primary text-white"
                : "bg-muted-foreground text-foreground hover:bg-gray-600"
                }`}>
                {q.amount}

              </div>
              <div className="text-lg px-4 py-4 text-white">{q.discount}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Price, CTA & social proof: card on small screens, horizontal centered on md+ */}
      <div className="mt-6 md:mt-6 mx-auto max-w-3xl md:max-w-none">
        <div className="flex flex-col items-center gap-6 p-6 md:justify-center md:items-center md:gap-16">
          {/* Price & savings */}
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-6">

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center justify-center gap-3 md:items-start">
              <span className="font-display text-4xl font-bold text-foreground">$2.97</span>
              <span className="text-gray-400 line-through text-lg">$3.62</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <span className="text-foreground">you're saving</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                <HandCoins className="w-4 h-4 text-primary" />
              </span>
              <span className="text-primary font-semibold">$0.65</span>
            </div>
          </div>

          {/* Buy Now */}
          <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full px-12 py-3.5 transition-all shadow-lg shadow-primary/20">
            Buy Now
          </button>
          </div>

          {/* Stars + avatars + social proof */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-8 py-2">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex -space-x-6">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src="/person.png" alt="user" width={48} height={48} className="w-12 h-12 rounded-full bg-muted border-2 border-background" />
                ))}
              </div>
            </div>
            <div className="text-center md:text-left">
              <span className="text-foreground">38,571 people</span>
              <br />
              <span className="text-primary text-lg">purchased 2+ times</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
