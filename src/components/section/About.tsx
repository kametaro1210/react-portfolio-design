
export const About = () => {

  const frontendSkills: string[] = [
    "React",
    "javaScript",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills: string[] = [
    "Django", 
    "Python", 
    "Java", 
    "PostgreSQL", 
  ];

  return (

    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 sm:py-20"
    >

        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-4 sm:p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              Webアプリケーションの開発からシステムの保守運用に至るまで、一貫して携わっています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="min-w-0 rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((f_tech) => (
                    <span
                      key={f_tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {f_tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="min-w-0 rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((b_tech) => (
                    <span
                      key={b_tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {b_tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="min-w-0 p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-2">
                <li>
                  <strong>法学部卒業</strong> - とある大学 (2010-2014)
                </li>
                <li>
                  専攻 : 民法、刑法、政治学
                </li>
              </ul>
            </div>

            <div className="min-w-0 p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    営業 (約5年)
                  </h4>
                  <p>
                    金融商品やネットショップのシステム導入の新規開拓営業を経験
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    ITエンジニア (約8年)
                  </h4>
                  <p>
                    システムの保守運用や老朽化対応、新機能の実装業務等を経験
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

    </section>
  );
}