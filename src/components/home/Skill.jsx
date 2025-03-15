import { MdOutlineHandyman } from "react-icons/md";

const Skill = () => {
  const skillCategories = [
    {
      title: "Framework",
      icon: "💻",
      skills: [
        { name: "ReactJS", value: 90 },
        { name: "NextJS", value: 70 },
        { name: "CodeIgniter 3", value: 70 },
        { name: "Laravel PHP", value: 60 },
        { name: "React Native", value: 50 },
        { name: "NodeJS", value: 60 },
        { name: "ExpressJS", value: 70 },
      ],
    },
    {
      title: "Office Apps",
      icon: "📊",
      skills: [
        { name: "Word", value: 100 },
        { name: "Excel", value: 90 },
        { name: "PowerPoint", value: 90 },
        { name: "PowerBi", value: 90 },
        { name: "Canva", value: 80 },
        { name: "MYOB", value: 80 },
        { name: "ERP Apps", value: 80 },
      ],
    },
    {
      title: "Language",
      icon: "🌐",
      skills: [
        { name: "Bahasa Indonesia (Fluent)", value: 90 },
        { name: "Bahasa Jawa (Fluent)", value: 90 },
        { name: "Bahasa Malaysia (Fluent)", value: 90 },
        { name: "日本語 Japanese (Fluent)", value: 70 },
        { name: "Bahasa Bali", value: 60 },
        { name: "English", value: 50 },
      ],
    },
    {
      title: "Certificate",
      icon: "📝",
      skills: [
        { name: "Akuntansi Dinas Industri Perdagangan Kabupaten Jembrana", value: 95 },
        { name: "Keahlian Perakitan Lv 2 (Senmonkyou 2)", value: 80 },
        { name: "JLPT N3", value: 70 },
        { name: "TOEFL", value: 60 },
        { name: "SIM A", value: 60 },
        { name: "SIM C", value: 90 },
      ],
    },
  ];

  return (
    <div className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700">
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
        <MdOutlineHandyman className="text-yellow-400 text-3xl animate-bounce" />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2 mb-4">
              <span>{category.icon}</span>
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-200 group-hover:text-yellow-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;