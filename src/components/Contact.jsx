import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-3 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Entre em</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>
        <div className="mt-12 flex flex-col gap-8">
          <a
            href="https://wa.me/message/YV4YXMKP5DHTE1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2"
          >
            <i className="fab fa-whatsapp text-green-500 text-3xl"></i>
            <span className="text-white font-medium">WhatsApp</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-santis-ab64b2177/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2"
          >
            <i className="fab fa-linkedin-in text-blue-500 text-3xl"></i>
            <span className="text-white font-medium">LinkedIn</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-2 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
