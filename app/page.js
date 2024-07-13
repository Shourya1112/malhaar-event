import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Banner from "./components/Banner";
import Footer from "@/components/Footer";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-white pr-[5.75rem]">
      <Sidebar />

      <div className="w-full h-full">
        <Navbar />

        <Banner />
        {/* <Banner /> */}
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Footer />
      </div>
    </main>
  );
}
