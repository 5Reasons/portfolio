import { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

import "./life.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel } from "swiper/modules"; // 导入需要的模块

import {
  hero,
  qinghai,
  cocktail,
  arsenal,
  ktown,
  anaya,
  malaysia,
} from "../assets";

const Life = () => {
  return (
    <>
      {/* 标题大字部分 */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Wanna know more about me?</p>
        <h2 className={styles.sectionHeadText}>My Life</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          - 📷 I'm passionate about photography and often wandering the city
          with my Nikon Z series camera.
          <br />- ✈️ Traveling is another love of mine. The Faroe Islands 🇫🇴🇫🇴🇫🇴
          is my top dream destination now.
          <br />- 👍 Stronglly recommend my favorite photographing & travelling
          Youtuber:
          <a
            href="https://www.youtube.com/@linksphotograph"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Links TV.{" "}
          </a>
          Watching his videos is my top enjoy.
          <br />- ⚽️ Football runs in my blood: a dedicated Arsenal fan
          🅰️🔴⚪🔥, COYG!!!
          <br />- 🎸 Independent music is my jam. I really love music festivals
          and livehouse gigs, with a recent obsession for Russian post-rock,
          Taiwanese bands, and 90s rock.
          <br />- 🍸 Experimenting with cocktails is my latest hobby. I've set
          up a mini-bar at home and am diving into mixology. My next adventure?
          Exploring Hong Kong's top bars!
        </motion.p>
      </div>

      <h3 className={`${styles.lifeSubTitle} mt-5`}>
        ⬇️ Some of my photography to show my life :D
      </h3>

      <div className="w-full mt-10 flex flex-wrap gap-7">
        <section className="swiper-container h-">
          <img className={`${styles.heroSize} hero`} src={hero} alt="" />
          <Swiper
            loop={true}
            grabCursor={true}
            speed={500}
            effect="slide"
            modules={[Navigation, Mousewheel]} // 引入导航和鼠标滚轮功能
            navigation={true} // 启用导航按钮
            mousewheel={{
              invert: false,
              sensitivity: 1,
            }}
            className="swiper"
          >
            <SwiperSlide>
              <h1 className={`${styles.titleFont} title two`}>Malaysia</h1>
              <img src={malaysia} alt="Malaysia" />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className={`${styles.titleFont} title two`}>Qinghai</h1>
              <img src={qinghai} alt="Qinghai" />
            </SwiperSlide>
            <SwiperSlide>
              <h1 className={`${styles.titleFont} title three`}>Anaya</h1>
              <img src={anaya} alt="Anaya" />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className={`${styles.titleFont} title four`}>Kennedy Town</h1>
              <img src={ktown} alt="Kennedy Town" />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className={`${styles.titleFont} title five`}>Arsenal</h1>
              <img src={arsenal} alt="Arsenal" />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className={`${styles.titleFont} title six`}>Cocktail</h1>
              <img src={cocktail} alt="Cocktail" />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default SectionWrapper(Life, "life");
