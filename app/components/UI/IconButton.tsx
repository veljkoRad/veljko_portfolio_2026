type IconButtonProps = {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
};

const IconButton = ({ children, href, ariaLabel }: IconButtonProps) => (
  <a
    target="_blank"
    href={href}
    aria-label={ariaLabel}
    className="cursor-pointer  text-bg-first  w-12 h-12 rounded-xl bg-blue flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[linear-gradient(90deg,#3b82f6,#60a5fa)] hover:border-none hover:-translate-y-1 hover:text-white"
  >
    {children}
  </a>
);

export default IconButton;
