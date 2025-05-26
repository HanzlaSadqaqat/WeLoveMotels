import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PropertyValuationSection = () => {
  const valuationSteps = [
    {
      id: 1,
      title: "Market Analysis",
      description:
        "We analyze current market trends, comparable sales, and local economic factors.",
      icon: "/market-analysis.png",
    },
    {
      id: 2,
      title: "Property Assessment",
      description:
        "Our experts evaluate your property's condition, features, and potential.",
      icon: "/property-assessment.png",
    },
    {
      id: 3,
      title: "Revenue Review",
      description:
        "We examine your property's financial performance and income potential.",
      icon: "/revenue-review.png",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-app-secondary text-[32px] xl:text-[40px] font-semibold [font-family:'Bricolage_Grotesque',Helvetica]">
                Get Your Property's True Value
              </h2>
              <p className="text-app-secondary text-xl [font-family:'Satoshi-Regular',Helvetica]">
                Our comprehensive valuation process ensures you get the most
                accurate and competitive offer for your property.
              </p>
            </div>

            <div className="grid gap-6">
              {valuationSteps.map((step) => (
                <Card
                  key={step.id}
                  className="border-none shadow-none bg-[#ffffef] rounded-2xl"
                >
                  <CardContent className="flex items-start gap-6 p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary-2 flex items-center justify-center shrink-0">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-app-secondary [font-family:'Bricolage_Grotesque',Helvetica]">
                        {step.title}
                      </h3>
                      <p className="text-app-secondary [font-family:'Satoshi-Regular',Helvetica]">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-fit bg-secondary-2 text-app-secondary rounded-[10px] px-8 py-4 text-lg font-medium [font-family:'Satoshi-Medium',Helvetica]">
              Get Your Free Valuation
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg"
                alt="Luxury Hotel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
