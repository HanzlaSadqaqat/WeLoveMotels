import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button } from "../../ui/button";

export const HeroBannerSection = ({
  heading = "Sell Your Hospitality Property for Cash Fast, Simple, and Reliable",
  subheading = "America's Trusted Buyer for Hotels, Motels & Resorts",
  paragraph = "Need to sell your motel, hotel, or resort quickly? We provide fair, no-obligation cash offers within 48 hours — no repairs, no agent fees, and no delays. Enjoy a stress-free selling experience built around your timeline.",
  buttonText = "Request Your Free Cash Offer",
  children,
  className,
  leftClass,
}) => {
  return (
    <section className="flex justify-center ">
      <div
        className={`flex xl:max-w-[1440px] justify-center xl:justify-between xl:px-[40px] w-full flex-wrap gap-[81px] py-[124px] ${className}`}
      >
        {/* Left content section */}
        <div
          className={`flex flex-col w-full md:w-[550px] xl:w-[791px] items-start gap-6 ${leftClass}`}
        >
          <div className="flex flex-col items-start gap-[13px] w-full">
            <h2 className="w-full font-bold text-white text-lg xl:text-xl">
              {subheading}
            </h2>

            <h1 className="w-full font-semibold text-white text-[44px] xl:text-[55px] leading-tight">
              {heading}
            </h1>
          </div>

          <p className="w-full font-normal text-white text-[14px] xl:text-[19px]">
            {paragraph}
          </p>

          <div className="flex items-center gap-5 ">
            <Button className="flex items-center gap-2.5 px-[25px] py-5 bg-secondary-2 rounded-[10px]">
              <span className="font-medium text-app-secondary text-base">
                {buttonText}
              </span>
              <FaCircleArrowRight color="#000" className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Optional right side */}
        <div>{children}</div>
      </div>
    </section>
  );
};
