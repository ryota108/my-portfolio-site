import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Article = ({ index,name,tags,url,description }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className=" border p-5 rounded-2xl mb-4 mr-3 sm:w-[360px] w-full m-auto"
      >
        <a href={url} className="relative w-full h-[230px]">
        <div className="mt-5">
          <h3 className="text-color-white font-bold text-[13px] sm:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[5px] sm:text-[10px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
          </a>
      </Tilt>
    </motion.div>
  );
};

export default Article;
