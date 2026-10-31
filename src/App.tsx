import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { About } from "./components/section/About";
import { Home } from "./components/section/Home";
import { Projects } from "./components/section/Projects";
import "./index.css";

function App() {

  // ローディング完了状態を管理する（初期状態は未完了）
  const [isLoaded, setIsLoaded] = useState(false); 

  // MobileMenuの開閉状態を管理する（初期状態は閉じている）
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 読み込み中に表示するローディング画面 */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      &#32;

      {/* メインページ本体。ローディング完了後にフェードインする */}
        <div className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >

        {/* メニューの開閉状態と更新関数を渡し、Navbarからメニューを開閉できるようにする */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* メニューボタン(≡)で開閉できるようにする */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />

      </div>
    </>


  )
}

export default App
