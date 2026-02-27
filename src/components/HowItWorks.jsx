import { ShoppingCart, UserPlus, Lock } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    number: "01",
    title: "Pick a Service",
    description: "Pick the service that fits your goals and start growing now",
    iconColor: "text-purple-500",
    backgroundColor: "bg-purple-500/10",
  },
  {
    icon: UserPlus,
    number: "02",
    title: "Enter Information",
    description: "Enter your information to get started quickly and securely!",
    iconColor: "text-blue-500",
    backgroundColor: "bg-blue-500/10",
  },
  {
    icon: Lock,
    number: "03",
    title: "Pay Securely",
    description: "Pay securely and complete your order in seconds!",
    iconColor: "text-green-500",
    backgroundColor: "bg-green-500/10",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20 glow-right overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          How it works
        </h2>
        <p className="text-gray-400 text-center max-w-lg mx-auto mb-12">
          Ordering services is simple — pick your package, pay quickly, and watch your growth begin instantly
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-muted border border-muted-foreground rounded-2xl p-6 relative"
            >
              {/* Large number watermark */}
              <div className="absolute top-4 right-4 font-display text-6xl font-bold text-muted-foreground select-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${step.backgroundColor} flex items-center justify-center mb-6`}>
                  <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                </div>

                <h3 className="font-display font-bold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
