import Banner1 from "@/components/Banner1";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Banner1 />
      </div>
    </>
  );
}
