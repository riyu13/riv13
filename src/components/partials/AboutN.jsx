import { MdAssignmentInd } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt pb-3">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
    >
      <h2 className="text-2xl flex items-center gap-3 font-bold mb-6">
        <MdAssignmentInd className="text-blue-400 text-3xl animate-pulse" /> 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          私について
        </span>
      </h2>
      <div className="mt-4 space-y-6">
          <div className="text-style text-justify leading-relaxed text-gray-200">
            <p>
              私は<span className="font-semibold text-blue-300">フルスタックデベロッパー</span>であり、ウェブおよびモバイルアプリケーションの開発に注力しています。  
              情報工学部の卒業証書で学び、<span className="italic">スラバヤ国立電子工科大学（Electronic Engineering Polytechnic Institute of Surabaya）</span>在学中に、  
              最新のプログラミング技術を深く学び、満足のいく成績で卒業しました。
            </p>
            <br />
            <p>
              最近の経験では、高山日本語学校で日本語教師またはスタッフとして働きました。そこで、日本語、日本文化、日本のルールについて教え、  
              特定技能やインターンシップの参加者をサポートし、日本企業の人事や取締役との面接時に通訳として同行しました。
            </p>
            <p>
              また、<span className="font-semibold">PT. Yamaha Electronics Manufacturing Indonesia</span>で<span className="font-semibold text-blue-300">IT生産スタッフ</span>として働いた経験があります。  
              そこで、<span className="font-semibold">Power BI</span>と統合されたシステムを通じて生産プロセスを管理および監視する責任を負いました。  
              その後、<span className="font-semibold text-blue-300">標準化スタッフ</span>としてローテーションされ、<span className="font-semibold">ISO 9001:2015、ISO 14001:2015、ISO 45001:2018</span>の導入に注力しました。  
              この役割では、作業手順書、その他標準化関連の文書を作成しました。  
              さらに、B3廃棄物管理、生産現場（現場）全体の従業員に対する安全衛生管理を行いながら、  
              ITプログラマーおよびITサポートとしての役割も継続しました。  
              また、ISO 14001:2015の監査で<span className="font-semibold text-blue-300">日本語通訳</span>としての経験もあります。
            </p>
            <br />
            <p>
              以前は、<span className="font-semibold">アイムジャパン</span>プログラムを通じて日本で<span className="font-semibold">ヤマハマリン</span>で3年間働きました。  
              そこで組み立てプロセスに携わり、生産プロセスの深い理解を得るとともに、  
              仕事における正確さと効率性を磨くスキルを身につけました。  
              また、<span className="font-semibold">JLPT N3</span>の証明書を持つ良好な日本語能力を有しており、  
              多文化な職場環境でスムーズにコミュニケーションを取ることができます。
            </p>
            <br />
            <p>
              技術面では、<span className="font-semibold text-blue-300">ReactJS、React Native、NodeJS、ExpressJS</span>などのさまざまな技術やフレームワークを習得しており、  
              <span className="font-semibold">MySQL</span>や<span className="font-semibold">PostgreSQL</span>などのデータベース管理にも熟練しています。  
              日本での就労経験と技術スキルの組み合わせにより、ソフトウェア開発において幅広い視点を持っています。  
              私は常に学び続け、自己成長し、革新的で将来にポジティブな影響を与える技術プロジェクトに貢献することに情熱を持っています。
            </p>
          </div>
      </div>
    </motion.div>
    </div>
  );
};

export default About;