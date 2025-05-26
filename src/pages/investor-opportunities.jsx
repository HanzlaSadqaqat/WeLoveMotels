import React from "react";
import { HeroBannerSection } from "../components/common/HeroBanner/HeroBanner";
import { HowItWorksOverviewSection } from "../components/common/HowItWorksOverviewSection/HowItWorksOverviewSection";
import { BenefitsOverviewSection } from "../components/common/BenefitsOverviewSection/BenefitsOverviewSection";
import { ContactUsSection } from "../components/common/ContactUsSection/ContactUsSection";
import { FaqSection } from "../components/common/FaqSection/FaqSection";
import HeroImage from "../assets/investor-opportunities/investment-opportunities-banner.png";
import MarketIntelligence from "../assets/investor-opportunities/MarketIntelligence.png";
import TailoredStrategies from "../assets/investor-opportunities/TailoredStrategies.png";
import TrustedExpertise from "../assets/investor-opportunities/TrustedExpertise.png";
import FullServiceSupport from "../assets/investor-opportunities/FullServiceSupport.png";
import MarketingResearch from "../assets/investor-opportunities/MarketingResearch.png";
import PortfolioStrategy from "../assets/investor-opportunities/PortfolioStrategy.png";
import RiskAndPerformance from "../assets/investor-opportunities/RiskAndPerformance.png";
import FinancialRoadMap from "../assets/investor-opportunities/FinancialRoadMap.png";
import { ClientTestimonialsSection } from "../components/common/ClientTestimonialsSection/ClientTestimonialsSection";
const benefits1 = [
  {
    id: 1,
    title: "Market Intelligence",
    description:
      "Make smarter decisions with our data-backed property and location analysis.",
    imageSrc: MarketIntelligence,
  },
  {
    id: 2,
    title: "Tailored Strategies",
    description:
      "Get personalized investment plans built around your risk profile and goals.",
    imageSrc: TailoredStrategies,
  },
  {
    id: 3,
    title: "Trusted Expertise",
    description:
      "Rely on our team's deep industry knowledge and transaction experience.",
    imageSrc: TrustedExpertise,
  },
  {
    id: 4,
    title: "Full-Service Support",
    description: "Customized financial plans to achieve your investment goals.",
    imageSrc: FullServiceSupport,
  },
];
const benefits2 = [
  {
    id: 1,
    title: "Market Research & Trend Analysis",
    description:
      " Understand property values, regional growth patterns, and demand cycles.",
    imageSrc: MarketingResearch,
  },
  {
    id: 2,
    title: "Portfolio Strategy Development",
    description: "Align your investments with long-term financial objectives",
    imageSrc: PortfolioStrategy,
  },
  {
    id: 3,
    title: "Risk & Performance Assessment",
    description: "Evaluate potential upside while managing exposure.",
    imageSrc: RiskAndPerformance,
  },
  {
    id: 4,
    title: "Personalized Financial Road mapping",
    description:
      "Navigate acquisitions, exits, and long-term planning with precision.",
    imageSrc: FinancialRoadMap,
  },
];
const InvestmentOpportunities = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full overflow-hidden relative">
        {/* MainContent */}
        <section
          style={{ backgroundImage: `url('${HeroImage}')` }}
          className="w-full bg-cover bg-center"
        >
          <HeroBannerSection
            subheading="Smart Investments, Hidden Hospitality Gems"
            heading="Invest in Profitable Motels and Resorts Nationwide"
            paragraph=""
            buttonText="Explore Investment Opportunities"
          />
        </section>
        <section className="w-full bg-gray-700 bg-cover bg-center">
          <HeroBannerSection
            subheading=""
            heading={
              <p className="text-[45px]">
                Invest in High-Return Hospitality Properties
              </p>
            }
            className={"!justify-center text-center"}
            leftClass={"!w-[900px] !items-center"}
            paragraph={
              <div className="flex flex-col gap-4 text-center">
                <span>
                  Join forces with We Love Motels to access exclusive,
                  off-market investment opportunities in motels, hotels, and
                  resorts across the U.S. Our tailored consulting and curated
                  listings help you invest smarter and earn more.
                </span>
                <span>
                  Discover lucrative investment opportunities with We Love
                  Hotels. Our expert team provides personalized consulting
                  services to help you expand your portfolio in the hospitality
                  industry.
                </span>
              </div>
            }
            buttonText="Explore Investment Opportunities"
          />
        </section>
        {/* Main sections */}
        <BenefitsOverviewSection
          title={"Why Partner with We Love Motels?"}
          description={
            "At We Love Motels, we connect savvy investors with premium hospitality assets across the country. Whether you're looking to expand your portfolio or enter the real estate market for the first time, we offer"
          }
          benefits={benefits1}
        />
        <BenefitsOverviewSection
          title={"Smarter Decisions Through Expert Guidance"}
          description={
            "Our advisory team is here to ensure your investments are well-informed, strategic, and built for long-term success. We provide hands-on support through every phase of the investment lifecycle."
          }
          benefits={benefits2}
        />
        <ClientTestimonialsSection />
        {/* <PropertyValuationSection /> */}
        <ContactUsSection
          title={"Get Started with Confidence"}
          description={
            <>
              Whether you're ready to purchase your next property or just
              exploring the market, our team is here to answer your questions,
              provide insights, and help you get started.
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

export default InvestmentOpportunities;
