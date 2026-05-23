import { Boxes, ClockFading, ShieldCheck, type LucideIcon } from "lucide-react";

type OurAdvantages = {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};
const ourAdvantagesData: OurAdvantages[] = [
  {
    id: "1",
    title: "On Time​",
    desc: "We respect your time with planning and predictable project timelines.​",
    icon: ClockFading,
  },
  {
    id: "2",
    title: "ISO Certified​​",
    desc: "We respect your time with planning and predictable project timelines.​",
    icon: ShieldCheck,
  },
  {
    id: "3",
    title: "Quality Materials​​",
    desc: "We use trusted brands and durable & materials suited for Texas conditions.​​",
    icon: Boxes,
  },
];

export const OurAdvantages = () => {
  return (
    <div
      className="bg-card w-[85%] mx-auto p-5 rounded-2xl -translate-y-20 drop-shadow-xs border border-border
    lg:p-7 lg:pb-10"
    >
      <p className="text-sm font-light text-card-foreground p-1 flex items-center justify-end">
        <span className=" border-b font-semibold">Our Advantages</span>
      </p>

      <div
        className="flex flex-col gap-5
      lg:flex-row lg:gap-10"
      >
        {ourAdvantagesData.map((data) => (
          <div key={data.id}>
            <span className="inline-block p-3 bg-card-foreground text-card rounded-full">
              <data.icon size={20} />
            </span>
            <p className="text-base font-semibold text-card-foreground">
              {data.title}
            </p>
            <p className="text-sm text-muted-foreground">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
