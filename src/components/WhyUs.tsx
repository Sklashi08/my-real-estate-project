import {
  Compass,
  HardHat,
  HeartHandshake,
  SquareGanttChart,
  type LucideIcon,
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type WhyUsDataTypes = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};
const whyUsData: WhyUsDataTypes[] = [
  {
    id: "1",
    icon: Compass,
    title: "Local Expertise",
    description:
      "Deep understanding of local building codes, materials, and construction standards.",
  },
  {
    id: "2",
    icon: HardHat,
    title: "Skilled Team",
    description:
      "Certified builders and project specialists committed to delivering quality at every stage.",
  },
  {
    id: "3",
    icon: SquareGanttChart,
    title: "Smart Designs",
    description:
      "Modern layouts crafted for efficiency, comfort, and seamless flow.",
  },
  {
    id: "4",
    icon: HeartHandshake,
    title: "Client First",
    description:
      "Clear communication, responsive support — your satisfaction guides every decision.",
  },
];

export const WhyUs = () => {
  return (
    <div className="p-5 lg:grid grid-cols-6 gap-10 items-start justify-between  lg:w-[85%] lg:mx-auto">
      <div className="space-y-3 lg:col-span-3 lg:space-y-6">
        <p className="uppercase inline-block text-primary font-semibold text-xs p-1 border-b border-b-muted-foreground">
          Why stoneWorx
        </p>
        <p
          className="text-2xl font-semibold
        lg:text-5xl"
        >
          What Makes Us Different
        </p>
        <p className="text-sm lg:text-base">
          At StoneWorx Builders, we don’t just build, we elevate every project
          with precision, clarity, and craftsmanship. From the first sketch to
          the final detail, your vision is handled with care and expertise.
        </p>
      </div>

      <div
        className="space-y-5 mt-10 lg:mt-0 lg:col-span-3
      lg:grid grid-cols-2 grid-rows-2 gap-5"
      >
        {whyUsData.map((data) => (
          <Card key={data.id}>
            <CardHeader className="space-y-2">
              <span className="bg-primary w-10 h-10 flex items-center justify-center rounded-full">
                <data.icon className="size-5 text-primary-foreground" />
              </span>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
