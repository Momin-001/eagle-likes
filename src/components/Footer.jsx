import { Globe } from "lucide-react";

const paymentMethods = [
  {
    name: "Visa",
    image: "/visa.png",
  },
  {
    name: "Mastercard",
    image: "/master.png",
  },
  {
    name: "Amex",
    image: "/american-express.png",
  },
  {
    name: "Apple Pay",
    image: "/apple-pay.png",
  },
];
const Footer = () => {
  return (
    <footer className="pt-12 pb-8 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top links */}
        <div className="flex flex-wrap gap-6 md:gap-10 mb-10 text-sm md:text-base font-semibold">
          <a href="#" className="hover:text-primary transition-colors">Blog</a>
          <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>

        {/* Service columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          <div>
            <h4 className="font-semibold text-sm mb-3">Instagram Services</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-foreground transition-colors">Buy Instagram Likes</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Buy Instagram Comments</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Buy Instagram Followers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Buy Instagram Views</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">TikTok Services</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-foreground transition-colors">Buy TikTok Likes</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Buy TikTok Followers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Buy TikTok Views</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">YouTube Services</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-foreground transition-colors">Buy YouTube Views</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Buy YouTube Subscribers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Buy YouTube Likes</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-semibold text-sm mb-3">Tools & Resources</h4>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-2 text-gray-400 text-xs">
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram Video Downloader</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram Profile Picture Viewer</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram Story Downloader</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram Story Viewer</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram Followers Counter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Free Instagram Likes Trial</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Free Instagram Followers Trial</a></li>
              </ul>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram Story Viewer</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter Video Downloader</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter GIF Downloader</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Free Tik Tok Views</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Facebook Video Downloader</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Facebook Reels Downloader</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">My Account</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-foreground transition-colors">Log In</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sign In</a></li>
            </ul>
          </div>
        </div>

        {/* Language selector */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Globe className="w-4 h-4" />
          <span>EN</span>
          <span className="text-xs">▼</span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-gray-400 pt-6">
          <p className="text-gray-400 text-xs">
            Copyright © 2025 Eagle Likes, All Rights Reserved.
          </p>
          <div className="flex items-center">
            {paymentMethods.map((card) => (
              <div key={card.name} className="w-8 h-8">
                <img src={card.image} alt={card.name} className="w-12 h-12 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
