import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../layout";

const ServiceCard = ({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">{title}
      <motion.div 
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      variants={fadeIn("right", "sring", 0.5 * index, 0.75)}
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center"
        option={{
          max:45,
          scale:1,
          speed:450
        }}>

          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-[20px] text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div id="about" variants={textVariant()}>
        <p className={styles.sectionSubText}>Digital Soul</p>
        <h2 className={styles.sectionHeadText}>We Digitise Your Business</h2>
      </motion.div>

      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] " varients={fadeIn("", "", 0.1, 1)}>
        Do you know that in Portugal people spend an average of 7h20 using the
        internet, of which about two hours on social networks? Now imagine
        staying out of this opportunity. You dream. We realise.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper (About, "about");
