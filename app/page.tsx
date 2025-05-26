import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FooterV2 from "@/components/footer2"
import Service from "@/components/Service"
import Hero from "@/components/Hero"
import MotionGraphics from "@/components/MotionGraphics"
import AboutUs from "@/components/AboutUs"
import Project from "@/components/Project"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MotionGraphics videoUrl="https://firebasestorage.googleapis.com/v0/b/threelayered-portfolio.firebasestorage.app/o/motion-graphics%2F1-intro.mp4?alt=media&token=e5c5c3f1-e1bd-453a-be2a-4fbb8df016b4" />
      <Service />
      <div className="container mx-auto p-4">{/* Page content would go here */}</div>
      <AboutUs />
      <Project />
      <Footer />
      {/* <FooterV2 /> */}
    </main>
  )
}
