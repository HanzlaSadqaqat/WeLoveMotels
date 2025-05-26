import React from "react";

export const Card = ({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.displayName = "Card";

export const CardContent = ({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 ${className}`} {...props} />
);

CardContent.displayName = "CardContent";
