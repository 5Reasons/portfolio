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
  const delta = useRef(300 - Math.random() * 100);

  const tick = useCallback(() => {
    let i = loopNum.current % toRotateText.length;
    let fullText = toRotateText[i];
    let updatedText = isDeleting.current
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting.current) {
      delta.current /= 1.9;
    }

    if (!isDeleting.current && updatedText === fullText) {
      isDeleting.current = true;
      delta.current = period;
    } else if (isDeleting.current && updatedText === "") {
      isDeleting.current = false;
      loopNum.current++;
      delta.current = 400;
    } else if (!isDeleting.current && updatedText !== "") {
      delta.current = 50;
    }
  }, [text]);

  useEffect(() => {
    const ticker = setInterval(tick, delta.current);
    return () => clearInterval(ticker);
  }, [tick]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet violet-gradient" />
        </div>

        <div>
          {/* <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Ruizheng</span>
          </h1> */}
          <div id="logo" className={`${styles.heroHeadText}`}>
            <b>
              <span>Hi, </span>I'm <span>Reeson</span>
            </b>
          </div>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full-Stack Engineer <br />A Photographer(考虑做轮播) <br />
            这里也可以考虑把我的那些霓虹灯、赛博特效加上
          </p> */}
          <p className={`${styles.heroRotateText}`}>
            <span className="txt-rotate">
              <span className="wrap" id="rotate">
                {text}
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
