import React from "react";
import { Card, CardContent } from "../../ui/card";
import personImage from "./../../../assets/bg.png";

export const ClientTestimonialsSection = () => {
  // Testimonial data that can be mapped over
  const testimonials = [
    {
      id: 1,
      quote:
        '"Selling my motel with We Love Hotels was a breeze. I received a fair cash offer and closed the deal within a week. Highly recommend their services!"',
      author: "John D",
      position: "Marketing Director at NovaTech Solutions",
      image: personImage,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-14  w-full">
        <div className="flex flex-col gap-10 md:w-1/2">
          <h2 className="font-medium text-app-secondary text-4xl font-['Bricolage_Grotesque',Helvetica]">
            Our Investors Are Building Wealth So Can You
          </h2>
          <p className="text-app-secondary text-xl font-['Satoshi-Regular',Helvetica]">
            Hear how our clients have successfully grown their real estate
            portfolios through strategic acquisitions facilitated by We Love
            Motels.
          </p>
        </div>

        <div className="flex flex-col  items-center gap-5 md:w-1/2">
          <Card className="w-full border border-solid border-[#333333] bg-[#ffffef] rounded-[20px]">
            <CardContent className="p-[30px]">
              <div className="flex flex-col gap-[50px]">
                <p className="text-[25px] text-app-secondary font-medium italic font-['Satoshi-MediumItalic',Helvetica]">
                  {testimonials[0].quote}
                </p>

                <div className="flex items-center gap-8">
                  <div
                    className="w-20 h-20 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${testimonials[0].image})` }}
                  />
                  <div className="flex flex-col gap-[5px]">
                    <h3 className="text-[25px] text-app-secondary font-bold font-['Bricolage_Grotesque',Helvetica]">
                      {testimonials[0].author}
                    </h3>
                    <p className="text-base text-app-secondary font-['Satoshi-Regular',Helvetica]">
                      {testimonials[0].position}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-[5px]">
            <div className="w-[23px] h-2.5 bg-[#f4f7fa] rounded-[60px]" />
            <div className="w-10 h-2.5 bg-secondary-2 rounded-[60px]" />
            <div className="w-[23px] h-2.5 bg-[#f4f7fa] rounded-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
