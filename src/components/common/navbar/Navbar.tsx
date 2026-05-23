import { LogoDefault } from "../Logo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
  return (
    <div
      className=" items-center justify-between p-5 flex flex-wrap
    lg:w-[90%] lg:mx-auto lg:p-7"
    >
      <LogoDefault />

      <div className="lg:hidden">
        <MobileMenu />
      </div>
      <div className="hidden lg:block">
        <DesktopMenu />
      </div>
    </div>
  );
};

export default Navbar;
