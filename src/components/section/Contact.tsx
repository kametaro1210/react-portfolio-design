import emailjs from "@emailjs/browser";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {

    // フォームの名前・メールアドレス・メッセージの入力値をまとめて管理する。
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    // 引数は、フォーム要素（<form>）で起きた送信などのイベントを安全に扱うための型です。
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {

      // ブラウザのデフォルトのフォーム送信（ページのリロード）をキャンセル
      e.preventDefault();

      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          // 送信されたフォーム（名前・メール・メッセージの入力欄）をEmailJSに渡す。
          e.currentTarget,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          alert("メッセージを送信しました！");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => alert("送信に失敗しました。もう一度お試しください。"));
    };
  
    return (
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center relative"
      >

        <RevealOnScroll>

          <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Get In Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="名前..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="メッセージを入力してください..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form> 
          </div>

        </RevealOnScroll>

      </section>

    )
}