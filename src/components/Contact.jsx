
import { motion } from "framer-motion";
/* import emailjs from "@emailjs/browser"; */
import { SectionWrapper } from "../layout";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";


const Contact = () => {

  
  return (
    <div id="contact" className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>


          
        <form
          action="https://getform.io/f/50ce0c3a-8091-4a32-9862-62f4b4193e70" method="POST"
          encType='multipart/form-data' 
          className="mt-12 flex flex-col gap-2"
        >
          <label className="flex flex-col"/>
            
          <span className="text-white font-medium mb-4">Your Name</span>
             
          <input
              type="text"
              name="name"
              placeholder="what´s your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
         

          <label className="flex flex-col"/>
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="what´s your Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          

          <label className="flex flex-col"/>
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              placeholder="Text me"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          
          <button type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            Send
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
