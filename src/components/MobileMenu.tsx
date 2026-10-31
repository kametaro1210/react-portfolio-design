import { type Dispatch, type SetStateAction } from "react";

interface Props {
  menuOpen: boolean;
  // Reactの状態更新関数の型。新しい値、または現在値から新しい値を返す関数を受け取る。
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu = ({ menuOpen, setMenuOpen }: Props) => {

  return (

    /* menuOpenがtrueならメニューを表示し、falseなら隠して操作できなくする */
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out

                    ${
                      menuOpen
                        ? "h-screen opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                    }
                  `}
    >
      
      {/* 閉じるボタン(×) を押したらナビゲーションのメニューを閉じる*/}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* menuOpenがtrueならHomeを表示位置にし、falseなら下にずらして隠す */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }        
        `}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }        
        `}
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }        
        `}
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }        
        `}
      >
        Contact
      </a>
    </div>
  );
};