import { MdSchool } from "react-icons/md";
import { motion } from "framer-motion";

const PendidikanN = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
    >
      <h2 className="flex items-center space-x-3 border-b border-indigo-300/50 pb-4 mb-6">
        <span className="text-3xl text-indigo-400 animate-pulse">
          <MdSchool />
        </span>
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
          学歴
        </span>
      </h2>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative pl-8 border-l-2 border-indigo-300/50 hover:border-indigo-100 transition-colors"
        >
          <div className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-1 group-hover:bg-indigo-100 transition-colors shadow-lg" />
          <h3 className="text-lg font-bold text-indigo-100 mb-1">
            Electronic Engineering Polytechnic Institute of Surabaya
          </h3>
          <p className="text-indigo-300 mb-2 italic">情報工学部卒業証書</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            2021年8月 - 2023年7月
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative pl-8 border-l-2 border-indigo-300/50 hover:border-indigo-100 transition-colors"
        >
          <div className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-1 group-hover:bg-indigo-100 transition-colors shadow-lg" />
          <h3 className="text-lg font-bold text-indigo-100 mb-1">
            IM Japan
          </h3>
          <p className="text-indigo-300 mb-2 italic">日本語と日本文化のトレーニング</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            2017年6月 - 2017年10月
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative pl-8 border-l-2 border-indigo-300/50 hover:border-indigo-100 transition-colors"
        >
          <div className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-1 group-hover:bg-indigo-100 transition-colors shadow-lg" />
          <h3 className="text-lg font-bold text-indigo-100 mb-1">
            ユキマガ スラカルタ日本語学校
          </h3>
          <p className="text-indigo-300 mb-2 italic">日本語コース</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            2016年12月 - 2017年5月
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative pl-8 border-l-2 border-indigo-300/50 hover:border-indigo-100 transition-colors"
        >
          <div className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-1 group-hover:bg-indigo-100 transition-colors shadow-lg" />
          <h3 className="text-lg font-bold text-indigo-100 mb-1">
            プトラ・サン・ファジャール国立コミュニティアカデミー
          </h3>
          <p className="text-indigo-300 mb-2 italic">情報技術学部卒業証書</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            2014年6月 - 2016年6月
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="group relative pl-8 border-l-2 border-indigo-300/50 hover:border-indigo-100 transition-colors"
        >
          <div className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-1 group-hover:bg-indigo-100 transition-colors shadow-lg" />
          <h3 className="text-lg font-bold text-indigo-100 mb-1">
            ネガラ第1職業高校
          </h3>
          <p className="text-indigo-300 mb-2 italic">会計学科</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            2011年6月 - 2014年6月
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PendidikanN;
