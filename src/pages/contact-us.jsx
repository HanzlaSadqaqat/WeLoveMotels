import React from "react";
import { HeroBannerSection } from "../components/common/HeroBanner/HeroBanner";
import { LeadCaptureForm } from "../components/Home/LeadCaptureFile/LeadCaptureFile";
import { BenefitsOverviewSection } from "../components/common/BenefitsOverviewSection/BenefitsOverviewSection";
import { HowItWorksOverviewSection } from "../components/common/HowItWorksOverviewSection/HowItWorksOverviewSection";
import { PropertyValuationSection } from "../components/Home/PropertyValuationSection/PropertyValuationSection";
import { ClientTestimonialsSection } from "../components/common/ClientTestimonialsSection/ClientTestimonialsSection";
import { ContactUsSection } from "../components/common/ContactUsSection/ContactUsSection";
import { FaqSection } from "../components/common/FaqSection/FaqSection";

import QuickCashOffer from "./../assets/image-3-1.png";
import ZeroFees from "./../assets/image-4.png";
import SellAsIs from "./../assets/image-5.png";
import HeroImage from "../assets/hero-image.png";
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
const ContactUs = () => {
  return (
    <div className="bg-background  flex flex-col items-center w-full">
      <div className="w-full">
        {/* Hero section with background image */}
        <section
          style={{ backgroundImage: `url('${HeroImage}')` }}
          className={`w-full  bg-cover bg-center`}
        >
          <HeroBannerSection
            subheading="Real people. Real offers. Real fast."
            heading="Let’s Talk About Selling Your Motel, Hotel, or Resort Quickly, Easily, and for Cash"
            paragraph=""
            buttonText="Get in Touch Today"
          />
        </section>

        {/* Main content sections stacked vertically */}
        <BenefitsOverviewSection
          title={"Let’s Talk We’re Here to Help You Sell with Confidence"}
          description={
            "Have questions about selling your motel, hotel, resort, or hospitality property? Whether you're ready for an offer or just exploring your options, our team is here to help every step of the way. We respond quickly, keep things simple, and always respect your time."
          }
          //   benefits={benefits}
        />

        <ContactUsSection
          title={"Get in Touch"}
          description={
            <>
              If you're ready to explore high-return opportunities in the
              hospitality sector, let’s talk. Our team is here to guide you,
              answer your questions, and help you take the next step.
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

export default ContactUs;
