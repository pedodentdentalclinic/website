import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { HashRouter, Route, Routes } from "react-router";

import Header from "./components/Header/component";
import Footer from "./components/Footer/component";

import Index from "./pages/Index/page";
import NotFound from "./pages/NotFound/page";
import AboutUs from "./pages/AboutUs/page";
import ContactUs from "./pages/ContactUs/page";
import serviceHandler from "./pages/[service]/handler";
import ScrollToTop from "./components/ScrollToTop/component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {serviceHandler()}
      </Routes>
      <Footer />
    </HashRouter>
  </StrictMode>,
);
