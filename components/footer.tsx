import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center w-[90rem] max-w-full px-[5rem] gap-[4rem] flex-shrink-0 mx-auto bg-white border-t border-[#F2F4F6] mt-16"
      
    >
      <div className="container mx-auto px-4 pt-12 pb-6 flex flex-col gap-8 w-full">
        {/* 메인 footer 내용 */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
          {/* About */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Image src="/logo/logo.svg" alt="ThreeLayed Logo" width={160} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-[#23262F] text-base leading-relaxed max-w-xs">
              A smart and professional solution<br />
              for all SaaS, software and tech<br />
              companies & digital agencies.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Image src="/images/footer/email.svg" alt="email icon" width={18} height={15} />
              <span className="text-[#82868C] text-base">contact@threelayered.com</span>
            </div>
          </div>
          {/* Navigation */}
          <div className="flex-1 min-w-[180px] flex flex-col gap-5 items-start">
            <h3 className="font-sora text-xl font-semibold text-[#151414] mb-1">Navigation</h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/" className="text-[#6B14FA] underline underline-offset-4">Home</Link></li>
              <li><Link href="/about" className="text-[#82868C] hover:text-[#6B14FA] transition">About Us</Link></li>
              <li><Link href="/service" className="text-[#82868C] hover:text-[#6B14FA] transition">Service</Link></li>
              <li><Link href="/blog" className="text-[#82868C] hover:text-[#6B14FA] transition">Blog</Link></li>
              <li><Link href="/contact" className="text-[#82868C] hover:text-[#6B14FA] transition">Contact</Link></li>
            </ul>
          </div>
          {/* Newsletter & Social */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-5 items-start">
            <h3 className="font-sora text-xl font-semibold text-[#151414] mb-1">Our Newsletter</h3>
            <form className="flex w-full max-w-xs rounded-full bg-[#F5F5F7] p-1 pr-2 items-center">
              <input type="email" placeholder="Enter your e-mail" className="flex-1 bg-transparent px-4 py-2 text-base text-[#82868C] focus:outline-none" />
              <button type="submit" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#6B14FA] hover:bg-[#715de3] transition">
                <Image src="/images/footer/send.svg" alt="send" width={24} height={24} />
              </button>
            </form>
            <div className="mt-2">
              <span className="font-semibold text-[#151414] text-base mb-2 block">Social media</span>
              <div className="flex gap-4 mt-1">
                <Link href="#" aria-label="facebook"><FaFacebookF size={20} color="#82868C" /></Link>
                <Link href="#" aria-label="instagram"><FaInstagram size={20} color="#82868C" /></Link>
                <Link href="#" aria-label="youtube"><FaYoutube size={20} color="#82868C" /></Link>
              </div>
            </div>
          </div>
        </div>
        {/* 구분선 */}
        <div className="w-full flex justify-center mt-8 mb-2">
          <Image src="/images/footer/footer_line.svg" alt="footer line" width={1200} height={2} className="w-full h-auto" />
        </div>
        {/* Copyright */}
        <div className="w-full text-center text-[#82868C] text-base pb-2">
          Full Copyright & Design By <span className="text-[#6B14FA] font-medium">@threelayed</span> – 2025
        </div>
      </div>
    </footer>
  )
} 