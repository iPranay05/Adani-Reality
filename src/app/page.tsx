import Image from "next/image";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FloorPlans from '@/components/FloorPlans';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ContactPopup from '@/components/ContactPopup';
import LocalStorageClearer from '@/components/LocalStorageClearer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <LocalStorageClearer />
      <ContactPopup />
      <Header />
      <Hero />
      <About />
      <FloorPlans />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
