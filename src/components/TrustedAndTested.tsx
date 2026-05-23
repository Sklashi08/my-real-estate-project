import trust_image from "/Trust-Image.png";
import logo_1 from "/Logo-1.svg";
import logo_2 from "/Logo-2.svg";
import logo_3 from "/Logo-3.svg";
import logo_4 from "/Logo-4.svg";
import logo_5 from "/Logo-5.svg";

type TrustedAndTestedDataTypes = {
  id: string;
  text1: string;
  text2: string;
  text3: string;
};

const TrustedAndTestedData: TrustedAndTestedDataTypes[] = [
  {
    id: "1",
    text1: "100+",
    text2: "Satisfied Clients",
    text3:
      "Delivering quality and trust across more than 100 successful projects.",
  },
  {
    id: "2",
    text1: "10-Year",
    text2: "Structural Warranty",
    text3: "Long-term structural protection you can depend on—built to last.",
  },
];

const brand_logos = [logo_1, logo_2, logo_3, logo_4, logo_5];

export const TrustedAndTested = () => {
  return (
    <div
      className="px-5 py-30
    lg:w-[85%] lg:mx-auto"
    >
      <div className="lg:grid grid-cols-5 items-start gap-10">
        <div className="col-span-3">
          <p className="uppercase inline-block text-primary font-semibold text-xs p-1 border-b border-b-muted-foreground">
            Proven & Trusted
          </p>
          <p
            className="mt-3 text-2xl font-semibold text-primary
          lg:text-5xl lg:leading-16"
          >
            Backed by Results, Built on Relationships
          </p>
          <p
            className="mt-2 text-sm text-primary
          lg:text-base"
          >
            StoneWorx Builders is a name homeowners rely on. From new builds to
            custom renovations, our work speaks for itself. With every project,
            we earn the trust of clients who choose craftsmanship, clarity, and
            consistency.
          </p>

          <div
            className="mt-5
          lg:flex items-center gap-x-5"
          >
            {TrustedAndTestedData.map((item) => (
              <div key={item.id}>
                <p className="p-3 text-xl font-bold border-b border-border">
                  {item.text1}
                </p>
                <div className="p-3">
                  <p className="text-base text-primary font-bold">
                    {item.text2}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.text3}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-10 relative p-3 lg:mt-0 
        lg:col-span-2"
        >
          <img
            src={trust_image}
            alt=""
            className="w-full rounded-4xl object-cover
         lg:h-120 lg:w-100"
          />
          <p className="inline-block bg-muted-foreground text-muted p-3 text-lg font-semibold w-[40%] rounded-xl absolute bottom-10 -left-2">
            Long-Term Reliability
          </p>
        </div>
      </div>
      <div
        className="mt-5 flex items-center  flex-wrap gap-3 p-3
      lg:justify-between lg:mt-10"
      >
        {brand_logos.map((item, index) => (
          <img src={item} alt="" key={index} className="w-25 lg:w-45" />
        ))}
      </div>
    </div>
  );
};
