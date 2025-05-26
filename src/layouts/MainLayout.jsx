import { Outlet } from "react-router-dom";
import { MainHeaderSection } from "./MainHeader";
import { SiteFooterSection } from "./SiteFooter";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeaderSection />
      <main className="flex-1">
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <SiteFooterSection />
    </div>
  );
};

export default MainLayout;
