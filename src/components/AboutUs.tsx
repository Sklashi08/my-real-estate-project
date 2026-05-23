import { CheckCheck } from "lucide-react";
import about_img_1 from "/About-Img-1.png";
import about_img_2 from "/About-Img-2.png";

const quickFactsData = [
  {
    id: "1",
    text: "150+ Completed Projects",
  },
  {
    id: "2",
    text: "Licensed & ISO-Aligned Standards",
  },
  {
    id: "3",
    text: "Experienced, Dedicated Team",
  },
];
export const AboutUs = () => {
  return (
    <div
      className="p-5 -translate-y-7
    lg:w-[85%] lg:mx-auto lg:flex item-start gap-5"
    >
      <div className="pr-8">
        <img src={about_img_1} alt="" className="rounded-3xl" />
        <img
          src={about_img_2}
          alt=""
          className="rounded-3xl translate-x-30 -translate-y-19 border-8 border-background
          lg:translate-x-85 lg:-translate-y-50"
        />
      </div>

      <div className="flex-1">
        <p className="inline-block uppercase text-primary font-semibold text-sm p-1 border-b border-b-muted-foreground">
          About us
        </p>
        <p
          className="text-xl font-semibold text-primary mt-3
        lg:text-6xl"
        >
          Trusted Construction Partner in Nigeria.
        </p>
        <p className="text-sm mt-1 text-primary lg:mt-5 lg:text-base">
          At StoneWorx Builders, we deliver reliable, high-quality construction
          solutions for homes and commercial projects. Our team combines modern
          building techniques with precision craftsmanship to ensure every
          project is completed on time, on budget, and exactly to your vision.
          We focus on clear communication, durable materials, and clean,
          timeless designs that stand the test of time.
        </p>
        <div className="mt-5">
          <p className="text-base font-semibold text-primary">Quick Facts:</p>
          <div>
            {quickFactsData.map((data) => (
              <p key={data.id} className="text-sm text-primary">
                <CheckCheck className="inline text-primary mr-1" size={15} />
                {data.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
