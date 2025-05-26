import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

export const FaqSection = ({ title, description }) => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "Do I have to accept your cash offer?",
      answer:
        "No, the offer is obligation-free. You can decline it without any charges. We aim to provide you with a fair offer, but you are under no obligation to accept it if it does not meet your expectations.",
      defaultOpen: true,
    },
    {
      question: "Are there any fees, commissions, or closing costs?",
      answer:
        "We handle all closing costs and there are no hidden fees or commissions when you sell to us.",
      defaultOpen: false,
    },
    {
      question: "What happens after I accept the offer?",
      answer:
        "After accepting the offer, our team will guide you through the closing process, handling all paperwork and ensuring a smooth transaction.",
      defaultOpen: false,
    },
    {
      question: "How long does it take to receive an offer?",
      answer:
        "We typically provide an initial offer within 24-48 hours after receiving your property information.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] py-[150px] px-6 md:px-[92px] w-full">
      <div className="flex flex-col items-center gap-2.5">
        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-app-secondary text-[40px] md:text-[58px] text-center tracking-[-1.74px] leading-tight">
          {title}
        </h2>

        <p className="max-w-[947px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-app-secondary text-lg md:text-[22px] text-center tracking-[0] leading-[39.6px]">
          {description}
        </p>
      </div>

      <div className="w-full max-w-[1328px]">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="border-t border-b border-app-secondary py-0"
            >
              <AccordionTrigger className="py-[31px] px-[28px] hover:no-underline">
                <span
                  className={`text-left ${
                    index === 0
                      ? "[font-family:'Satoshi-Bold',Helvetica] font-bold"
                      : "[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold"
                  } text-app-secondary text-[25px] tracking-[0] leading-normal`}
                >
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-[28px] pb-[31px]">
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-app-secondary text-[19.1px] tracking-[0] leading-normal">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
