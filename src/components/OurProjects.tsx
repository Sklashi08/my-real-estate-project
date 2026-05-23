import { Button } from "./ui/button";
import our_project_img_1 from "/our_project_img_1.jpg";
import our_project_img_2 from "/our_project_img_2.jpg";
import our_project_img_3 from "/our_project_img_3.jpg";
import our_project_img_4 from "/our_project_img_4.jpg";

export const OurProjects = () => {
  return (
    <div
      className="p-5 lg:w-[85%] lg:mx-auto
    lg:-translate-y-25"
    >
      <div className="lg:flex items-center gap-x-20">
        <div>
          <p className="inline-block uppercase text-primary font-semibold text-sm p-1 border-b border-b-muted-foreground">
            Our Projects
          </p>
          <p
            className="text-4xl font-semibold mt-3 text-primary
          lg:text-5xl"
          >
            Built to Last. Crafted to Inspire.
          </p>
        </div>
        <div>
          <p
            className="text-sm mt-2 text-primary
          lg:text-base"
          >
            From contemporary homes to commercial spaces, every project we build
            reflects precision, durability, and modern design.
          </p>

          <Button className="mt-5">View all projects</Button>
        </div>
      </div>

      <div className="p-3 mt-10 grid grid-cols-1 gap-y-5">
        <div
          className="grid grid-cols-1 gap-5
        lg:grid-cols-11"
        >
          <div
            style={{ backgroundImage: `url(${our_project_img_1})` }}
            className="h-50 w-full bg-no-repeat bg-cover rounded-3xl
            lg:col-span-8 lg:h-100"
          />
          <div
            style={{ backgroundImage: `url(${our_project_img_2})` }}
            className="h-90 w-full bg-no-repeat bg-cover rounded-3xl
            lg:h-100 lg:col-span-3"
          />
        </div>

        <div
          className="grid grid-cols-1 gap-5
        lg:grid-cols-11"
        >
          <div
            style={{ backgroundImage: `url(${our_project_img_3})` }}
            className="h-90 w-full bg-no-repeat bg-cover rounded-3xl
            lg:h-100 lg:col-span-3"
          />
          <div
            style={{ backgroundImage: `url(${our_project_img_4})` }}
            className="h-50 w-full bg-no-repeat bg-cover rounded-3xl
            lg:col-span-8 lg:h-100"
          />
        </div>
      </div>
    </div>
  );
};
