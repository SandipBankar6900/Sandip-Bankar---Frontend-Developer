import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import IDOEventSection from "../components/IDOEventSection";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";
import RoadMap from "../components/RoadMap";
import TokenomicsSections from "../components/TokenomicsSection";
import TopSection from "../components/TopSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <TopSection />
      <IntroSection />
      <IDOEventSection />
      <TokenomicsSections />
      <RoadMap />
      <FaqSection />
      <Footer />
    </main>
  );
}
