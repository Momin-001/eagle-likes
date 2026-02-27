import { Star, CheckCircle, User } from "lucide-react";

const followers = [
  { name: "started full", time: "10m" },
  { name: "started full", time: "30m" },
  { name: "started full", time: "15m" },
  { name: "started full", time: "50m" },
  { name: "started full", time: "20m" },
  { name: "started full", time: "55m" },
  { name: "started full", time: "20m" },
  { name: "started full", time: "55m" },
  { name: "started full", time: "20m" },
  { name: "started full", time: "55m" },

];

const SocialProof = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="container mx-auto px-4">


        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-around gap-8 mb-10 bg-muted border border-muted-foreground rounded-full px-4 py-4 max-w-2xl mx-auto">
          {["Fast Checkout", "100% Guarantee", "24/7 Support"].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">{badge}</span>
            </div>
          ))}
        </div>

        {/* Followers Preview: 3 rows, horizontal scroll for more */}
        <div className="bg-muted border border-muted-foreground rounded-2xl max-w-3xl mx-auto overflow-hidden">
          <div className="flex items-center justify-between border-b border-muted-foreground p-4 md:p-6">
            <div className="flex items-center gap-2">
              <span className="text-primary"><User className="w-5 h-5" /></span>
              <span className="font-display font-bold text-foreground">Followers Preview</span>
            </div>
            <span className="bg-muted-foreground text-primary text-sm font-medium px-3 py-2 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-primary" />
              Real Followers
            </span>
          </div>

          <div className="overflow-x-auto p-4 md:p-6">
            <div
              className="grid gap-3 w-max min-w-full"
              style={{
                gridTemplateRows: "repeat(3, auto)",
                gridAutoFlow: "column",
                gridAutoColumns: "minmax(260px, 280px)",
              }}
            >
              {followers.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-muted-foreground/60 border-2 border-muted-foreground rounded-lg px-4 py-3 min-w-0">
                  <img src="/person.png" alt="user" width={32} height={32} className="w-8 h-8 rounded-full bg-muted shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-white truncate block">{f.name}</span>
                    <span className="text-xs text-white">started following you.</span>
                  </div>
                  <span className="text-xs text-white shrink-0">{f.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews count */}
        <div className="flex flex-col items-center mt-10 gap-2">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
            ))}
            <span className="text-sm text-foreground ml-2">8000+ Verified Customer Reviews</span>
          </div>
          <span className="text-xs text-foreground">5 million individual users and counting</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
