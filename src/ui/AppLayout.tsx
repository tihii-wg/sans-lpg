import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function AppLatout() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(
    function () {
      navigate(`/${lang}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  if (!i18n.language) return null;
  return (
    <div className=" flex flex-col min-h-screen  font-[Inter] ">
      <SEOHead />
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
