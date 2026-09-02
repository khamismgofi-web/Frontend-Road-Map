//src/components/Navbar.tsx
import { useState } from "react";
import { useLanguage } from "../components/LanguageContext";

const Navbar = () => {
  const { t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-orange-500 text-white font-bold flex items-center justify-center">
            T
          </span>
          <span className="font-extrabold text-lg text-gray-900">
            Taarifa Mkononi
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
          <a href="#home" className="text-orange-500">
            {t("navHome")}
          </a>
          <a href="#about" className="hover:text-orange-500">
            {t("navAbout")}
          </a>
          <a href="#feedback" className="hover:text-orange-500">
            {t("navFeedback")}
          </a>
          <a href="#report" className="hover:text-orange-500">
            {t("navReport")}
          </a>
          <a href="#my-reports" className="hover:text-orange-500">
            {t("navMyReports")}
          </a>
        </nav>

        {/* Actions & Language Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold hover:border-orange-300 transition-colors"
          >
            <span>{t("flag")}</span>
            <span>{t("name")}</span>
          </button>

          <a
            href="#report"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            {t("reportNow")}
          </a>
        </div>

        {/* Hamburger Button (Mobile / Small Screens) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold"
          >
            <span>{t("flag")}</span>
            <span>{t("name")}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-gray-600">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="text-orange-500"
          >
            {t("navHome")}
          </a>
          <a
            href="#feedback"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-orange-500"
          >
            {t("navFeedback")}
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-orange-500"
          >
            {t("navAbout")}
          </a>
          <a
            href="#report"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-orange-500"
          >
            {t("navReport")}
          </a>
          <a
            href="#my-reports"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-orange-500"
          >
            {t("navMyReports")}
          </a>

          <a
            href="#report"
            onClick={() => setIsMenuOpen(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full text-center mt-2 transition-colors"
          >
            {t("reportNow")}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
