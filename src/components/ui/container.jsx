import React from "react";

export const Container = ({ className, children }) => {
  return <div className={`max-w-7xl w-full ${className}`}>{children}</div>;
};
