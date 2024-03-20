import Banner1 from "@/components/Banner1";
import Banner2 from "@/components/Banner2";
import CitySection from "@/components/CitySection";
import Navbar from "@/components/Navbar";
import PropertiPopuler from "@/components/PropertiPopuler";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Banner1 />
        <Banner2 />
        <PropertiPopuler />
        <CitySection />
      </div>
    </>
  );
}
