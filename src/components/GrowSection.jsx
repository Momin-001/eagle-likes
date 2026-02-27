import { TrendingUp, Users, Target, BarChart3, Instagram, Heart, Twitter, Share2, Youtube } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+245%", label: "Engagement Rate", color: "text-accent", bgcolor: "bg-accent", backgroundColor: "neon-icon-accent" },
  { icon: Users, value: "+180%", label: "Followers Growth", color: "text-accent", bgcolor: "bg-pink-600", backgroundColor: "neon-icon-pink" },
  { icon: Target, value: "+320%", label: "Reach Increase", color: "text-primary", bgcolor: "bg-blue-600", backgroundColor: "neon-icon-blue" },
  { icon: BarChart3, value: "10x", label: "Content Impact", color: "text-primary", bgcolor: "bg-green-600", backgroundColor: "neon-icon-green" },
];

const GrowSection = () => {
  return (
    <section className="relative py-20 glow-left overflow-hidden">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto max-w-7xl px-10 lg:px-20 items-center justify-center">
          {/* Left - Image Placeholder with floating icons */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="w-72 h-96 rounded-3xl bg-card border overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                  <img src="/grow-insta.png" alt="growth" className="w-full h-full object-cover" />
                </div>
                {/* Stats bar at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-secondary/90 backdrop-blur rounded-xl p-3 flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-sm font-bold text-foreground">125K</div>
                    <div className="text-[10px] text-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-foreground">4.8M</div>
                    <div className="text-[10px] text-foreground">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center text-green-500 gap-1">
                    <TrendingUp className="w-3 h-3 " />
                    <div className="text-sm font-bold text-green">245%</div>
                    </div>
                    <div className="text-[10px] text-foreground ml-1">Growth</div>
                  </div>
                </div>
              </div>

              {/* Floating social icons */}
              <div className="absolute -top-4 left-12 w-12 h-12 neon-icon-pink rounded-xl bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Instagram className="w-5 h-5 text-foreground" />
              </div>
              <div className="absolute top-20 -left-6 w-9 h-9 neon-icon-pink rounded-full bg-pink-600 flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-foreground" />
              </div>
              <div className="absolute top-40 -left-10 w-12 h-12 neon-icon-blue rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <Twitter className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="absolute top-58 -left-4 w-9 h-9 neon-icon-green rounded-xl bg-green-600 flex items-center justify-center shadow-lg">
                <Share2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="absolute top-24 -right-8 w-12 h-12 rounded-xl neon-icon-red bg-red-600 flex items-center justify-center shadow-lg">
                <Youtube className="w-5 h-5 text-foreground" />
              </div>
              <div className="absolute top-52 -right-6 w-12 h-12 neon-icon-blue rounded-xl bg-background flex items-center justify-center shadow-lg">
                {/* TikTok icon approximation */}
                <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-sm px-4 py-1.5 mb-6">
              <span className="text-accent text-sm">✦</span>
              <span className="text-sm text-accent">Social Media Growth</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-center lg:text-left">
              <span className="text-gradient-accent">Grow Your</span>
              <br />
              <span className="text-gradient-pink">Instagram Followers</span>
            </h2>

            <p className="text-gray-400 mb-8 w-auto mx-auto sm:max-w-md">
              Grow your Instagram audience with data-driven strategies and proven tactics. Build an engaged community and expand your reach effortlessly.
            </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-muted border border-muted-foreground rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.backgroundColor} ${stat.bgcolor}`}>
                      <stat.icon className={`w-4 h-4 text-foreground`} />
                    </div>
                  </div>
                  <div className={`font-display font-bold text-2xl text-foreground`}>{stat.value}</div>
                  <div className="text-xs text-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <img key={i} src="/person.png" alt="user" width={28} height={28} className="w-7 h-7 rounded-full bg-muted border-2 border-background" />
                ))}
              </div>
              <span className="text-sm text-gray-400">Join 50,000+ creators growing their audience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowSection;
