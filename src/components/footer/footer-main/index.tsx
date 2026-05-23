import { FooterBrandInfo } from "./footer-brand-info";
import { FooterCompany } from "./footer-company";
import { FooterContact } from "./footer-contact";
import { FooterSupport } from "./footer-support";

export const FooterMain = () => {
  return (
    <div className="space-y-5 grid grid-cols-1 lg:grid-cols-4 lg:gap-10">
      <FooterBrandInfo />

      <FooterCompany />
      <FooterSupport />
      <FooterContact />
    </div>
  );
};
