import { Eye, ShieldCheck, Users, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const benefits = [
  {
    icon: Eye,
    title: "Higher Visibility",
    description: "Instagram's algorithm favors the most popular accounts, giving them greater visibility across the platform. By gaining real followers with authentic profiles, you instantly boost your popularity, increase exposure, and attract new audiences who may have never discovered your content before.",
    neonClass: "neon-icon-green",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Trust",
    description: "Having more followers instantly boosts your Instagram credibility. When new users discover your profile, they see your popularity as proof of quality and trust. A strong follower base shows that others value your content, encouraging even more people to follow and engage with your posts.",
    neonClass: "neon-icon-yellow",
  },
  {
    icon: Users,
    title: "Get Real Followers",
    description: "As your followers increase, your posts reach more people who naturally want to follow you. With engaging, high-quality content, your audience will keep growing. Buying active followers is a quick and effective way to jumpstart your Instagram growth and boost organic engagement.",
    neonClass: "neon-icon-red",
  },
];

function BenefitCard({ benefit }) {
  return (
    <div className="bg-card/60 backdrop-blur-sm border border-muted-foreground rounded-2xl p-8 text-center h-full">
      <div className="flex justify-center mb-5">
        <benefit.icon className={`w-10 h-10 ${benefit.neonClass}`} />
      </div>
      <h3 className="text-lg font-bold mb-3 font-display">{benefit.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {benefit.description}
      </p>
    </div>
  );
}

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 glow-left relative">
      <div className="max-w-7xl px-10 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-display">
          Benefits of Buying <span className="text-gradient-primary">Instagram Followers</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14 text-sm md:text-base">
          Buying Instagram followers can quickly boost your credibility and visibility, helping you attract real engagement and grow faster. A larger follower count builds trust, increases exposure, and makes your profile more appealing to brands, collaborators, and new audiences. With trusted providers like Eagle Likes, you can grow safely and effectively while keeping your account secure.
        </p>

        {/* Small screens: carousel with one card + prev/next below */}
        <div className="md:hidden max-w-lg mx-auto">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="ml-0">
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="pl-0 basis-full">
                  <BenefitCard benefit={benefit} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-3 mt-6">
              <CarouselPrevious
                variant="outline"
                size="icon"
                className="relative top-0 left-0 right-0 translate-x-0 translate-y-0 size-10 rounded-full border-muted-foreground bg-muted hover:bg-muted/80"
              >
                <ChevronLeft className="size-5" />
                <span className="sr-only">Previous</span>
              </CarouselPrevious>
              <CarouselNext
                variant="outline"
                size="icon"
                className="relative top-0 left-0 right-0 translate-x-0 translate-y-0 size-10 rounded-full border-primary bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ChevronRight className="size-5" />
                <span className="sr-only">Next</span>
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Large screens: grid (no carousel) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
