import HeroSection from "./components/HeroSection";
import WindowShowcase from "./components/WindowShowcase";
import ScrollingGallery from "./components/ScrollingGallery";
import AdvantagesSection from './components/AdvantagesSection';
import CustomerLogoSelections from './components/CustomerLogosSection';
import FeatureTilesSection from './components/FeatureTilesSection';
import ContactUsSection from './components/ContactUsSection';


export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeatureTilesSection/>
      <WindowShowcase />
      <ScrollingGallery />
      <AdvantagesSection/>
      <CustomerLogoSelections/>
      <ContactUsSection/>
      
    </main>
  );
}
