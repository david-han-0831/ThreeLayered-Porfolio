import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"

// Initialize the Sora font
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
  title: "ThreeLayered",
  description: "ThreeLayered - 웹 개발자 포트폴리오",
  generator: 'v0.dev',
  icons: {
    icon: '/logo/logo-small.svg',
    shortcut: '/logo/logo-small.svg',
    apple: '/logo/logo-small.svg',
  },
  openGraph: {
    title: 'ThreeLayered',
    description: '디자인부터 개발까지, 브랜드를 완성하는 크리에이티브 스타트업 – ThreeLayered',
    url: 'https://www.three-layered.com/',
    siteName: 'ThreeLayered',
    images: [
      {
        url: '/logo/logo.svg',
        width: 72,
        height: 347,
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
    images: ['/logo/logo-small.svg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Google Search Console 인증 토큰
    other: {
      'naver-site-verification': 'verification_token' // 네이버 웹마스터 도구 인증 토큰
    }
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${sora.variable} font-sans`}>{children}</body>
    </html>
  )
}
