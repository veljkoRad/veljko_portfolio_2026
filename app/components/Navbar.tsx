"use client";
import { useEffect, useState, RefObject } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

type NavSection = {
  id: string;
  label: string;
  ref: RefObject<HTMLElement | null>;
};

type NavbarProps = {
  active: string;
  sections: NavSection[];
};

const Navbar = ({ active, sections }: NavbarProps) => {
  const [toggleMobile, setToggleMobile] = useState(false);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved ?? "dark";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="fixed bg-navbar top-0 w-full flex [transition:top_0.3s_ease]  z-50 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.2),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)] px-6 ">
      <div className="max-w-360 w-full mx-auto  flex items-center justify-between">
        {/* Logo */}
        <button onClick={scrollTop} className=" cursor-pointer">
          {" "}
          <div className="logo-family text-primary text-3xl text-left  font-semibold tracking-wider">
            VR
          </div>
        </button>
        <div className="flex max-md:order-2 gap-2">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {sections.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      const navHeight = 200; // adjust to your navbar height
                      const element = item.ref.current;
                      if (element) {
                        const elementPosition =
                          element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                          top: elementPosition - navHeight,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className={`font-medium transition-colors cursor-pointer duration-100 ${
                      active === item.id
                        ? "text-primary"
                        : "text-primary/40 hover:text-primary"
                    } `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setToggleMobile(!toggleMobile)}
            className="md:hidden p-2 max-md:order-3"
            aria-label="Open mobile menu"
          >
            <Menu className="text-primary w-6 h-6" />
          </button>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-19.5 h-19.5 flex items-center justify-center rounded-none p-2 ml-2 ${theme === "dark" ? "bg-[rgba(0,0,0,0.2)]" : "bg-[rgba(255,255,255,0.2)]"} max-md:bg-transparent transition-colors duration-300 cursor-pointer`}
            aria-label="Toggle light and dark mode"
          >
            {theme === "light" ? (
              <Moon className="w-6 h-6 text-primary" />
            ) : (
              <Sun color="#ffc107" className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 md:hidden z-40 transition-opacity duration-300 ${
          toggleMobile ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[rgba(0,0,0,0.7)] "
          onClick={() => setToggleMobile(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute right-0 top-0 h-screen w-full max-w-sm bg-bg-first flex flex-col ${toggleMobile ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/50">
            <button
              onClick={() => {
                scrollTop();
                setToggleMobile(false);
              }}
              className="text-blue logo-family text-xl font-bold leading-5 tracking-widest cursor-pointer flex-1 text-left"
            >
              VR
            </button>
            <button
              onClick={() => setToggleMobile(false)}
              className="p-2"
              aria-label="Close navigation menu"
            >
              <X className="text-primary/90 w-6 h-6" />
            </button>
          </div>

          <ul className="flex flex-col pt-4">
            {sections.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setToggleMobile(false);
                    const navHeight = 200; // adjust to your navbar height
                    const element = item.ref.current;
                    if (element) {
                      const elementPosition =
                        element.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: elementPosition - navHeight,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="w-full text-left px-8 py-2 font-medium text-primary/90 hover:bg-bg-second transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
