import { div } from "framer-motion/client";
import Facebook from "./icons/Facebook";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Mail from "./icons/Mail";
import IconButton from "./UI/IconButton";

const Footer = () => {
  return (
    <div className=" px-6 bg-bg-first bg-[url('/images/crissxcross.png')] bg-size-[170px]">
      <div className="max-w-7xl w-full flex flex-row max-md:flex-col items-center justify-space-between  gap-10 py-12 text-primary mx-auto font-medium">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl max-md:text-center text-left text-secondary cursor-pointer "
        >
          Veljko <br /> Radivojević
        </button>
        <div className="flex fled-row justify-center gap-2.5 flex-1">
          <IconButton
            href="https://www.linkedin.com/in/veljko-radivojevic-77a825267"
            ariaLabel="LinkedIn profile"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="https://github.com/veljkoRad"
            ariaLabel="Github profile"
          >
            <Github />
          </IconButton>
          <IconButton
            href="mailto:radivojevicveljko92@gmail.com"
            ariaLabel="My Mail"
          >
            <Mail />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/veljko.radivojevic.1"
            ariaLabel="Facebook profile"
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/rveljko92/"
            ariaLabel="Instagram profile"
          >
            <Instagram />
          </IconButton>
        </div>
        <div className="min-w-55 text-right max-md:text-center max-sm:text-center text-gray ">
          Copyright © 2025 Veljko Radivojević. <br /> All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
