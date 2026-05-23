import { MailIcon, MapPinIcon, PhoneIcon, type LucideIcon } from "lucide-react";

export type ContactItem = {
  type: "call" | "email" | "address";
  icon: LucideIcon;
  text: string;
  detail: string;
};

// Array of contact items
const footerContacts: ContactItem[] = [
  {
    type: "call",
    icon: PhoneIcon,
    text: "Call us",
    detail: "+234 801 xxx xxxx",
  },
  {
    type: "email",
    icon: MailIcon,
    text: "Email us",
    detail: "info@stoneworxbuilders.com",
  },
  {
    type: "address",
    icon: MapPinIcon,
    text: "Visit us",
    detail: "123 Main Street, Victoria Island, Lagos, Nigeria",
  },
];

export const FooterContact = () => {
  return (
    <div className="mt-10 lg:mt-0">
      <h1 className="text-lg font-semibold">Contact Us</h1>
      <div className="mt-2 space-y-4">
        {footerContacts.map((contact) => (
          <div key={contact.type} className="flex items-center ">
            <contact.icon className="w-5 h-5 mr-2 text-primary-foreground/70" />
            <div>
              <p className="text-sm font-medium text-primary-foreground/70">
                {contact.text}
              </p>
              <p className="text-sm text-primary-foreground/30">
                {contact.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
