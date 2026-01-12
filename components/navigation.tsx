import { useState } from "react";
import Link from "next/link";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [{ name: "Documentation", href: "/documentation/" }];

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link href="/" className="text-3xl no-underline! text-white!">
              PostAI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="no-underline! hover:underline! text-white!"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-6 bg-current" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="no-underline! hover:underline! text-white!"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
