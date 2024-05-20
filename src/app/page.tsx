import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";


export default function Home() {
  return (

<main className=" min-h-screen ">
  <div className="flex  items-start justify-center h-full w-screen overflow-hideen">
<HeroSection/>
  </div>
<Services/>
<AboutSection/>
</main>
  
  );
}
