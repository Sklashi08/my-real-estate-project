import { Button } from "./ui/button";
import contact_cta_bg from "/contact_cta_bg.jpg";

export const ContactCta = () => {
  return (
    <div
      style={{ backgroundImage: `url(${contact_cta_bg})` }}
      className="bg-center bg-size-[190%] bg-no-repeat
      lg:h-50 lg:bg-size-[100%]"
    >
      <div
        className="w-full h-full px-5 py-9 bg-foreground/50
      lg:grid grid-cols-5 items-center lg:px-30"
      >
        <div className="col-span-4">
          <p
            className="text-xl text-primary-foreground font-semibold
          lg:text-3xl"
          >
            Let’s Build Your Dream Home.
          </p>
          <p
            className="text-sm text-muted mt-2 
          lg:text-base lg:w-160"
          >
            Whether you’re planning a new build, a renovation, or exploring
            ideas, we’re here to bring your vision to life. Let’s talk about how
            StoneWorx can make it happen.
          </p>
        </div>
        <Button className="mt-5 cursor-pointer lg:mt-0">Enquire now</Button>
      </div>
    </div>
  );
};
