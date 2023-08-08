"use client";

import { Button } from "@material-tailwind/react";
import MainBanner from "./components/banner";
import Speciality from "./components/speciality";
import ProductSection from "./components/product";

export default function Home() {
  return (
    <div className="py-4">
      <MainBanner />
      <Speciality />
      <ProductSection  />
    </div>
  )
}
