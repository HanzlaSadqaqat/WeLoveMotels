// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import ErrorPage from "../pages/404ErrorPage.jsx";
import AboutUs from "../pages/about-us.jsx";
import HowItWorks from "../pages/how-it-works.jsx";
import SellYourProperty from "../pages/sell-your-property.jsx";
import InvestmentOpportunities from "../pages/investor-opportunities.jsx";
import ContactUs from "../pages/contact-us.jsx";
import HomePage from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "sell-your-property",
        element: <SellYourProperty />,
      },
      {
        path: "how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "investor-opportunities",
        element: <InvestmentOpportunities />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
