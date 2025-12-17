import Hero from "@/components/Hero";
import ChancellorMessage from "@/components/ChancellorMessage";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import Organizers from "@/components/Organizers";
import Accreditation from "@/components/Accreditation";
import SecureSpotCTA from "@/components/SecureSpotCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Hero />
      <ChancellorMessage />
      <About />
      <Highlights />
      <Speakers />
      <Schedule />
      <Registration />
      <Organizers />
      <Accreditation />
      <SecureSpotCTA />
      <Footer />
    </main>
  );
}
