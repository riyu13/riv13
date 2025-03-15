import { MdSchool } from "react-icons/md";
import { motion } from "framer-motion";

const Pendidikan = () => {
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
          Pendidikan
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
            Politeknik Elektronika Negeri Surabaya
          </h3>
          <p className="text-indigo-300 mb-2 italic">Diploma III di Fakultas Teknik Informatika</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            Agustus 2021 - Juli 2023
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
          <p className="text-indigo-300 mb-2 italic">Pelatihan Bahasa dan Budaya Jepang</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            Juli 2017 - Oktober 2017 
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
            LPK Yukimaga Surakarta
          </h3>
          <p className="text-indigo-300 mb-2 italic">Kursus Bahasa Jepang</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            Januari 2016 - Mei 2017 
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
            Akademi Komunitas Negeri Putra Sang Fajar
          </h3>
          <p className="text-indigo-300 mb-2 italic">Diploma II di Fakultas Teknologi Informasi</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            Juni 2014 - Juni 2016
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
            SMK N 1 Negara
          </h3>
          <p className="text-indigo-300 mb-2 italic">Jurusan Akuntansi</p>
          <p className="text-sm text-indigo-200/80 bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
            Juni 2011 - Juni 2014
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pendidikan;