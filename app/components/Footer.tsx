const Footer = () => {
  return (
    <div className=" px-12 border-t border-primary/10">
      <div className="max-w-360 w-full flex  max-sm:flex-col items-center justify-between  gap-10 py-12 text-primary mx-auto font-medium">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        >
          <div className="logo-family text-2xl font-semibold tracking-wider max-md:text-center text-left text-primary">
            VR
          </div>
        </button>
        <div className="min-w-55 text-right max-md:text-center max-sm:text-center text-primary/50 ">
          Copyright © 2025 Veljko Radivojević. <br /> All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
