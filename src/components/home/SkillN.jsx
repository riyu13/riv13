import { MdOutlineHandyman } from "react-icons/md";

const Skilln = () => {
  const skillCategories = [
    {
      title: "フレームワーク",
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
      title: "オフィスアプリ",
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
      title: "言語",
      icon: "🌐",
      skills: [
        { name: "インドネシア語（流暢）", value: 90 },
        { name: "ジャワ語（流暢）", value: 90 },
        { name: "マレーシア語（流暢）", value: 90 },
        { name: "日本語（流暢）", value: 70 },
        { name: "バリ語", value: 60 },
        { name: "英語", value: 50 },
      ],
    },
    {
      title: "証明書",
      icon: "📝",
      skills: [
        { name: "ジェンブラナ県産業貿易局の会計", value: 95 },
        { name: "専門教育組み立てレベル２", value: 80 },
        { name: "日本語能力試験のN3", value: 70 },
        { name: "TOEFL", value: 60 },
        { name: "インドネシアの二輪免許", value: 90 },
        { name: "インドネシアの自動車免許", value: 60 },
      ],
    },
  ];

  return (
    <div className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700">
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
        <MdOutlineHandyman className="text-yellow-400 text-3xl animate-bounce" />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          スキル
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

export default Skilln;