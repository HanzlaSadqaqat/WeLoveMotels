import React from "react";
import { Separator } from "./../components/ui/separator";

// Data for quick links
const quickLinks = [
  "Home",
  "About Us",
  "How It Works",
  "Valuation",
  "Investor Opportunities",
];

// Data for social media
const socialMedia = [
  { name: "Facebook", src: "/facebook.svg" },
  { name: "Instagram", src: "/instagram.svg" },
  { name: "Twitter", src: "/twitter.svg" },
  { name: "Linked in", src: "/linkedin.svg" },
];

export const SiteFooterSection = () => {
  return (
    <footer className="w-full py-14 px-6 md:px-20 lg:px-24 bg-transparent [background:linear-gradient(180deg,rgba(51,51,51,1)_0%,rgba(0,0,0,1)_100%)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-[85px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-[31px] text-white font-['Poppins',Helvetica]">
                WeLoveMotel
              </h2>
              <p className="text-white text-base font-['Satoshi-Regular',Helvetica]">
                Have questions? We're here to help. Contact us below or follow
                us on social media for updates and offers from We Love Hotels.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialMedia.map((item, index) => (
                <img
                  key={index}
                  className="w-[50px] h-[50px]"
                  alt={item.name}
                  src={item.src}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-[21px] text-white font-['Bricolage_Grotesque',Helvetica]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-[5px]">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white text-base font-['Poppins',Helvetica]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-[21px] text-white font-['Bricolage_Grotesque',Helvetica]">
              Contact Details
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <img
                  className="w-[24.8px] h-[24.8px]"
                  alt="PhoneIcon icon"
                  src="/phone-icon.svg"
                />
                <span className="text-white text-base font-['Satoshi-Regular',Helvetica] leading-6">
                  612-235-4700
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  className="w-[24.8px] h-[24.8px]"
                  alt="MailIcon icon"
                  src="/mail-icon.svg"
                />
                <span className="text-white text-base font-['Satoshi-Regular',Helvetica] leading-6">
                  motels@welovemotels.com
                </span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-[21px] text-white font-['Bricolage_Grotesque',Helvetica]">
              Address
            </h3>
            <div className="flex flex-col gap-5">
              <p className="text-white text-base leading-6 font-['Satoshi-Regular',Helvetica]">
                2801 Hennepin Ave #258
                <br />
                Minneapolis, MN 55408
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-5">
          <Separator className="bg-white/50" />
          <div className="flex flex-col md:flex-row md:justify-between gap-5">
            <div className="flex gap-5">
              <a
                href="#"
                className="text-white text-lg font-['Plus_Jakarta_Sans',Helvetica] leading-[27px]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white text-lg font-['Plus_Jakarta_Sans',Helvetica] leading-[27px]"
              >
                Terms of Service
              </a>
            </div>
            <div className="text-white text-lg font-['Plus_Jakarta_Sans',Helvetica] leading-[27px]">
              ©2025, All right reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
