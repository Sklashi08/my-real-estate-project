import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navLinks } from "./nav-links-data";

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div className="">
      {!showMenu && (
        <Button
          onClick={() => setShowMenu(true)}
          variant="outline"
          className="bg-transparent text-accent cursor-pointer"
        >
          <Menu />
        </Button>
      )}

      {showMenu && (
        <div className="fixed inset-0 z-50 bg-primary p-5 flex flex-col justify-between overflow-y-auto touch-pan-y">
          <p className="w-full flex items-center justify-end">
            <Button
              onClick={() => setShowMenu(false)}
              variant="outline"
              className="bg-transparent text-accent cursor-pointer"
            >
              <X />
            </Button>
          </p>

          <div className="w-full text-primary-foreground flex flex-col items-center gap-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.slug}
                className={`text-xl font-normal`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center justify-around text-muted-foreground text-base">
            <Link to={`/`} className="cursor-pointer">
              Facebook
            </Link>
            <Link to={`/`} className="cursor-pointer">
              LinkedIn
            </Link>
            <Link to={`/`} className="cursor-pointer">
              Instagram
            </Link>
            <Link to={`/`} className="cursor-pointer">
              Twitter
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
