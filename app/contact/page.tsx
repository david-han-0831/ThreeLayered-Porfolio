'use client';

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Project from "@/components/Project"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import Image from "next/image"
import { useState } from "react"
import ConfirmModal from "@/components/ConfirmModal"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  categories: string[];
  hearAboutUs: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  categories?: string;
  message?: string;
}

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    categories: [],
    hearAboutUs: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Required fields check
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.categories.length === 0) {
      newErrors.categories = 'Please select at least one category';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      categories: checked 
        ? [...prev.categories, value]
        : prev.categories.filter(cat => cat !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = async () => {
    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // 폼 초기화
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        categories: [],
        hearAboutUs: '',
        message: ''
      });
      
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error sending message:', error);
      // 에러 처리를 위한 상태 관리가 필요하다면 추가할 수 있습니다.
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <style jsx>{`
        .custom-checkbox {
          appearance: none;
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid #E6E6E6;
          border-radius: 50%;
          position: relative;
          cursor: pointer;
          outline: none;
        }

        .custom-checkbox:checked {
          border-color: #7864E6;
          background-color: white;
        }

        .custom-checkbox:checked::after {
          content: '';
          position: absolute;
          width: 0.75rem;
          height: 0.75rem;
          background-color: #7864E6;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .custom-checkbox:focus {
          box-shadow: 0 0 0 2px rgba(120, 100, 230, 0.2);
        }
      `}</style>

      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full mt-[20rem]" >
        {/* Title */}
        <h1 className="w-[30.5rem] h-[1.25rem] flex-shrink-0 text-[#141125] text-center font-sora text-[3.9375rem] font-semibold leading-[1rem] mb-[3.5rem]">
          Three Layered
        </h1>

        {/* Subtitle */}
        <div className="text-[#141125] text-center font-sora text-[1.6875rem] font-normal leading-[2.5rem] mb-16">
          Explore how great ideas are built.<br />
          Learn from our workflows, tools,<br />
          and creative breakthroughs — subscribe for more.
        </div>

        {/* Contact Form Section */}
        <div className="w-[80.30819rem] h-[67.75163rem] flex-shrink-0 rounded-[0.6715rem] bg-white shadow-[0px_0px_64.461px_32.231px_rgba(0,0,0,0.03)] flex">
          {/* Left Side - Contact Information */}
          <div className="w-[32.23069rem] h-[65.8715rem] flex-shrink-0 bg-[#7864E6] rounded-l-[0.6715rem] p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-white font-sora text-[2.13294rem] font-semibold leading-normal">
                Contact Information
              </h2>
              <p className="text-[#C9C9C9] font-sora text-[1.37119rem] font-normal leading-normal mt-4">
                Say something to start a live chat!
              </p>
            </div>
            
            {/* Contact Info Footer */}
            <div className="text-white">
              <div className="flex items-center gap-4 mb-6">
                <Image 
                  src="/images/contact/email.svg"
                  alt="Email icon"
                  width={30}
                  height={30}
                />
                <span className="text-white font-sora text-[1.21881rem] font-normal leading-normal">contact@three-layered.com </span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-gray-200"><FaFacebookF size={20} /></a>
                <a href="#" className="text-white hover:text-gray-200"><FaInstagram size={20} /></a>
                <a href="#" className="text-white hover:text-gray-200"><FaYoutube size={20} /></a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="w-2/3 p-12 flex flex-col h-[65.8715rem]">
            <div className="flex flex-col gap-12 flex-grow">
              {/* Name Fields */}
              <div className="flex gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[#575578] font-sora text-[1.07438rem] leading-[160%]">
                    First Name<span className="text-[#F27779]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full h-[3.8rem] px-[1.07438rem] py-[1.00719rem] rounded-[0.94006rem] border-[1.074px] ${errors.firstName ? 'border-[#F27779]' : 'border-[#E6E6E6]'} bg-white focus:outline-none focus:border-[#7864E6] focus:ring-1 focus:ring-[#7864E6] transition-colors`}
                  />
                  {errors.firstName && (
                    <span className="text-[#F27779] text-sm">{errors.firstName}</span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[#575578] font-sora text-[1.07438rem] leading-[160%]">
                    Last Name<span className="text-[#F27779]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full h-[3.8rem] px-[1.07438rem] py-[1.00719rem] rounded-[0.94006rem] border-[1.074px] ${errors.lastName ? 'border-[#F27779]' : 'border-[#E6E6E6]'} bg-white focus:outline-none focus:border-[#7864E6] focus:ring-1 focus:ring-[#7864E6] transition-colors`}
                  />
                  {errors.lastName && (
                    <span className="text-[#F27779] text-sm">{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Email & Company Fields */}
              <div className="flex gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[#575578] font-sora text-[1.07438rem] leading-[160%]">
                    Work Email Address<span className="text-[#F27779]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full h-[3.8rem] px-[1.07438rem] py-[1.00719rem] rounded-[0.94006rem] border-[1.074px] ${errors.email ? 'border-[#F27779]' : 'border-[#E6E6E6]'} bg-white focus:outline-none focus:border-[#7864E6] focus:ring-1 focus:ring-[#7864E6] transition-colors`}
                  />
                  {errors.email && (
                    <span className="text-[#F27779] text-sm">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[#575578] font-sora text-[1.07438rem] leading-[160%]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full h-[3.8rem] px-[1.07438rem] py-[1.00719rem] rounded-[0.94006rem] border-[1.074px] border-[#E6E6E6] bg-white focus:outline-none focus:border-[#7864E6] focus:ring-1 focus:ring-[#7864E6] transition-colors"
                  />
                </div>
              </div>

              {/* Category Selection */}
              <div className="flex flex-col gap-4">
                <label className="text-[#575578] font-sora text-[1.07438rem] leading-[160%]">
                  Select category? (multi)<span className="text-[#F27779]">*</span>
                </label>
                <div className="flex gap-8 py-2">
                  {['website', 'development', 'branding', 'marketing'].map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="categories"
                        value={category}
                        checked={formData.categories.includes(category)}
                        onChange={handleCategoryChange}
                        className={`custom-checkbox ${errors.categories ? 'border-[#F27779]' : ''}`}
                      />
                      <span className="text-[#011C2A] font-sora text-[1.07438rem] font-light capitalize">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.categories && (
                  <span className="text-[#F27779] text-sm">{errors.categories}</span>
                )}
              </div>

              {/* How did you hear about us */}
              <div className="flex flex-col gap-3">
                <label className="text-[#575578] font-sora text-[1.07438rem] leading-[160%]">
                  How did you first hear about us
                </label>
                <input
                  type="text"
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  className="w-full h-[3.8rem] px-[1.07438rem] py-[1.00719rem] rounded-[0.94006rem] border-[1.074px] border-[#E6E6E6] bg-white focus:outline-none focus:border-[#7864E6] focus:ring-1 focus:ring-[#7864E6] transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-3">
                <label className="text-[#575578] font-sora text-[1.07438rem] leading-[160%]">
                  Message<span className="text-[#F27779]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full h-[12rem] px-[1.07438rem] py-[1.00719rem] rounded-[0.94006rem] border-[1.074px] ${errors.message ? 'border-[#F27779]' : 'border-[#E6E6E6]'} bg-white resize-none focus:outline-none focus:border-[#7864E6] focus:ring-1 focus:ring-[#7864E6] transition-colors`}
                />
                {errors.message && (
                  <span className="text-[#F27779] text-sm">{errors.message}</span>
                )}
              </div>
            </div>

            {/* Submit Button Container */}
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="flex w-[14.3695rem] h-[3.62594rem] px-[3.22306rem] py-[1.00719rem] items-center justify-center gap-[0.6715rem] flex-shrink-0 rounded-[0.33575rem] bg-[#7864E6] shadow-[0px_0px_15.041px_0px_rgba(0,0,0,0.12)] hover:bg-[#6753d5] transition-colors"
                onClick={handleSubmit}
              >
                <span className="text-white text-center font-sora text-[1rem] font-semibold leading-normal">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Project Section */}
      <Project />
      
      {/* Footer */}
      <Footer />
      
      <ConfirmModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </main>
  )
}
