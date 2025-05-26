import React from "react";
import { HeroBannerSection } from "../components/common/HeroBanner/HeroBanner";
import { HowItWorksOverviewSection } from "../components/common/HowItWorksOverviewSection/HowItWorksOverviewSection";
import { BenefitsOverviewSection } from "../components/common/BenefitsOverviewSection/BenefitsOverviewSection";
import { ContactUsSection } from "../components/common/ContactUsSection/ContactUsSection";
import { FaqSection } from "../components/common/FaqSection/FaqSection";
import HeroImage from "../assets/hero-image.png";
import QuickCashOffer from "./../assets/image-3-1.png";
import ZeroFees from "./../assets/image-4.png";
import SellAsIs from "./../assets/image-5.png";
const benefits = [
  {
    id: 1,
    title: "Quick Cash Offers",
    description: "Get a competitive cash offer within 48 hours.",
    imageSrc: QuickCashOffer,
  },
  {
    id: 2,
    title: "Zero Fees",
    description: "No commissions or hidden closing costs.",
    imageSrc: ZeroFees,
  },
  {
    id: 3,
    title: "Sell As-Is",
    description: "No upgrades, repairs, or cleanup required.",
    imageSrc: SellAsIs,
  },
  {
    id: 4,
    title: "Nationwide Reach",
    description: "We buy across all 50 states.",
    imageSrc: QuickCashOffer,
  },
];
const HowItWorks = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full overflow-hidden relative">
        {/* MainContent */}
        <section
          style={{ backgroundImage: `url('${HeroImage}')` }}
          className="w-full bg-[url(/how-it-works/how-it-works-banner.png)] bg-cover bg-center"
        >
          <HeroBannerSection
            heading="Sell Your Motel, Hotel, or Resort in Just 4 Easy Steps"
            subheading="Simple, Fast, and Transparent"
            paragraph=""
            buttonText="Get My Cash Offer"
          />
        </section>
        {/* Main sections */}
        <HowItWorksOverviewSection
          title={"Sell Your Motel, Hotel, or Resort in Just 4 Easy Steps"}
          description={
            "Selling your motel, hotel, or resort has never been easier. Follow our simple 3-step process to get a quick cash offer and sell your property with ease."
          }
        />
        <BenefitsOverviewSection
          title={"Why Choose We Love Hotels?"}
          description={
            "Selling your hospitality property is easier with We Love Hotels. We offer a smarter, hassle-free way to sell motels, hotels, and resorts trusted by sellers nationwide for fast, rewarding results."
          }
          benefits={benefits}
        />
        {/* <PropertyValuationSection /> */}
        <ContactUsSection
          title={"Ready to Sell Your Property?"}
          description={
            <>
              Whether you're ready to sell now or just have questions, we're
              here to help. Our team is ready to guide you through every step
              with no pressure and no obligation.
            </>
          }
        />
        <FaqSection
          title={"Need Help? We Have Answers!"}
          description={
            "Got questions about selling your motel, hotel, or resort? Our FAQ section provides clear answers to help you make an informed decision."
          }
        />
      </div>
    </div>
  );
};

export default HowItWorks;
