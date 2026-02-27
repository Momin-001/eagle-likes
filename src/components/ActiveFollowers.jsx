import { TrendingUp, Zap, Heart, MessageCircle, Youtube, X, Facebook } from "lucide-react";

const ActiveFollowers = () => {
  return (
    <section className="relative p-10 overflow-hidden">
      <div className="absolute inset-0 glow-right" />

      <div className="max-w-7xl pl-0 md:pl-10 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-purple-300">Trusted by 100K+ creators</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Thousands of<br />
              <span className="text-gradient-pink">Active Followers</span>
            </h2>

            <p className="text-gray-400 text-sm mb-8 w-auto mx-auto sm:max-w-md">
              Grow your social media presence organically with real, engaged followers. Watch your influence expand across all platforms.
            </p>

            {/* Feature badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <div className="bg-muted border border-muted-foreground rounded-2xl px-6 py-4 text-center">
                <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                <p className="font-bold text-foreground text-sm">Real</p>
                <p className="text-gray-400 text-xs">Organic Growth</p>
              </div>
              <div className="bg-muted border border-muted-foreground rounded-2xl px-6 py-4 text-center">
                <Zap className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-bold text-foreground text-sm">Fast</p>
                <p className="text-gray-400 text-xs">Instant Results</p>
              </div>
              <div className="bg-muted border border-muted-foreground rounded-2xl px-6 py-4 text-center">
                <Heart className="w-5 h-5 text-pink-500 mx-auto mb-2" />
                <p className="font-bold text-foreground text-sm">Safe</p>
                <p className="text-gray-400 text-xs">100% Secure</p>
              </div>
            </div>
          </div>

          {/* Right - Image placeholder with floating stats */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-90 rounded-2xl overflow-hidden flex items-center justify-center">
                <img src="/get-followers.png" alt="Active Followers" className="w-full h-full object-cover" />
              </div>

              {/* Floating platform icons */}
              <div className="absolute top-2 left-3 w-10 h-10 rounded-sm bg-card/90 flex items-center justify-center">
                <Youtube className="w-5 h-5 text-red-400" />
              </div>
              <div className="absolute top-2 right-3 w-10 h-10 rounded-sm bg-card/90 flex items-center justify-center">
                <X className="w-5 h-5 text-foreground" />
              </div>

              {/* Stats popups */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 translate-x-4 bg-card/90 rounded-sm px-3 py-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-500" fill="currentColor" />
                <div>
                  <p className="text-xs font-bold text-foreground">+2.4K Likes</p>
                  <p className="text-[10px] text-gray-400">Last 24 hours</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-card/80 rounded-sm px-3 py-4 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <p className="text-xs font-bold text-foreground">+856 Comments</p>
              </div>

              {/* Bottom left icon */}
              <div className="absolute bottom-2 left-3 w-10 h-10 rounded-sm bg-card/80 flex items-center justify-center">
                <Facebook className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveFollowers;
