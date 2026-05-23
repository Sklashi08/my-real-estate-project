import { LogoDarkMode } from "@/components/common/Logo";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

export type IconType = ComponentType<{
  size?: number;
  color?: string;
  className?: string;
}>;

const socialIcons: IconType[] = [SiFacebook, SiInstagram, SiYoutube, SiX];

export const FooterBrandInfo = () => {
  return (
    <div className="space-y-3 lg:mt-0">
      <LogoDarkMode />

      <p className="text-sm text-primary-foreground/60">
        At StoneWorx Builders, we deliver durable, modern construction solutions
        built to stand the test of time. Every project is handled with skill,
        clarity, and commitment.
      </p>
      <div className="flex items-center gap-3">
        {socialIcons.map((Icon, index) => (
          <Icon key={index} className="size-5 text-primary-foreground/60" />
        ))}
      </div>
    </div>
  );
};
