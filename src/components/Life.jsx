import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

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
          with my Nikon Z series camera, completely immersed into the "flow"
          status.
          <br />- ✈️ Traveling is another love of mine. The Faroe Islands 🇫🇴🇫🇴🇫🇴
          are currently at the top of my bucket list.
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
          <br />- ⚽️ Football runs in my blood, and as a dedicated Arsenal fan
          🅰️🔴⚪🔥, you'll often find me on the field or cheering for the
          Gunners.
          <br />- 🎸 Independent music is my jam. I really love music festivals
          and livehouse gigs, with a recent obsession for Russian post-rock,
          Taiwanese bands, and 90s rock.
          <br />- 🍸 Experimenting with cocktails is my latest hobby. I've set
          up a mini-bar at home and am diving into mixology. My next adventure?
          Exploring Hong Kong's top bars!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">to be done</div>
    </>
  );
};

export default SectionWrapper(Life, "life");
