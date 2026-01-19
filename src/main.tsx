import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/Header/component";
import Footer from "./components/Footer/component";

import Index from "./pages/Index/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
