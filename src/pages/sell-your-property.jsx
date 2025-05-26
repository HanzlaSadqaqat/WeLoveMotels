import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { HeroBannerSection } from "../components/common/HeroBanner/HeroBanner";
import { Button } from "../components/ui/button";
import { ClientTestimonialsSection } from "../components/common/ClientTestimonialsSection/ClientTestimonialsSection";
import { FaqSection } from "../components/common/FaqSection/FaqSection";
import whoWeAre from "../assets/whoWeAre.jpg";
import HeroImage from "../assets/how-it-works/how-it-works-banner.png";
import PriceBag from "../assets/pricebag.png";

export default function SellYourProperty() {
  return (
    <div className="bg-white">
      <section
        style={{ backgroundImage: `url('${HeroImage}')` }}
        className="w-full bg-[url(/how-it-works/how-it-works-banner.png)] bg-cover bg-center"
      >
        <HeroBannerSection
          title="Sell Your Property Today"
          description="Sell Your Motel, Hotel, or Land Fast Get a Fair Cash Offer Today"
          btnText="Ge My Free Cash"
        />
      </section>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-5 md:px-20 mt-10 md:mt-20">
        <div className="w-full md:w-1/2 ">
          <p className="text-[#333333] text-[20px] 2xl:text-[25px] font-bold mb-2 2xl:mb-10">
            Sell Your Motel
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Sell Your Motel Fast for Cash{" "}
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            Whether it’s a roadside motor inn or a multi-unit budget property,
            we’ll give you a fair, all-cash offer within 48 hours. No repairs,
            commissions, or delays — just a smooth, hassle-free sale on your
            terms.
          </p>

          <Button />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={whoWeAre}
            width={1000}
            height={1000}
            alt="AboutImage"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col items-center justify-between gap-10 px-5 md:px-20 mt-10 md:mt-20">
        <div className="w-full md:w-1/2 ">
          <p className="text-[#333333] text-[20px] 2xl:text-[25px] font-bold mb-2 2xl:mb-10">
            Sell Your Motel
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Sell Your Motel Fast for Cash{" "}
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            Whether it’s a roadside motor inn or a multi-unit budget property,
            we’ll give you a fair, all-cash offer within 48 hours. No repairs,
            commissions, or delays — just a smooth, hassle-free sale on your
            terms.
          </p>

          <Button />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={whoWeAre}
            width={1000}
            height={1000}
            alt="AboutImage"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-5 md:px-20 mt-10 md:mt-20">
        <div className="w-full md:w-1/2 ">
          <p className="text-[#333333] text-[20px] 2xl:text-[25px] font-bold mb-2 2xl:mb-10">
            Sell Your Motel
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Sell Your Motel Fast for Cash{" "}
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            Whether it’s a roadside motor inn or a multi-unit budget property,
            we’ll give you a fair, all-cash offer within 48 hours. No repairs,
            commissions, or delays — just a smooth, hassle-free sale on your
            terms.
          </p>

          <Button />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={whoWeAre}
            width={1000}
            height={1000}
            alt="AboutImage"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col items-center justify-between gap-10 px-5 md:px-20 mt-10 md:mt-20">
        <div className="w-full md:w-1/2 ">
          <p className="text-[#333333] text-[20px] 2xl:text-[25px] font-bold mb-2 2xl:mb-10">
            Sell Your Motel
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Sell Your Motel Fast for Cash{" "}
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            Whether it’s a roadside motor inn or a multi-unit budget property,
            we’ll give you a fair, all-cash offer within 48 hours. No repairs,
            commissions, or delays — just a smooth, hassle-free sale on your
            terms.
          </p>

          <Button />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={whoWeAre}
            width={1000}
            height={1000}
            alt="AboutImage"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-5 md:px-20 mt-10 md:mt-20">
        <div className="w-full md:w-1/2 ">
          <p className="text-[#333333] text-[20px] 2xl:text-[25px] font-bold mb-2 2xl:mb-10">
            Sell Your Motel
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Sell Your Motel Fast for Cash{" "}
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            Whether it’s a roadside motor inn or a multi-unit budget property,
            we’ll give you a fair, all-cash offer within 48 hours. No repairs,
            commissions, or delays — just a smooth, hassle-free sale on your
            terms.
          </p>

          <Button />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={whoWeAre}
            width={1000}
            height={1000}
            alt="AboutImage"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col items-center justify-between gap-10 px-5 md:px-20 mt-10 md:mt-20">
        <div className="w-full md:w-1/2 ">
          <p className="text-[#333333] text-[20px] 2xl:text-[25px] font-bold mb-2 2xl:mb-10">
            Sell Your Motel
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Sell Your Motel Fast for Cash{" "}
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            Whether it’s a roadside motor inn or a multi-unit budget property,
            we’ll give you a fair, all-cash offer within 48 hours. No repairs,
            commissions, or delays — just a smooth, hassle-free sale on your
            terms.
          </p>

          <Button />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={whoWeAre}
            width={1000}
            height={1000}
            alt="AboutImage"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full px-5 md:px-20 mt-10 md:mt-20">
        <h2 className="text-[#333333] text-[30px] md:text-[45px] font-bold text-center">
          Why Choose We Love Hotels?{" "}
        </h2>
        <p className="text-black text-[15px] md:text-[18px] text-center mt-5 w-full md:w-1/2 mx-auto">
          Selling your hospitality property is easier with We Love Hotels. We
          offer a smarter, hassle-free way to sell motels, hotels, and resorts
          trusted by sellers nationwide for fast, rewarding results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {[1, 2, 3, 4].map((item, key) => (
            <div
              key={key}
              className="bg-[#FFFFF0] flex flex-col items-center gap-5 p-10 rounded-md py-14"
            >
              <img
                src={PriceBag}
                width={50}
                height={50}
                className="object-contain"
                alt=""
              />
              <div>
                <p className="text-black text-[15px] md:text-[18px] 2xl:[25px] text-center">
                  Quick Cash Offers
                </p>
                <p className="text-black text-[15px] md:text-[15px] 2xl:[20px] text-center">
                  Get a competitive cash offer within 48 hours.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ClientTestimonialsSection />
      <div className="w-full flex flex-col md:flex-row justify-between px-5 md:px-20 my-10 md:my-20 gap-5 md:gap-10">
        <div className="w-full md:w-1/2">
          <p className="text-[#333333] text-[30px] md:text-[45px] font-bold mb-5 md:mb-10">
            Let's talk about your property
          </p>
          <p className="text-black text-[15px] md:text-[18px]">
            We Love Hotels is a premier real estate investment firm specializing
            in the direct purchase of motels, hotels, resorts, and other
            hospitality assets across the United States. Our goal is simple to
            help property owners sell quickly, smoothly, and without the
            complications of traditional listings.
          </p>
          <div className="flex items-center gap-5 mt-5 md:mt-10">
            <div className="bg-black rounded-full h-[25px] w-[25px] md:h-[33px] md:w-[33px] text-white justify-center items-center flex">
              <FaPhoneAlt size={16} className="md:size-[20px]" />
            </div>
            <p className="text-[#333333] text-[14px] md:text-[16px]">
              612-235-4700
            </p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <div className="bg-black rounded-full h-[25px] w-[25px] md:h-[33px] md:w-[33px] text-white justify-center items-center flex">
              <MdEmail size={16} className="md:size-[20px]" />
            </div>
            <p className="text-[#333333] text-[14px] md:text-[16px]">
              motels@welovemotels.com
            </p>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <div className="bg-black rounded-full h-[25px] w-[25px] md:h-[33px] md:w-[33px] text-white justify-center items-center flex">
              <IoLocation size={16} className="md:size-[20px]" />
            </div>
            <p className="text-[#333333] text-[14px] md:text-[16px]">
              123 Main Street, Suite 100, Minneapolis, MN 55401
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-[#333333] p-2 mb-4"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full border-b border-[#333333] p-2 mb-4"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border-b border-[#333333] p-2 mb-4"
          />
          <input
            type="text"
            placeholder="Property Address"
            className="w-full border-b border-[#333333] p-2 mb-4"
          />
          <div className="flex justify-end mt-5 md:mt-10">
            <button className="bg-[#333333] text-white p-2 rounded-full px-5 md:px-10 py-2 text-[14px] md:text-[16px]">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
      <FaqSection
        title={"Need Help? We Have Answers!"}
        description={
          "Got questions about selling your motel, hotel, or resort? Our FAQ section provides clear answers to help you make an informed decision."
        }
      />
    </div>
  );
}
