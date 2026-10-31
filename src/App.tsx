import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";

function App() {

  // ローディング完了状態を管理する（初期状態は未完了）
  const [isLoaded, setIsLoaded] = useState(false); 

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


      </div>
    </>


  )
}

export default App
