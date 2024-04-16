import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* 标题大字部分 */}
      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What Can I Do</p>
        <h2 className={styles.sectionHeadText}>Tech Stacks</h2>
      </motion.div> */}
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => {
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className="text-center">{technology.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech);
