import { MdOutlinePermContactCalendar } from "react-icons/md";

const Kontak = () => {
  return (
    <div className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700">
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
        <MdOutlinePermContactCalendar className="text-green-400 text-3xl animate-pulse" />
        <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
          Kontak
        </span>
      </h2>

      <div className="space-y-4 text-gray-200">
        <div className="flex items-center gap-3 hover:bg-gray-700/50 p-3 rounded-lg transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:gifiri14@gmail.com"
            className="hover:text-green-400 transition-colors"
          >
            gifiri13@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-700/50 p-3 rounded-lg transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a
            href="tel:+6285156698423"
            className="hover:text-green-400 transition-colors"
          >
            (+62) 851-5669-8423
          </a>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-700/50 p-3 rounded-lg transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Blitar, Jawa Timur</span>
        </div>
      </div>
    </div>
  );
};

export default Kontak;