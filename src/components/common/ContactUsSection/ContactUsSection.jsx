import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import PhoneReceiverSilhouette from "../../../assets/phone-receiver-silhouette.png";
import Email from "../../../assets/email.png";
import LiveChat from "../../../assets/live-chat.png";
export const ContactUsSection = ({ title, description }) => {
  // Contact information data
  const contactInfo = [
    {
      icon: PhoneReceiverSilhouette,
      text: "612-235-4700",
      alt: "Phone receiver",
    },
    {
      icon: Email,
      text: "motels@welovemotels.com",
      alt: "Email",
    },
    {
      icon: LiveChat,
      text: "123 Main Street, Suite 100, Minneapolis, MN 55401",
      alt: "Live chat",
    },
  ];

  // Form fields data
  const formFields = [
    { label: "Full Name" },
    { label: "Email Address" },
    { label: "Phone" },
    { label: "Property Address" },
  ];

  return (
    <section className="w-full py-[100px] px-6 md:px-[97px] bg-[#ffffef] rounded-[70px]">
      <div className="flex flex-col md:flex-row gap-10 md:gap-[99px] max-w-[1318px] mx-auto">
        {/* Left Column - Contact Information */}
        <div className="flex flex-col gap-10 w-full md:w-[547px]">
          <div className="flex flex-col gap-5">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-app-secondary text-[40px] leading-normal">
              {title}
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-app-secondary text-lg leading-normal">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-[22px]">
                <img
                  className="w-[33px] h-[33px] object-cover"
                  alt={item.alt}
                  src={item.icon}
                />
                <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-app-secondary text-base leading-6">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <Card className="w-full md:w-[672px] bg-transparent border-none shadow-none">
          <CardContent className="p-0 flex flex-col gap-10">
            <div className="flex flex-col gap-5 w-full">
              {formFields.map((field, index) => (
                <div key={index} className="border-b border-[#333333]">
                  <Input
                    className="px-0 py-[15px] [font-family:'Neue_Leiden-SemiBold',Helvetica] font-semibold text-app-secondary text-xl leading-normal border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-app-secondary"
                    placeholder={field.label}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button className="px-[30px] py-[15px] bg-app-secondary rounded-[70px] [font-family:'Neue_Leiden-SemiBold',Helvetica] font-semibold text-white text-xl leading-normal h-auto">
                Let&apos;s Connect
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
