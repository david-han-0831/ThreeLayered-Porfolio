import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FooterV2 from "@/components/footer2"
import Service from "@/components/Service"
import Hero from "@/components/Hero"
import MotionGraphics from "@/components/MotionGraphics"
import AboutUs from "@/components/AboutUs"
import Project from "@/components/Project"
import { Metadata } from "next"
// ✅ 메타데이터 설정 (절대경로로 작성해야 카카오가 인식 가능)   
export const metadata: Metadata = {
  title: "ThreeLayered",
  description: "ThreeLayered - 웹 개발자 포트폴리오",
  openGraph: {
    title: 'ThreeLayered',
    description: '디자인부터 개발까지, 브랜드를 완성하는 크리에이티브 스타트업 – ThreeLayered',
    url: 'https://www.three-layered.com/',
    siteName: 'ThreeLayered',
    images: [
      {
        url: 'https://www.three-layered.com/logo/logo.svg', // 절대경로!
        width: 1200,
        height: 630,
        alt: 'ThreeLayered Logo',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThreeLayered',
    description: 'ThreeLayered - 웹 개발자 포트폴리오',
    images: ['https://www.three-layered.com/logo/logo.svg'],
  },
}

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
