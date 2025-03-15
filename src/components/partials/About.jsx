import { MdAssignmentInd } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt pb-3">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 mt-2"
    >
      <h2 className="text-2xl flex items-center gap-3 font-bold mb-6">
        <MdAssignmentInd className="text-blue-400 text-3xl animate-pulse" /> 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Tentang Saya
        </span>
      </h2>
      <div className="mt-4 space-y-6">
          <div className="text-style text-justify leading-relaxed text-gray-200">
            <p>
              Saya adalah seorang <span className="font-semibold text-blue-300">Fullstack Developer</span> yang berfokus pada pengembangan aplikasi web dan mobile.  
              Selama menempuh pendidikan di D3 Fakultas Teknik Informatika, <span className="italic">Politeknik Elektronika Negeri Surabaya (PENS)</span>,  
              saya mendalami pemrograman dan teknologi terkini serta lulus dengan prestasi yang memuaskan.
            </p>
            <br />
            <p>
              Pengalaman saya terakhir bekerja sebagai <span className="font-semibold text-blue-300">Staf Pengajar Bahasa Jepang</span> di <span className="font-semibold text-green-300">LPK Takayama</span> 
              dengan tugas mengajarkan tentang Bahasa, Kebudayaan, Aturan di Negara Jepang, serta mendampingi peserta tokutei ginou dan magang ketika wawancara dengan HR atau Direktur perusahaan di jepang sebagai penerjemah.
            </p>
            <br />
            <p>
              Saya memiliki pengalaman bekerja sebagai <span className="font-semibold text-blue-300">Staf IT Production</span> di <span className="font-semibold text-green-300">PT. Yamaha Electronics Manufacturing Indonesia</span>,  
              di mana saya bertanggung jawab dalam mengelola dan memonitor proses produksi melalui sistem yang terintegrasi dengan <span className="font-semibold">Power BI</span>.  
              Saya juga dirotasi menjadi <span className="font-semibold text-blue-300">Staf Standarisasi</span> dengan fokus pada implementasi <span className="font-semibold">ISO 9001:2015, ISO 14001:2015, dan ISO 45001:2018</span>.  
              Dalam peran ini, saya bertugas menyusun SOP, WI, serta berbagai dokumen terkait standarisasi.  
              Selain itu, saya juga berkontribusi dalam manajemen limbah B3, manajemen K3 bagi seluruh karyawan di area produksi (genba),  
              serta tetap menjalankan peran sebagai IT Programmer dan IT Support.  
              Saya juga memiliki pengalaman sebagai <span className="font-semibold text-blue-300">Interpreter Bahasa Jepang</span> dalam audit ISO 14001:2015.
            </p>
            <br />
            <p>
              Sebelumnya, saya bekerja di Jepang melalui program <span className="font-semibold text-red-300">IM Japan</span> di <span className="font-semibold text-green-300">PT. Yamaha Marine</span> selama 3 tahun,  
              di mana saya terlibat dalam proses perakitan. Pengalaman ini memberikan pemahaman yang kuat tentang proses produksi  
              serta membentuk keterampilan ketelitian dan efisiensi dalam pekerjaan.  
              Selain itu, saya memiliki kemampuan berbahasa Jepang yang baik, dibuktikan dengan sertifikat <span className="font-semibold text-yellow-300">JLPT N3</span>,  
              yang memungkinkan saya berkomunikasi dengan lancar dalam lingkungan kerja multikultural.
            </p>
            <br />
            <p>
              Dari segi teknis, saya menguasai berbagai teknologi dan framework seperti <span className="font-semibold text-blue-300">ReactJS, React Native, NodeJS, dan ExpressJS</span>,  
              serta memiliki keahlian dalam mengelola database seperti <span className="font-semibold">MySQL</span> dan <span className="font-semibold">PostgreSQL</span>.  
              Kombinasi dari keterampilan teknis dan pengalaman kerja di Jepang memberikan saya perspektif yang luas dalam pengembangan perangkat lunak.  
              Saya selalu bersemangat untuk terus belajar, mengembangkan diri, serta berkontribusi dalam proyek-proyek teknologi yang inovatif dan berdampak positif di masa depan.
            </p>
          </div>
      </div>
    </motion.div>
    </div>
  );
};

export default About;