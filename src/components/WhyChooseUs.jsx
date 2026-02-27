import { Check, X, Users, DollarSign, Headphones, CreditCard, Zap, Lock, Award, Shield } from "lucide-react";

const features = [
  { label: "Real Followers", icon: Users, eagleValue: "Always Real", otherValue: "Often Bots" },
  { label: "Pricing", icon: DollarSign, eagleValue: "Transparent", otherValue: "Hidden Fees" },
  { label: "Support", icon: Headphones, eagleValue: "24/7 Support Team", otherValue: "Limited Help" },
  { label: "Payment Options", icon: CreditCard, eagleValue: "All Major Cards", otherValue: "Few Options" },
  { label: "Delivery Speed", icon: Zap, eagleValue: "Lightning Fast", otherValue: "Slow & Delayed" },
  { label: "Login Info Needed", icon: Lock, eagleValue: "Not Required", otherValue: "Often Asked" },
  { label: "Experience", icon: Award, eagleValue: "10+ Years", otherValue: "New/Unproven" },
  { label: "Account Safety", icon: Shield, eagleValue: "100% Secure", otherValue: "Risky / Unsafe" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-20 px-2 sm:px-4 overflow-hidden">
      <div className="absolute inset-0 glow-right" />

      <div className="max-w-4xl mx-auto relative z-10 min-w-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
          Why Choose us?
        </h2>

        <div className="grid grid-cols-3 relative gap-0 min-w-0">
          {/* Left Column - Feature Labels */}
          <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center absolute top-0 right-0 sm:right-1">
            <span className="bg-primary/10 rounded-md sm:rounded-lg border border-primary/20 px-2 sm:px-3 md:px-4 min-w-16 sm:min-w-28 md:min-w-40 text-center py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-medium text-primary">Others</span>
          </div>
          <div className="bg-muted px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 rounded-bl-xl sm:rounded-bl-2xl rounded-br-xl sm:rounded-br-2xl rounded-tl-xl sm:rounded-tl-2xl mt-10 sm:mt-12 md:mt-14">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-1 sm:gap-2 h-8 sm:h-9 md:h-10 lg:h-12 border-b border-foreground min-h-0">
                <f.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-foreground shrink-0" />
                <span className="text-xs sm:text-sm text-foreground truncate">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Center Column - Eagle Likes */}
          <div className="rounded-xl sm:rounded-2xl border-2 md:border-4 border-primary backdrop-blur-sm bg-muted neon-icon-blue min-w-0">
            <div className="h-10 sm:h-12 md:h-14 flex items-center justify-center gap-1 sm:gap-2 px-1">
              <img src="/eagle.png" alt="Eagle Likes" className="w-24 h-6 sm:w-32 sm:h-7 md:w-40 md:h-8 lg:w-50 lg:h-10 object-contain" />
            </div>
            <div className="px-2 sm:px-3 md:px-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2 h-8 sm:h-9 md:h-10 lg:h-12 border-b border-foreground min-h-0">
                  <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground truncate">{f.eagleValue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Others */}
          <div className="bg-muted px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 rounded-bl-xl sm:rounded-bl-2xl rounded-br-xl sm:rounded-br-2xl rounded-tr-xl sm:rounded-tr-2xl mt-10 sm:mt-12 md:mt-14 min-w-0">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-1 sm:gap-2 h-8 sm:h-9 md:h-10 lg:h-12 border-b border-foreground min-h-0">
                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground shrink-0" />
                <span className="text-xs sm:text-sm text-foreground truncate">{f.otherValue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
