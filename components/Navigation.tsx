import React from "react";

export const Navigation = () => {
  const navItems = ["Home", "About Us", "Service", "Blog", "Contact"];

  return (
    <nav className="flex-[0_0_auto] max-md:order-1">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900 max-sm:mb-6 max-sm:text-xl">
        Navigation
      </h2>
      <ul className="flex flex-col gap-9 max-md:flex-row max-md:flex-wrap max-md:gap-6 max-md:justify-center max-sm:flex-col max-sm:gap-4">
        {navItems.map((item, index) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`relative text-lg ${
                index === 0 ? "text-indigo-600" : "text-zinc-600"
              } max-sm:text-base hover:text-indigo-600 transition-colors`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
