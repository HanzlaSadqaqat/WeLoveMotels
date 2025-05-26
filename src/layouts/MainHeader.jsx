import { MoveRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const MainHeaderSection = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", active: true, route: "/" },
    { name: "About Us", active: false, route: "/about" },
    { name: "Sell Your Property", active: false, route: "/sell-your-property" },
    { name: "How It Works", active: false, route: "/how-it-works" },
    { name: "Valuation", active: false, route: "#" },
    {
      name: "Investor Opportunities",
      active: false,
      route: "/investor-opportunities",
    },
  ];

  return (
    <header className="flex w-full items-center justify-between px-[50px] py-[30px] bg-white">
      <div className="font-poppins font-semibold text-app-secondary text-[31px]">
        <Link to="/">WeLoveMotel</Link>
      </div>

      <div className="flex items-center gap-[25px]">
        <nav className="flex items-center gap-[25px]">
          {navItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2.5 px-0 py-2.5 ${
                location.pathname === item.route
                  ? "border-b border-[#333333]"
                  : ""
              }`}
            >
              <Link
                to={item.route}
                className="font-satoshi-medium font-medium text-app-secondary text-base hover:text-app-secondary/80"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <Button
          asChild
          className="flex items-center gap-2.5 px-[25px] py-[15px] bg-secondary-2 rounded-[10px] text-app-secondary hover:bg-secondary-2/90"
        >
          <Link to="/free-quote">
            <span className="font-satoshi-medium font-medium text-base">
              Get a Free Quote
            </span>
            <MoveRightIcon className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
