import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

export const FooterCta = () => {
  return (
    <div>
      <div className="space-y-5 bg-secondary text-secondary-foreground rounded-lg drop-shadow-sm drop-shadow-secondary px-3 py-7 mt-10 lg:flex items-start  lg:p-10 lg:space-y-0">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase">
            READY TO START YOUR PROJECT?
          </p>
          <p className="text-2xl font-semibold lg:text-4xl">
            From Concept to Craftsmanship
          </p>
        </div>
        <div className="space-y-3 lg:space-y-10">
          <p className="text-sm lg:text-base lg:w-[70%]">
            Your space should reflect strength, style, and purpose. Let’s bring
            your vision to life with precision and care.
          </p>
          <Button>
            Let's Talk <MessageCircle />
          </Button>
        </div>
      </div>
    </div>
  );
};
