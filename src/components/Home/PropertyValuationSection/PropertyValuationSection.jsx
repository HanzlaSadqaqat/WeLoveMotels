import { MoveRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";

// Data for evaluation cards
const evaluationItems = [
  {
    title: "Architecture",
    description: "Design, structure, and layout compared to market standards.",
    imageSrc: "/evaluation-image.png",
  },
  {
    title: "Exterior Condition",
    description: "Visual appeal, condition, and maintenance",
    imageSrc: "/evaluation-image-1.png",
  },
  {
    title: "Interior Design",
    description: "Layout, flow, and design quality.",
    imageSrc: "/evaluation-image-2.png",
  },
  {
    title: "Furnishings",
    description: "Condition, quality, and presentation of furniture.",
    imageSrc: "/evaluation-image-3.png",
  },
  {
    title: "Landscape Design",
    description: "Curb appeal and environmental surroundings.",
    imageSrc: "/evaluation-image-4.png",
  },
  {
    title: "Site Planning",
    description: "Location, zoning, and long-term investment potential.",
    imageSrc: "/evaluation-image-5.png",
  },
];

export const PropertyValuationSection = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-[54px] px-6 py-[100px] bg-[#fffff3] md:px-[93px]">
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="w-fit [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-app-secondary text-[50px] text-center tracking-[0] leading-normal whitespace-nowrap">
          Want to Know What Your Property is Worth?
        </h2>

        <p className="max-w-[1020px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-app-secondary text-xl text-center tracking-[0] leading-normal">
          Get a free, no-pressure property valuation backed by real data and
          industry expertise not guesswork. We provide accurate insights to help
          you understand your property&#39;s true value and make confident
          decisions.
        </p>
      </div>

      <div className="flex flex-col items-start gap-7 w-full">
        <h3 className="w-full [font-family:'Satoshi-Bold',Helvetica] font-bold text-app-secondary text-3xl tracking-[0] leading-normal">
          Our Evaluation Covers:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] w-full">
          {evaluationItems.map((item, index) => (
            <Card key={index} className="bg-white rounded-[10px] border-none">
              <CardContent className="p-[41px] py-[42px]">
                <div className="flex items-center gap-5">
                  <div className="flex w-[120px] h-[120px] items-center justify-center p-5 bg-[#ffffef] rounded-full shrink-0">
                    <img
                      className="w-[60px] h-[60px] object-cover"
                      alt="Evaluation image"
                      src={item.imageSrc}
                    />
                  </div>

                  <div className="flex flex-col w-full gap-2.5">
                    <h4 className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-app-secondary text-[21px] tracking-[0] leading-[28.1px]">
                      {item.title}
                    </h4>

                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-app-secondary text-base tracking-[0] leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button className="flex items-center gap-2.5 px-[25px] py-5 bg-secondary-2 rounded-[10px] text-app-secondary hover:bg-secondary-2/90">
        <span className="[font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-normal">
          Get My Free Property Analysis
        </span>
        <MoveRightIcon className="w-6 h-6" />
      </Button>
    </section>
  );
};
