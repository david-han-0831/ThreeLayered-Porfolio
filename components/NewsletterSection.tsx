"use client";
import React, { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  SendIcon,
} from "./SocialMediaIcons";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="flex-[0_0_auto] min-w-[267px] max-md:order-2 max-md:min-w-[auto]">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900 max-sm:mb-6 max-sm:text-xl">
        Our Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="relative mb-12 max-sm:mb-8">
        <input
          type="email"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-0 pr-14 pl-6 h-12 text-base bg-gray-100 rounded-3xl border-[none] text-zinc-500 w-[267px] max-sm:w-full max-sm:max-w-[280px]"
          aria-label="Newsletter email input"
        />
        <button
          type="submit"
          className="flex absolute top-2/4 justify-center items-center bg-violet-700 rounded-2xl -translate-y-2/4 cursor-pointer border-[none] h-[31px] right-[9px] w-[31px]"
          aria-label="Subscribe to newsletter"
        >
          <SendIcon />
        </button>
      </form>
      <h3 className="mb-6 text-lg font-semibold text-gray-900 max-sm:mb-4 max-sm:text-base">
        Social media
      </h3>
      <div className="flex gap-3 max-md:justify-center">
        <a
          href="#facebook"
          className="flex justify-center items-center rounded-2xl cursor-pointer bg-zinc-500 h-[31px] w-[31px]"
          aria-label="Visit our Facebook page"
        >
          <FacebookIcon />
        </a>
        <a
          href="#instagram"
          className="flex justify-center items-center rounded-2xl cursor-pointer bg-zinc-500 h-[31px] w-[31px]"
          aria-label="Visit our Instagram page"
        >
          <InstagramIcon />
        </a>
        <a
          href="#youtube"
          className="flex justify-center items-center rounded-2xl cursor-pointer bg-zinc-500 h-[31px] w-[31px]"
          aria-label="Visit our YouTube channel"
        >
          <YoutubeIcon />
        </a>
      </div>
    </section>
  );
};
