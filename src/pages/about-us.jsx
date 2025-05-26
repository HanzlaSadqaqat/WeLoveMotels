import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { HeroBannerSection } from "../components/common/HeroBanner/HeroBanner";
import HeroImage from "../assets/hero-image.png";
import ourMission from "../assets/ourMission.jpg";
import whoWeAre from "../assets/whoWeAre.jpg";
import { Button } from "../components/ui/button";

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url('${HeroImage}')` }}
        className={`w-full  bg-cover bg-center`}
      >
        <HeroBannerSection />
      </section>
      <div className="flex justify-between gap-10 px-20 mt-20">
        <div className="w-1/2">
          <p className="text-[#333333] text-[25px] font-bold mb-10">
            Who We Are
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Focused on You  Experts in Hospitality Property Buying.
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            We Love Hotels is a premier real estate investment firm specializing
            in the direct purchase of motels, hotels, resorts, and other
            hospitality assets across the United States. Our goal is simple to
            help property owners sell quickly, smoothly, and without the
            complications of traditional listings.
          </p>
          <p className="text-[#333333] text-[18px] font-bold mt-3 2xl:mt-8">
            What we offer
          </p>
          <ul className="list-disc pl-10 2xl:mt-3 text-[15px] 2xl:text-[18px]">
            <li className="text-black">
              Fast cash purchases of hotels, motels, and resorts
            </li>
            <li className="text-black">Closings in as little as 7 days</li>
            <li className="text-black">
              No broker fees or hidden closing costs
            </li>
            <li className="text-black">
              Nationwide service with dedicated support
            </li>
          </ul>
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
      <div className="flex flex-col md:flex-row-reverse justify-between gap-10 px-5 md:px-20 mt-10 md:mt-20">
        <div className="w-full md:w-1/2">
          <p className="text-[#333333] text-[20px] 2xl:text-[25px] font-bold mb-2 2xl:mb-10">
            Our Mission
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Focused on You  Experts in Hospitality Property Buying.
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            We Love Hotels is a premier real estate investment firm specializing
            in the direct purchase of motels, hotels, resorts, and other
            hospitality assets across the United States. Our goal is simple to
            help property owners sell quickly, smoothly, and without the
            complications of traditional listings.
          </p>
          <p className="text-[#333333] text-[18px] font-bold mt-3 2xl:mt-8">
            What we offer
          </p>
          <ul className="list-disc pl-10 2xl:mt-3 text-[15px] 2xl:text-[18px]">
            <li className="text-black">
              Fast cash purchases of hotels, motels, and resorts
            </li>
            <li className="text-black">Closings in as little as 7 days</li>
            <li className="text-black">
              No broker fees or hidden closing costs
            </li>
            <li className="text-black">
              Nationwide service with dedicated support
            </li>
          </ul>
          <Button />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={ourMission}
            width={1000}
            height={1000}
            alt="AboutImage"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full px-5 md:px-20 mt-10 md:mt-20">
        <h2 className="text-[#333333] text-[30px] md:text-[45px] font-bold text-center">
          Our Core Values
        </h2>
        <p className="text-black text-[15px] md:text-[18px] text-center mt-5 w-full md:w-1/2 mx-auto">
          Our values are the foundation of everything we do. They shape how we
          serve our clients, make decisions, and grow our business:
        </p>
        <p className="text-[#333333] text-[25px] md:text-[30px] font-bold mt-5 md:mt-10">
          What Drives Us Every Day
        </p>
        <div className="flex flex-wrap justify-between gap-5 md:gap-10">
          {[1, 2, 3, 4, 5, 6].map((item, key) => (
            <div
              key={key}
              className="flex gap-5 md:gap-10 w-full sm:w-[45%] lg:w-[30%] xl:w-[25%] items-center justify-center mt-5"
            >
              <img
                src={"/integrity.png"}
                width={40}
                height={40}
                className="object-contain w-[40px] md:w-[60px]"
                alt="AboutImage"
              />
              <div>
                <p className="text-[#333333] text-[20px] md:text-[25px] font-bold">
                  Integrity
                </p>
                <p className="text-black text-[14px] md:text-[18px]">
                  Integrity is the foundation of everything we do. It's the
                  foundation
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5 md:mt-10">
          <Button />
        </div>
      </div>
      <div className="w-full px-5 md:px-20 mt-10 md:mt-20">
        <h2 className="text-[#333333] text-[30px] md:text-[45px] font-bold text-center">
          The Experts Behind Our Success
        </h2>
        <p className="text-black text-[15px] md:text-[18px] text-center mt-5 w-full md:w-1/2 mx-auto">
          Our success is powered by a dedicated team of experienced
          professionals who understand both the real estate market and the
          unique needs of hospitality property owners.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 mt-5 md:mt-10">
          {[1, 2, 3].map((item, key) => (
            <div key={key} className="w-full md:w-1/3">
              <img
                src="/team.jpg"
                width={600}
                height={400}
                className="object-cover w-full h-[300px] md:h-[400px]"
                alt="AboutImage"
              />
              <p className="text-[#333333] text-[20px] md:text-[25px] font-bold mt-3 md:mt-5">
                Name
              </p>
              <p className="text-[#333333] text-[18px] md:text-[24px]">
                Vice President
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between gap-10 px-5 md:px-20 mt-10 md:mt-20">
        <div className="w-full md:w-1/2">
          <p className="text-[#333333] text-[20px] 2xl:text-[25px] font-bold mb-2 2xl:mb-10">
            Our Mission
          </p>
          <p className="text-[#333333] text-[30px] 2xl:text-[45px] font-bold mb-3 2xl:mb-10">
            Focused on You  Experts in Hospitality Property Buying.
          </p>
          <p className="text-black text-[15px] 2xl:text-[18px]">
            We Love Hotels is a premier real estate investment firm specializing
            in the direct purchase of motels, hotels, resorts, and other
            hospitality assets across the United States. Our goal is simple to
            help property owners sell quickly, smoothly, and without the
            complications of traditional listings.
          </p>
          <p className="text-[#333333] text-[18px] font-bold mt-3 2xl:mt-8">
            What we offer
          </p>
          <ul className="list-disc pl-10 2xl:mt-3 text-[15px] 2xl:text-[18px]">
            <li className="text-black">
              Fast cash purchases of hotels, motels, and resorts
            </li>
            <li className="text-black">Closings in as little as 7 days</li>
            <li className="text-black">
              No broker fees or hidden closing costs
            </li>
            <li className="text-black">
              Nationwide service with dedicated support
            </li>
          </ul>
          <Button />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={ourMission}
            width={1000}
            height={1000}
            alt="AboutImage"
            className="w-full h-auto"
          />
        </div>
      </div>
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
    </div>
  );
}
