import { useState } from "react";
import { ChevronDown, Menu, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { label: "TIKTOK", hasDropdown: true },
  { label: "INSTAGRAM", hasDropdown: true },
  { label: "YOUTUBE", hasDropdown: true },
  { label: "FACEBOOK", hasDropdown: true },
  { label: "TWITTER (X)", hasDropdown: true },
  { label: "BLOG", hasDropdown: true },
  { label: "CONTACT US", hasDropdown: true },
];

const Navbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border backdrop-blur-md fixed top-0 z-50 bg-background/80">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <img src="/eagle.png" alt="Eagle Likes" className="w-50 h-10" />

        <div className="hidden lg:flex lg:px-6 items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-sm text-foreground hover:underline transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setSheetOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-sm border border-border text-foreground hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 border rounded-sm px-4 py-2 text-sm text-foreground border-primary transition-colors">
            <User className="w-4 h-4" />
            Login
          </button>
        </div>
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          className="flex flex-col p-0 gap-0"
        >
          <SheetHeader className="p-4 pb-0 shrink-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col px-4 pb-6 pt-2">
            {navItems.map((item) => (
              <SheetClose asChild key={item.label}>
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm text-foreground hover:underline transition-colors py-3.5 text-left w-full rounded-md hover:bg-muted/50 active:bg-muted"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 shrink-0" />}
                </button>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
