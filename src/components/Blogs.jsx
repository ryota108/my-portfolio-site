import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import axios from "axios";
import Article from "./Article";
import {blogs} from "../constants/index"

const Blogs = () => {
  const [articles, setArticles] = useState(blogs);
  useEffect(() => {
    const getData = async () => {
      const url = "https://qiita.com/api/v2/authenticated_user/items";
      const data = await axios.get(url, {
        headers: {
          Authorization: `Bearer a13cf366af2f73e7bc60d5539edb162be7f3a099`,
        },
      });
      setArticles(data.data);
    };
    getData();
  }, [articles]);
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My study history</p>
          <h2 className={`${styles.sectionHeadText} mb-10`} >Blogs</h2>
          <div className="flex flex-wrap" >
          {articles?.map((article, index) => (
            <Article
              index={index}
              name={article.title.length >= 36 ?  article.title.substring(0,36) + "..." : article.title }
              tags={article.tags.slice(0,3)}
              url={article.url}
              key={index}
            />
          ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, "");
