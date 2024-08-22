import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { toRotateText } from "../constants/index";
import "./logo.css";

const Hero = () => {
  const [text, setText] = useState("");

  const period = 2000;

  const loopNum = useRef(0);
  const isDeleting = useRef(false);
  const delta = useRef(200 - Math.random() * 100);

  const tick = useCallback(() => {
    let i = loopNum.current % toRotateText.length; // 获取当前循环文本的索引
    let fullText = toRotateText[i]; // 当前要显示的完整文本
    let updatedText = isDeleting.current
      ? fullText.substring(0, text.length - 1) // 删除字符
      : fullText.substring(0, text.length + 1); // 添加字符

    setText(updatedText); // 更新组件状态中的文本

    if (isDeleting.current) {
      delta.current /= 1.4; // 如果正在删除字符，减少时间间隔，加快删除速度
    }

    if (!isDeleting.current && updatedText === fullText) {
      isDeleting.current = true; // 如果添加完所有字符，开始删除
      delta.current = period; // 删除前等待 2 秒
    } else if (isDeleting.current && updatedText === "") {
      isDeleting.current = false; // 如果所有字符都删除完毕，开始添加下一个文本
      loopNum.current++; // 循环下一个文本
      delta.current = 800; // 开始打字前等待 800 毫秒
    } else if (!isDeleting.current && updatedText !== "") {
      delta.current = 50; // 正在打字时的时间间隔，模拟打字速度
    }
  }, [text]);

  useEffect(() => {
    const ticker = setInterval(tick, delta.current);
    return () => clearInterval(ticker);
  }, [tick]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center`}
      >
        {/* 垂直引导线 */}
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet violet-gradient" />
        </div> */}

        <div id="box" className={`${styles.heroHeadBox}`}>
          {/* <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Ruizheng</span>
          </h1> */}
          <div id="logo" className={`${styles.heroHeadText}`}>
            <b>
              <span>Hi, </span>I'm <span>Reeson</span>
            </b>
          </div>

          {/* 这里的样式设置的比较蠢，是让子标题的字体一定小于父标题实现的 */}
          <p className={`${styles.heroRotateText}`}>
            <span className="txt-rotate">
              <span className="wrap" id="rotate">
                A{text}
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Three.js 动画组件 */}
      <ComputersCanvas />

      {/* 引导动画 */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
