"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const isActive = (path: string) => {
    // This will make sure Home is not automatically highlighted
    if (path === "/" && pathname === "/") {
      return false // Don't highlight Home by default
    }
    return pathname === path
  }

  return (
    <header className="w-full border-b border-gray-100">
      <div className="flex h-20 items-center justify-between w-[90rem] max-w-full px-[5rem] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-[160px] flex items-center">
            <Image
              src="/logo/Group 1000002133.svg"
              alt="ThreeLayered Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="font-sora text-[22px] leading-[100%] tracking-[0%] text-center font-normal text-[#1c163c] hover:text-[#715de3]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`font-sora text-[22px] leading-[100%] tracking-[0%] text-center ${
                  isActive("/about") ? "font-bold text-[#715de3]" : "font-normal text-[#1c163c] hover:text-[#715de3]"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className={`font-sora text-[22px] leading-[100%] tracking-[0%] text-center ${
                  isActive("/service") ? "font-bold text-[#715de3]" : "font-normal text-[#1c163c] hover:text-[#715de3]"
                }`}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`font-sora text-[22px] leading-[100%] tracking-[0%] text-center ${
                  isActive("/blog") ? "font-bold text-[#715de3]" : "font-normal text-[#1c163c] hover:text-[#715de3]"
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right side - Language selector and Contact button */}
        <div className="flex items-center gap-8">
          {/* Language selector with dropdown capability */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-[#1c163c]"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <Globe className="h-5 w-5" />
              <span className="font-medium">English</span>
            </button>

            {/* Hidden dropdown for future language options */}
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <button className="block w-full px-4 py-2 text-left text-sm text-[#1c163c] hover:bg-gray-100">
                  English
                </button>
                <button className="block w-full px-4 py-2 text-left text-sm text-[#1c163c] hover:bg-gray-100">
                  한국어
                </button>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="rounded-lg bg-[#715de3] px-6 py-3 text-white font-sora text-[18px] leading-[100%] tracking-[0%] text-center capitalize transition-colors hover:bg-[#715de3]/90 md:text-[18px] sm:text-[16px] xs:text-[14px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}
