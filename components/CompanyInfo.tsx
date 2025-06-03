import React from "react";

export const CompanyInfo = () => {
  return (
    <section className="flex-1 max-w-[400px] max-md:max-w-none">
      <header className="mb-6 max-sm:mb-4">
        <h2>
          <span className="text-3xl font-bold tracking-normal text-indigo-600 max-sm:text-3xl">
            Three
          </span>
          <span className="text-3xl font-bold tracking-normal text-gray-900 max-sm:text-3xl">
            Layed
          </span>
        </h2>
      </header>
      <p className="mb-8 text-lg leading-6 text-zinc-600 max-sm:mb-6 max-sm:text-base">
        A smart and professional solution
        <br />
        for all SaaS, software and tech
        <br />
        companies & digital agencies.
      </p>
      <address className="text-base text-zinc-600 not-italic">
        contact@three-layered.com 
      </address>
    </section>
  );
};
