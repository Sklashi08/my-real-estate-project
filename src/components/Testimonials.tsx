import left_quote from "/left-quote.png";
import star from "/star.png";
import review_m_1 from "/review_m_1.jpg";
import review_m_2 from "/review_m_2.jpg";
import review_f_1 from "/review_f_1.jpg";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type TestimonialDataType = {
  id: string;
  title: string;
  desc: string;
  rating: number;
  img: string;
  name: string;
};

const testimonialsData: TestimonialDataType[] = [
  {
    id: "1",
    title: "Exceptional Workmanship.",
    desc: "StoneWorx delivered exactly what we envisioned — on time and with incredible attention to detail. Our new home feels modern, refined, and built to last.",
    rating: 5,
    img: review_m_1,
    name: "Abdul K",
  },
  {
    id: "2",
    title: "Professional From Start to Finish.",
    desc: "The team communicated clearly throughout the entire project. Every phase was handled with care, and the final result exceeded our expectations.",
    rating: 5,
    img: review_f_1,
    name: "Chiamaka E",
  },
  {
    id: "3",
    title: "A Truly Smooth Experience.",
    desc: "From design to handover, the process was seamless. They transformed our space beautifully and maintained high-quality standards throughout.",
    rating: 5,
    img: review_m_2,
    name: "Tolu A",
  },
];
export const Testimonials = () => {
  return (
    <div className="bg-secondary">
      <div
        className="px-7 py-10
       lg:w-[85%] lg:mx-auto lg:py-15"
      >
        <div className="text-center p-5">
          <p className="inline-block uppercase text-primary font-semibold text-xs p-1 border-b border-b-muted-foreground">
            Testimonials
          </p>
          <p
            className="text-sm font-bold text-primary mt-3
          lg:text-4xl "
          >
            What Our Clients Say
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-3
        lg:grid-cols-3 lg:mt-5"
        >
          {testimonialsData.map((data) => (
            <Card key={data.id} className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-1">
                  {[...Array(data.rating)].map(() => (
                    <img src={star} className="w-4" />
                  ))}
                </CardTitle>
                <CardAction>
                  <img src={left_quote} className="w-8" />
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-base font-semibold text-primary">
                  {data.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {data.desc}
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-x-2">
                <img
                  src={data.img}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="font-semibold text-base text-primary">
                  {data.name}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
