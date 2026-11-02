import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  // ReactNodeは画面に表示できる内容の型で、ここではRevealOnScrollで囲んだ要素を受け取る。
  children: ReactNode;
}

export const RevealOnScroll = ({ children }: Props) => {

  // useRefで要素への参照を作る。初期値はnullで、表示後はref.currentから実際のdiv要素を取得できる。
  const ref = useRef<HTMLDivElement>(null);

  // ----------------------------------------------------------------

  /*
    子コンポーネントをスクロール時にフェードインさせる処理

    【目的】
    <RevealOnScroll><About /></RevealOnScroll>のように囲んだ子だけを、
    スクロールして画面に入ったときにフェードインさせる。

    【処理フロー】
    1. 子コンポーネントを囲むdivにrevealクラスを付ける。
        CSSにより、最初は透明で少し下にずれた状態になる。
    2. useEffectで初回表示後に監視を始め、ref.currentでそのdivを取得する。
    3. IntersectionObserverがdivを監視し、画面に入ったことを知らせる。
    4. 画面に入ったらvisibleクラスを付け、CSSのtransitionでフェードインさせる。
    5. このコンポーネントを使わない子には影響しない。終了時は監視を解除する。
  */

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          element.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // ----------------------------------------------------------------

  // childrenを監視用のdivで囲んで返し、
  // 画面に入るとフェードインできるようにする。
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};