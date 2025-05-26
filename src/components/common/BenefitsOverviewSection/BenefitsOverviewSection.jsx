import React from "react";
import { Card, CardContent } from "../../ui/card";
import QuickCashOffer from "../../../assets/image-3-1.png";
import ZeroFees from "../../../assets/image-4.png";
import SellAsIs from "../../../assets/image-5.png";
// Define benefit data for mapping

export const BenefitsOverviewSection = ({ title, description, benefits }) => {
  return (
    <section className="flex flex-col items-center gap-11 py-[150px] px-5 md:px-[90px] w-full">
      <div className="flex flex-col items-center gap-5 max-w-[905px]">
        <h2 className="font-semibold text-app-secondary text-[32px] xl:text-[40px] text-center [font-family:'Bricolage_Grotesque',Helvetica] leading-normal">
          {title}
        </h2>

        <p className="font-normal text-app-secondary text-[14px] xl:text-[18px] text-center [font-family:'Satoshi-Regular',Helvetica] leading-normal">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] w-full">
        {benefits &&
          benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="bg-[#ffffef] rounded-[30px] border-none"
            >
              <CardContent className="flex flex-col items-center justify-center py-10 px-6 h-[359px]">
                <div className="flex flex-col items-center gap-[47px]">
                  <div className="flex items-center justify-center w-[120px] h-[120px] bg-white rounded-full p-5">
                    <img
                      className="w-20 h-20 object-cover"
                      alt={benefit.title}
                      src={benefit.imageSrc}
                    />
                  </div>

                  <div className="w-[270px] flex flex-col items-center gap-[11px]">
                    <h3 className="font-bold text-center text-app-secondary text-[25px] [font-family:'Bricolage_Grotesque',Helvetica] leading-normal ">
                      {benefit.title}
                    </h3>
                    <p className=" font-normal text-app-secondary text-xl text-center [font-family:'Satoshi-Regular',Helvetica] leading-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
};
