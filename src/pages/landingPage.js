import React from "react";
import LineGradient from "../component/LineGradient";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import side_img from "../assests/image.png";
import chat from "../assests/Capture.PNG";
import best_value from "../assests/—Pngtree—best price banner with megaphone_4945615.png";
import cash_back from "../assests/cash_back_2.jpg";
import Projects from "../component/Cards";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
const LandingPage = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex justify-around max-sm:flex-col">
          <motion.div
            className="md:w-1/3 text-center md:text-left mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="">
              <p className="font-playfair font-semibold text-5xl mb-5 text-red">
                EXPERTS WITH MEGA VISION
              </p>

              <LineGradient width="mx-auto w-2/3" />
              <p className="mt-10">
                Here's What People are Saying About My Work. Aliquam aliquet
                integer ut fames odio in at. At magna ornare dictum lectus.
              </p>

              <button className="bg-red p-2 rounded-xl mt-10 font-bold hover:bg-yellow">
                Explore More
              </button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/3 text-center md:text-left mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={side_img}></img>
          </motion.div>
        </div>

        {/* card banner */}
        <div className="bg-white pt-10 pb-10">
          <div className="md:flex md:justify-between gap-8 mt-10 ">
            <motion.div
              className="mx-auto relative  max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 hover:bg-yellow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img src={cash_back} className="rounded-2xl mb-10"></img>
              <h1 className="font-playfair font-semibold  text-center text-xl  ">
                CASH BACK
              </h1>
              <p className="text-center text-xl">
                A auctor pharetra hendrerit mattis amet etiam interdum platea.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto relative  max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 hover:bg-yellow "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img src={best_value} className="rounded-2xl mb-10"></img>
              <h1 className="font-playfair font-semibold text-center text-xl pb-2 ">
                BEST VALUE
              </h1>
              <p className="text-center text-xl">
                Aliquam aliquet integer ut fames odio in at. At magna ornare
                dictum lectus.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto relative  max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 hover:bg-yellow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img src={chat} className="mb-5 h-[400px] rounded-2xl "></img>
              <div className="mb-9">
                <h1 className="font-playfair font-semibold text-xl  text-center pb-2">
                  QUICK RESPONSE
                </h1>
                <p className="text-center text-xl">
                  Fames odio in at. At magna ornare dictum lectus.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* news letter */}
        <Newsletter/>
        {/* our service */}
          <Projects/>
          {/* footer*/}
        
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
