import { useState } from "react";
import { MdSunny, MdModeNight } from "react-icons/md";
import Navbars from "./partials/Navbars";
import Head from "./home/Head";
import Kontak from "./home/Kontak";
import Skill from "./home/Skill";
import About from "./partials/About";
import Pengalaman from "./home/Pengalaman";
import Pendidikan from "./home/Pendidikan";

const Resume = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  // Daftar halaman
  const pages = [
    { title: "Tentang", component: <About />, en: "About" },
    { title: "Pengalaman", component: <Pengalaman />, en: "Experience" },
    { title: "Pendidikan", component: <Pendidikan />, en: "Education" },
  ];

  const switchTheme = () => setIsDarkMode((prev) => !prev);
  const goToPage = (pageIndex) => setCurrentPage(pageIndex);
  const toggleAccordion = (section) =>
    setOpenAccordion(openAccordion === section ? null : section);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-stone-100 text-gray-800"
      }`}
    >
      {/* Navbar */}
      <Navbars className="sticky top-0 bg-opacity-80 backdrop-blur-md z-20 py-4" />

      {/* Kontainer utama */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar kiri */}
        <aside className="md:w-1/3 space-y-6">
          {/* Toggle tema */}
          <div className="flex justify-end">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDarkMode}
                onChange={switchTheme}
              />
              <div className="w-12 h-6 bg-stone-300 rounded-full peer-checked:bg-gray-600 transition-all duration-300">
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full top-1 left-1 transition-transform duration-300 ${
                    isDarkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                >
                  {isDarkMode ? (
                    <MdModeNight className="w-4 h-4 text-gray-800" />
                  ) : (
                    <MdSunny className="w-4 h-4 text-amber-500" />
                  )}
                </div>
              </div>
            </label>
          </div>

          {/* Konten sidebar */}
          <div className="space-y-4">
            <Head />

            {/* Accordion Kontak */}
            <div className="border border-stone-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion("kontak")}
                className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-stone-50 hover:bg-stone-200"
                }`}
              >
                <span className="flex justify-between items-center">
                  Contact
                  <span
                    className={`transition-transform duration-300 ${
                      openAccordion === "kontak" ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ↓
                  </span>
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openAccordion === "kontak" ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="px-4 py-3 bg-stone-50 overflow-y-auto max-h-80">
                  <Kontak />
                </div>
              </div>
            </div>

            {/* Accordion Skill */}
            <div className="border border-stone-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion("skill")}
                className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-stone-50 hover:bg-stone-200"
                }`}
              >
                <span className="flex justify-between items-center">
                  Skill
                  <span
                    className={`transition-transform duration-300 ${
                      openAccordion === "skill" ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ↓
                  </span>
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openAccordion === "skill" ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="px-4 py-3 bg-stone-50 overflow-y-auto max-h-80">
                  <Skill />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Konten utama */}
        <section className="md:w-2/3">
          <div className="relative bg-stone-50 rounded-lg shadow-sm border border-stone-200 overflow-hidden">
            {/* Konten halaman */}
            <div className="min-h-[400px] max-h-[calc(100vh-12rem)] overflow-y-auto p-6">
              {pages.map((page, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    currentPage === index ? "opacity-100" : "opacity-0 absolute top-6 left-6 right-6"
                  }`}
                >
                  {page.component}
                </div>
              ))}
            </div>

            {/* Footer */}
            <footer className="p-4 bg-stone-200 bg-opacity-90 flex justify-center space-x-6 border-t border-stone-300">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    currentPage === index
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-stone-300 text-gray-700 hover:bg-stone-400"
                  }`}
                >
                  {page.title}
                  <span className="block text-xs opacity-70">{page.en}</span>
                </button>
              ))}
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;