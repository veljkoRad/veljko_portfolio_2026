import {
  BriefcaseBusiness,
  Mail,
  Check,
  MonitorSmartphone,
  Link,
} from "lucide-react";

export const skills = [
  {
    icon: (
      <MonitorSmartphone
        className="group-hover:text-white text-blue max-sm:text-white"
        size={54}
      />
    ),
    title: "Modern Responsive",
    desc: (
      <>
        {" "}
        Build responsive pages with animations, dark/light modes, and smooth
        interactions using React, Next.js and Tailwind.
      </>
    ),
  },
  {
    icon: (
      <Check
        size={54}
        className="group-hover:text-white text-blue max-sm:text-white"
      />
    ),
    title: "Tested Apps ",
    desc: (
      <>
        Build full-stack applications with TypeScript, React Testing Library,
        Jest, and GitHub workflows.
      </>
    ),
  },
  {
    icon: (
      <Link
        size={54}
        className="group-hover:text-white text-blue max-sm:text-white"
      />
    ),
    title: "API Integration",
    desc: (
      <>
        Connect frontends to APIs - from custom WordPress backends to external
        services like TMDB.
      </>
    ),
  },
  {
    icon: (
      <BriefcaseBusiness
        size={54}
        className="group-hover:text-white text-blue max-sm:text-white"
      />
    ),
    title: "Marketing Developer",
    desc: (
      <>
        {" "}
        Understand user psychology and design for conversions. Implement SEO
        best practices, strategic CTAs.
      </>
    ),
  },
  {
    icon: (
      <Mail
        size={54}
        className="group-hover:text-white text-blue max-sm:text-white"
      />
    ),
    title: "Email Systems",
    desc: <> Design and code email templates for reliability across clients.</>,
  },
];
