import { ArrowRightCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const MainContentSection = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-[50px] py-8 w-full">
      <div className="flex flex-col items-start gap-5">
        <h2 className="w-fit [font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl">
          Simple, Fast, and Transparent
        </h2>

        <h1 className="max-w-[712px] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-[55px] leading-tight">
          Sell Your Motel, Hotel, or Resort in Just 4 Easy Steps
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <Button
          variant="outline"
          className="flex items-center gap-2.5 px-[25px] py-5 bg-secondary-2 rounded-[10px] hover:bg-secondary-2/90"
        >
          <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-app-secondary text-base">
            Get My Cash Offer
          </span>
          <ArrowRightCircleIcon className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};
