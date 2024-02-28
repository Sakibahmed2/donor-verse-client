import Container from "../../components/ui/Container";
import banner from "../../assets/images/banner.jpg";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -1200,
    scale: 0.2,
    y: 300,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.9,
      type: "spring",
      stiffness: 60,
    },
  },
};
const imageAnimation = {
  hidden: {
    x: 1200,
    scale: 0.2,
    y: 300,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.9,
      stiffness: 60,
    },
  },
};

const Banner = () => {
  return (
    <div className="overflow-hidden">
      <Container className="md:h-screen md:mb-0 mb-20 pt-44">
        <div className="h-[720px] w-full max-w-[331px] md:max-w-[531px] bg-[#5FD479] rounded-full absolute -z-10 translate-x-[-50%] rotate-45 blur-[90px] opacity-20"></div>
        <div className="h-[520px] w-full max-w-[331px] md:max-w-[331px] bg-[#FC6736] rounded-full absolute top-0 right-80 -z-10 translate-x-[50%] -rotate-45 blur-[90px] opacity-20"></div>
        <div className="md:flex justify-center items-center w-full">
          <motion.div
            className="w-full max-w-[800px]"
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Fundraising for the people and cause you care
            </h1>
            <p className="text-gray-500 text-sm md:text-xl mt-4 mb-8">
              We provide a trusted donation channel for peoples of worldwide to
              support people and organizers. Crowdfunding is a way to raise
              money for an individual or organization by collecting donations
              through strangers and more.
            </p>
            <button className="custom-btn">Supplies</button>
          </motion.div>
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
          >
            <img
              className="w-full max-w-[1200px] rounded-tl-full"
              src={banner}
              alt=""
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
