import { CopyrightIcon } from "lucide-react";

export const FooterBottom = () => {
  return (
    <div className="border-t border-t-border/50 py-4">
      <p className="text-sm text-primary-foreground/50 text-center">
        <CopyrightIcon className="w-4 h-4 inline mr-1" />{" "}
        {new Date().getFullYear()} StoneWorx Builders. All rights reserved.
      </p>
    </div>
  );
};
