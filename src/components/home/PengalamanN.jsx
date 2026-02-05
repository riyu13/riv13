import { MdWorkHistory } from "react-icons/md";
import { motion } from "framer-motion";

const PengalamanN = () => {
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
          職務経歴
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
    position: "日本語の教室",
    date: "2026年1月 - 現在",
    location: "ブリタル、東ジャワ - インドネシア"
  },
  {
    company: "アクア株式会社",
    position: "人事スタッフ、人事部",
    date: "2025年4月 - 現在",
    location: "北九州、福岡 - 日本"
  },
  {
    company: "高山日本語学校",
    position: "教育スタッフ、教育部門",
    date: "2024年12月 - 2025年3月",
    location: "ブリタール、東ジャワ - インドネシア"
  },
  {
    company: "PT. Yamaha Electronics Manufacturing Indonesia",
    position: "Q-HSEスタッフ、標準化部門",
    date: "2024年2月 - 2024年11月",
    location: "パスルアン、東ジャワ - インドネシア"
  },
  {
    company: "PT. Yamaha Electronics Manufacturing Indonesia",
    position: "ITプログラマー＆ITサポートスタッフ、生産部門",
    date: "2023年12月 - 2024年2月",
    location: "パスルアン、東ジャワ - インドネシア"
  },
  {
    company: "ヤマハ発動機株式会社",
    position: "ライン作業員（組み立て）、生産部門",
    date: "2017年10月 - 2020年10月",
    location: "袋井、静岡 - 日本"
  },
  {
    company: "PT. BPD バリ ネガラ支店",
    position: "インターンシップ",
    date: "2012年7月 - 2012年12月",
    location: "ネガラ、バリ - インドネシア"
  }
];

export default PengalamanN;
