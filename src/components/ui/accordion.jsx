"use client";
import React, { useState } from "react";

const AccordionContext = React.createContext({
  value: null,
  onChange: () => {},
});

export const Accordion = ({
  type = "single",
  collapsible = false,
  defaultValue,
  className,
  children,
}) => {
  const [value, setValue] = useState(defaultValue || null);

  const onChange = (itemValue) => {
    setValue((currentValue) =>
      currentValue === itemValue && collapsible ? null : itemValue
    );
  };

  return (
    <AccordionContext.Provider value={{ value, onChange }}>
      <div className={`space-y-1 ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ value, className, children }) => {
  const context = React.useContext(AccordionContext);
  const isActive = context.value === value;

  return (
    <div
      className={`border-b transition-all ${
        isActive && "bg-accent"
      } ${className}`}
    >
      <div onClick={() => context.onChange(value)}>{children}</div>
    </div>
  );
};

export const AccordionTrigger = ({ className, children }) => {
  return (
    <div
      className={`flex justify-between items-center py-4 font-medium transition-all hover:underline ${className}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 transition-transform duration-200 transform"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
  );
};

export const AccordionContent = ({ className, children }) => {
  return (
    <div
      className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className}`}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};
