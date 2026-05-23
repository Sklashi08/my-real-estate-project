import { Button } from "../ui/button";
import Navbar from "./navbar/Navbar";
import hero_bg from "/hero_bg.jpg";

type HeroProps = {
  introText: string;
  size?: "sm" | "lg";
  title: string;
  subTitle: string;
  btnAffirmText?: string;
  btnNoAffirmText?: string;
};
export const Hero = ({
  introText,
  title,
  size = "lg",
  subTitle,
  btnAffirmText,
  btnNoAffirmText,
}: HeroProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${hero_bg})` }}
      className={`${size === "sm" ? "h-[70vh]" : "h-[90vh] lg:h-[95vh]"} bg-center bg-no-repeat bg-cover`}
    >
      <div className="bg-black/40 h-full">
        <Navbar />

        <div
          className="text-center p-5 mt-20
        lg:mt-10"
        >
          <Button
            className={`${size === "sm" ? "text-xs" : "text-base"} bg-accent/15 hover:bg-accent/10 cursor-pointer rounded-full
          lg:font-semibold`}
          >
            {introText}
          </Button>

          <p
            className="text-2xl font-semibold text-primary-foreground mt-7
          lg:text-6xl lg:w-[50%] lg:mx-auto"
          >
            {title}
          </p>
          <p
            className="mt-5 text-primary-foreground text-base
          lg:text-xl lg:w-[50%] lg:mx-auto"
          >
            {subTitle}
          </p>

          <div className="mt-15 flex flex-row justify-center gap-x-5">
            {btnAffirmText && (
              <Button
                className="  bg-accent-foreground text-accent hover:bg-accent-foreground cursor-pointer font-semibold
            lg:w-50 lg:h-11"
              >
                {btnAffirmText}
              </Button>
            )}
            {btnNoAffirmText && (
              <Button
                className="bg-accent/20 border border-accent hover:bg-accent/20 cursor-pointer font-semibold
            lg:w-50 lg:h-11"
              >
                {btnNoAffirmText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
