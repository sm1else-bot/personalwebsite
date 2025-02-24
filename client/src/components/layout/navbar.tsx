import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Music", path: "/music" },
  { label: "Art", path: "/art" },
  { label: "Writing", path: "/writing" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h1>
        </Link>
        
        <div className="hidden md:flex space-x-2">
          {NavItems.map((item) => (
            <Button
              key={item.path}
              variant={location === item.path ? "default" : "ghost"}
              className={cn(
                "transition-colors",
                location === item.path && "bg-primary text-primary-foreground"
              )}
              asChild
            >
              <Link href={item.path}>{item.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
