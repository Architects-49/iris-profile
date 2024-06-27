import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 50,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Architects 49 Limited</motion.h2>
          <motion.h1 variants={textVariants}>
            Integrated Research and Innovations Department
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>A49 Website</motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        BIM Data Digital Technology Computational Design Law Research & Development
        DEVELOPMENT
      </motion.div>
      <div className="imageContainer">
        <img src="/IRIs Logo_Final_0.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
