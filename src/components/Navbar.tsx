import { useEffect, type Dispatch, type SetStateAction } from "react";

interface Props {
  menuOpen: boolean;
  // Reactの状態更新関数の型。新しい値、または現在値から新しい値を返す関数を受け取る。
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = ({ menuOpen, setMenuOpen }: Props) => {

  // -----------------------------------------------------------------------------------------

  /*
    メニュー表示中の背景スクロールを制御する処理

    【目的】
    メニューが開いている間は、背景ページをスクロールできないようにする。

    【処理フロー】
    1. useEffectは初回表示後とmenuOpenが変わった後に実行される。
    2. menuOpenがtrueなら三項演算子で"hidden"を設定し、falseなら空文字に戻す。
    3. document.body.style.overflowはページ全体（body）のスクロール方法を指定する。
        "hidden"はスクロールを禁止し、空文字はこの指定を解除する。
    4. [menuOpen]を指定すると、メニューの開閉状態が変わったときにこの処理がもう一度実行される。
  */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // -----------------------------------------------------------------------------------------

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Kame<span className="text-blue-500">.tech</span>
          </a>

          {/* md未満の画面でメニューボタン(≡)を表示し、
          押すとAppのmenuOpenを切り替えてMobileMenuを開閉する */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* md以上の画面ではメニューボタンの代わりにPC用リンクを表示する */}
          <div className="hidden md:flex items-center space-x-8">

            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};