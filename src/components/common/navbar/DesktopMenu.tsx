import { NavLink } from "react-router-dom";
import { navLinks } from "./nav-links-data";

export const DesktopMenu = () => {
  return (
    <div className="flex items-center gap-x-5 ">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.slug}
          className={`uppercase text-xs text-accent hover:text-muted hover:border-b hover:border-muted-foreground p-2 transition-colors duration-300 ease-in-out`}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};
