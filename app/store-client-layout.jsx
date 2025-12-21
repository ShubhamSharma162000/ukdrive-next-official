"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./sidebar";
import Footer from "./Footer";

export default function StoreClientLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <TopBar onMenuClick={() => setOpenSidebar(true)} />
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
      {children}
      <Footer />
    </>
  );
}
