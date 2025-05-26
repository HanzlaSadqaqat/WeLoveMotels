import { ArrowRightCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";

export const HowItWorksOverviewSection = ({ title, description }) => {
  // Data for the steps to enable mapping
  const steps = [
    {
      number: "Step 1:",
      title: "Tell Us About Your Property",
      description:
        "Fill out our short form or give us a call it only takes 2 minutes.",
      titleColor: "text-x-1",
      descriptionColor: "text-app-secondary",
      descriptionFont: "[font-family:'Poppins',Helvetica]",
    },
    {
      number: "Step 2:",
      title: "Receive a Cash Offer",
      description:
        "Our team evaluates your property and delivers a fair cash offer within 48 hours.",
      titleColor: "text-x-1",
      descriptionColor: "text-x-1",
      descriptionFont: "[font-family:'Nunito_Sans',Helvetica]",
    },
    {
      number: "Step 3:",
      title: "Pick Your Closing Date",
      description:
        "You choose the date. We handle the paperwork and logistics.",
      titleColor: "text-app-secondary",
      descriptionColor: "text-app-secondary",
      descriptionFont: "[font-family:'Nunito_Sans',Helvetica]",
    },
    {
      number: "Step 4:",
      title: "Get Paid",
      description:
        "Close on your terms and get your funds quickly and securely.",
      titleColor: "text-x-1",
      descriptionColor: "text-x-1",
      descriptionFont: "[font-family:'Nunito_Sans',Helvetica]",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] py-[100px] px-5 md:px-[92px] w-full">
      <div className="flex flex-col items-center gap-10">
        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-app-secondary text-[32px] xl:text-[40px] text-center tracking-[0] leading-normal">
          {title}
        </h2>

        <p className="max-w-[780px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-app-secondary text-xl text-center tracking-[0] leading-normal">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[15px] w-full">
        {steps.map((step, index) => (
          <Card key={index} className="w-80 bg-x-3 rounded-[10px] border-none">
            <CardContent className="flex flex-col items-start gap-10 p-5 pt-10">
              <div className="w-fit [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-alert text-[21px] tracking-[0] leading-[28.1px]">
                {step.number}
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <h3
                  className={`w-fit [font-family:'Bricolage_Grotesque',Helvetica] font-bold ${step.titleColor} text-xl tracking-[0] leading-[26.8px]`}
                >
                  {step.title}
                </h3>

                <p
                  className={`${step.descriptionFont} font-normal ${step.descriptionColor} text-base tracking-[0] leading-[21.4px]`}
                >
                  {step.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="flex items-center gap-2.5 px-[25px] py-5 bg-secondary-2 rounded-[10px] hover:bg-secondary-2/90">
        <span className="[font-family:'Poppins',Helvetica] font-medium text-app-secondary text-base">
          Begin the Process Now
        </span>
        <ArrowRightCircleIcon className="w-6 h-6" />
      </Button>
    </section>
  );
};
