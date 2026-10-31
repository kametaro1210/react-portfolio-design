import { useEffect, useState } from "react";

interface Props {
  // 読み込み完了時に呼び出す、引数も戻り値もない関数
  onComplete: () => void;
};

export const LoadingScreen = ({ onComplete }: Props) => {

  // 画面に表示する文字を管理する（初期状態は空）
  const [text, setText] = useState(""); 

  // ローディング中に1文字ずつ表示する文字列
  const fullText = "<Hello World />"; 

  // -----------------------------------------------------------------------

  /*
    ローディング画面の文字を表示し、完了を通知する処理

    【処理フロー】
    1. useEffectで画面表示後にタイマーを開始する。
    2. index（表示する文字数）までの文字を取り出して表示し、indexを1増やす。
        substring(0, index)は、文字列の先頭からindexの手前までを取り出す。
    3. 全ての文字を表示すると繰り返しを停止する（clearInterval）。
    4. 1秒後にonComplete（親から渡された完了通知用の関数）を呼び出す（setTimeout）。
    5. 画面を閉じるときや処理を再実行するとき、returnで繰り返し処理を停止する。
        [onComplete]は初回と、onCompleteが変わったときにuseEffectを実行する指定。
  */

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // -----------------------------------------------------------------------

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"></span>
      </div>
    
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};