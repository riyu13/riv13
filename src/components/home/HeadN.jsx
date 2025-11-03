import { useState, useEffect} from 'react'
import me from "../../assets/images/me.jpg";
const HeadN = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="flex flex-col items-center justify-center object-center">
      <div className="text-center">
        <img className="mx-auto w-32 h-32 rounded-full" src={me} alt="Profile" />
        <h4 className="flex flex-row mt-2 text-xl font-bold text-align-center justify-center">ギランフィルザリファンか</h4>
        <h4 className="flex flex-row mt-2 text-xl text-blue-400">フルスタック開発者 | 基準化 | 労働安全衛生 | 通訳者　</h4>
        <p className="text-lg font-semibold text-gray-300">{currentTime.toLocaleTimeString()}</p>
        <p className="text-gray-400">{day} {month} {year}</p>
      </div>
    </div>
  );
};
export default HeadN;
