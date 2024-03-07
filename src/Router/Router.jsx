import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";


export default function RouterPages() {
  const Services = React.lazy(() => import("../Pages/ServicesPage"));
  const Products = React.lazy(() => import("../Pages/products"));
  
  return (
    <Suspense>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={< Products/>} />
      </Routes>
    </Suspense>
  );
}
