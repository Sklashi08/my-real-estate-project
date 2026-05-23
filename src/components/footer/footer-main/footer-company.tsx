import { navLinks } from "@/components/common/navbar/nav-links-data";
import { NavLink } from "react-router-dom";

export const FooterCompany = () => {
  return (
    <div className="mt-10 lg:mt-0">
      <h1 className="text-lg font-semibold">Company</h1>

      <div className="flex flex-col space-y-3 mt-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.slug}
            className={`text-sm font-normal text-primary-foreground/50`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
