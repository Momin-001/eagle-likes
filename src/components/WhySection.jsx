import { Star, Heart, Zap, Shield, Crown, ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    icon: Star,
    neonClass: "neon-icon-yellow",
    title: "Affordable Growth",
    description: "At Eagle Likes, we believe social media growth should be for everyone. That's why we offer affordable packages for individuals, influencers, and businesses alike.",
  },
  {
    icon: Heart,
    neonClass: "neon-icon-pink",
    title: "Quality That Speaks",
    description: "While affordability matters, quality is our top priority. At Eagle Likes, we never compromise on service standards and every like, follower, and view is delivered with care to ensure authentic, natural growth.",
  },
  {
    icon: Zap,
    neonClass: "neon-icon-cyan",
    title: "Speed You Can Trust",
    description: "In today's fast-paced digital world, timing is key. Eagle Likes ensures fast, reliable delivery and whether you need instant likes or steady, natural growth for your profile.",
  },
  {
    icon: Shield,
    neonClass: "neon-icon-purple",
    title: "Safe And Secure Services",
    description: "Trust is at the heart of everything we do. We use safe, proven methods to protect your account and ensure natural, risk-free growth so you can grow with confidence.",
  },
  {
    icon: Crown,
    neonClass: "neon-icon-red",
    title: "Customer-Centric Support",
    description: "We understand that every customer is unique. That's why our dedicated support team is always ready to assist, guide, and resolve your queries from choosing the right package to ensuring smooth, hassle-free delivery.",
  },
  {
    icon: ThumbsUp,
    neonClass: "neon-icon-green",
    title: "A Brand You Can Rely On",
    description: "Eagle Likes is more than just a service — it's your trusted partner in social media growth. Join the thousands of satisfied customers who've chosen us to elevate their online presence with confidence.",
  },
];

function FeatureCard({ feature }) {
  return (
    <div className="bg-muted border border-muted-foreground rounded-2xl p-6 text-center h-full">
      <div className="flex justify-center mb-4">
        <feature.icon className={`w-10 h-10 ${feature.neonClass}`} />
      </div>
      <h3 className="font-display font-bold text-foreground text-lg mb-3">{feature.title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
    </div>
  );
}

const WhySection = () => {
  return (
    <section className="relative py-20 glow-right overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Why <span className="text-gradient-primary">Eagle Likes?</span>
        </h2>

        {/* Small screens: carousel with one card + prev/next below */}
        <div className="md:hidden max-w-lg mx-auto">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="ml-0">
              {features.map((feature) => (
                <CarouselItem key={feature.title} className="pl-0 basis-full">
                  <FeatureCard feature={feature} />
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
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
