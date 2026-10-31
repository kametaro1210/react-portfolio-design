
// プロジェクト情報の必須項目と型を定め、データの不足や型の誤りを防ぐ。
interface Project {
  name: string;
  description: string;
  technologies: string[];
}

// Project型のプロジェクト情報をまとめ、下のmapで一覧表示する。
const projects: Project[] = [
  {
    name: "クラウド基盤管理プラットフォーム",
    description:
      "クラウド環境を管理し、稼働状況のリアルタイム監視や\n自動スケーリングを行うプラットフォームです。",
    technologies: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    name: "AI分析ダッシュボード",
    description:
      "機械学習を活用したデータ可視化ツールです。\n将来予測や、操作可能なレポートを提供します。",
    technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
  },
  {
    name: "ECサイト",
    description:
      "使いやすい画面と安全な決済機能を備え、\n商品在庫を柔軟に管理できるECサイトです。",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    name: "リアルタイムチャットアプリ",
    description:
      "リアルタイムのメッセージ送受信、オンライン状態の表示、\nグループチャットに対応するアプリです。",
    technologies: ["Socket.IO", "Express", "React", "Redis"],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 sm:py-20"
    >

      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="min-w-0 p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
            >
              
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {proj.name}
              </h3>

              <p className="text-sm sm:text-base text-gray-400 mb-4 whitespace-pre-line">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
