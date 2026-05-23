import { FooterBottom } from "./footer-bottom";
import { FooterCta } from "./footer-cta";
import { FooterMain } from "./footer-main";
export const Footer = () => {
  return (
    <div className="bg-primary mt-15 ">
      <div className="p-5 bg-primary text-primary-foreground space-y-12 lg:w-[90%] mx-auto">
        <FooterCta />
        <FooterMain />
        <FooterBottom />
      </div>
    </div>
  );
};
