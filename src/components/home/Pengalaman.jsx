import { MdWorkHistory } from "react-icons/md";
import { motion } from "framer-motion";

const Pengalaman = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
    >
      <h2 className="flex items-center space-x-4 border-b border-purple-300/50 pb-4 mb-6">
        <span className="text-3xl text-purple-400 animate-pulse">
          <MdWorkHistory />
        </span>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Pengalaman
        </span>
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative pl-8 border-l-2 border-purple-300/50 hover:border-purple-100 transition-colors"
          >
            <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px] top-1 group-hover:bg-purple-100 transition-colors shadow-lg" />
            <h3 className="text-lg font-bold text-purple-100 mb-1">
              {exp.company}
            </h3>
            <p className="text-purple-300 mb-2 italic">{exp.position}</p>
            <p className="text-sm text-purple-200/80 bg-purple-900/30 px-3 py-1 rounded-full inline-block">
              {exp.date}
            </p>
            <p className="text-sm text-purple-300/70 mt-1">{exp.location}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const experiences = [
  {
    company: "Career Support Indonesia",
    position: "Staf Pengajar",
    date: "Januari 2026 - Sekarang",
    location: "Blitar, Jawa Timur - Blitar"
  },
  {
    company: "Aqua Co.",
    position: "Staf HR, Human Resource Department",
    date: "April 2025 - Desember 2025",
    location: "Kitakyushu, Fukuoka - Jepang"
  },
  {
    company: "LPK Takayama",
    position: "Staf Pengajar, Education Department",
    date: "Desember 2024 - Maret 2025",
    location: "Blitar, Jawa Timur - Indonesia"
  },
  {
    company: "PT. Yamaha Electronics Manufacturing Indonesia",
    position: "Staf Q-HSE, Standardization Department",
    date: "Februari 2024 - November 2024",
    location: "Pasuruan, Jawa Timur - Indonesia"
  },
  {
    company: "PT. Yamaha Electronics Manufacturing Indonesia",
    position: "Staf IT Programmer & IT Support, Production Department",
    date: "Desember 2023 - Februari 2024",
    location: "Pasuruan, Jawa Timur - Indonesia"
  },
  {
    company: "PT. Yamaha Motor Co, LTD.",
    position: "Line Worker Assembling, Production Department",
    date: "Oktober 2017 - Oktober 2020",
    location: "Fukuroi, Shizuoka - Jepang"
  },
  {
    company: "PT. BPD Bali cabang Negara",
    position: "Internship",
    date: "Juli 2012 - Desember 2012",
    location: "Negara, Bali - Indonesia"
  }
];

export default Pengalaman;
