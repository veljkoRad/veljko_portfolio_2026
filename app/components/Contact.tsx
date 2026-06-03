"use client";
import { motion, useInView } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import SectionTitle from "./UI/SectionTitle";
import { AtSign, MapPin } from "lucide-react";

type ContactProps = {
  contactRef: React.RefObject<HTMLDivElement | null>;
};

type DataProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const Contact = ({ contactRef }: ContactProps) => {
  const contactInView = useInView(contactRef, {
    once: true,
    margin: "-100px",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: DataProps) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, {
        publicKey: PUBLIC_KEY,
      });
      reset();
    } catch (e) {
      const err = e as { status?: number; text?: string };
      console.error("Email send failed:", err);
    }
  };

  return (
    <section className=" px-12 max-sm:px-6 ">
      <div className="container-main max-lg:max-w-145 ">
        <h2 className="section-title ">
          <SectionTitle>Contact</SectionTitle>
        </h2>
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-start max-xl:items-center mt-16 max-sm:mt-12 pb-16 max-lg:flex-col flex-row gap-4"
        >
          <div className="flex-1">
            <h4 className="text-[28px] max-sm:text-[24px]  font-semibold">
              {" "}
              E-mail{" "}
            </h4>
            <div className="w-25 h-0.75 max-sm:w-18 bg-primary/40 mt-2.5 rounded-full"></div>
            <div className="flex gap-2 text-lg max-sm:text-sm items-center text-blue mt-5 max-sm:mt-2">
              <AtSign className="text-primary max-sm:w-7 " size={40} />
              radivojevicveljko92@gmail.com
            </div>
            <h4 className="text-[28px] max-sm:text-[24px] font-semibold mt-16 max-sm:mt-12">
              Adress
            </h4>
            <div className="w-25 h-0.75 bg-primary/40 mt-2.5 rounded-full"></div>
            <div className="flex gap-2 text-lg max-sm:text-sm items-center text-blue mt-5 max-sm:mt-2">
              <MapPin className="text-primary max-sm:w-7" size={40} /> Belgrade,
              Serbia
            </div>
            <h4 className="text-[28px] max-sm:text-[24px] font-semibold mt-16 max-sm:mt-12">
              {" "}
              Socials{" "}
            </h4>
            <div className="w-25 h-0.75 bg-primary/40 mt-2.5 rounded-full"></div>
            <div className="flex gap-2">
              <div className="flex gap-6 mt-6">
                <a
                  href="https://github.com/veljkoRad"
                  aria-label="Github profile"
                >
                  <Image
                    priority
                    width={42}
                    height={42}
                    src="/images/stackIcons/github-icon.svg"
                    alt="github icon"
                    className=" hover:scale-110 transition-transform duration-300 max-sm:w-8"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/veljko-radivojevic-77a825267"
                  aria-label="LinkedIn profile"
                >
                  <Image
                    priority
                    width={42}
                    height={42}
                    src="/images/stackIcons/linkedin-icon.svg"
                    alt="linkedin icon"
                    className="rounded-md hover:scale-110 transition-transform duration-300  max-sm:w-8"
                  />
                </a>
                <a
                  href="https://www.instagram.com/rveljko92/"
                  aria-label="Insta profile"
                >
                  <Image
                    priority
                    width={42}
                    height={42}
                    src="/images/stackIcons/insta.svg"
                    alt="linkedin icon"
                    className=" rounded-md hover:scale-110 transition-transform duration-300  max-sm:w-8"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex-1 border border-white/20 rounded-[20px] p-10 shadow-lg shadow-blue/15 flex flex-col items-center max-lg:mt-12"
            style={{ background: "linear-gradient(135deg, #ffffff1a, #fff0)" }}
          >
            <form
              className=" flex flex-col items-start max-w-75 "
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Name */}
              <label
                htmlFor="name"
                className="font-semibold text-primary/50 mb-2"
              >
                Your Name
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="name"
                    className={` form-input ${errors.name ? "border-red" : "border-primary/50"} hover:border-blue`}
                  />
                )}
              />
              {errors.name && (
                <span className="text-red text-sm font-medium">
                  {errors.name.message}
                </span>
              )}

              {/* Email */}
              <label
                htmlFor="email"
                className="mt-5 mb-2 font-semibold text-primary/50"
              >
                Your Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="email"
                    className={` form-input ${errors.email ? "border-red" : "border-primary/50"} hover:border-blue`}
                  />
                )}
              />
              {errors.email && (
                <span className="text-red text-sm font-medium">
                  {errors.email.message}
                </span>
              )}

              {/* Subject */}
              <label
                htmlFor="subject"
                className="mt-5 mb-2 font-semibold text-primary/50"
              >
                Subject
              </label>
              <Controller
                name="subject"
                control={control}
                rules={{
                  required: "Subject is required",
                  maxLength: { value: 120, message: "Subject is too long" },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="subject"
                    className={` form-input ${errors.subject ? "border-red" : "border-primary/50"} hover:border-blue`}
                  />
                )}
              />
              {errors.subject && (
                <span className="text-red text-sm font-medium">
                  {errors.subject.message}
                </span>
              )}

              {/* Message */}
              <label
                htmlFor="message"
                className="mt-5 mb-2 font-semibold text-primary/50"
              >
                Message:
              </label>
              <Controller
                name="message"
                control={control}
                rules={{
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters",
                  },
                }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="message"
                    rows={4}
                    className={` w-full h-12.5  form-input ${errors.message ? "border-red" : "border-primary/50"} hover:border-blue`}
                  />
                )}
              />
              {errors.message && (
                <span className="text-red text-sm font-medium">
                  {errors.message.message}
                </span>
              )}
              <div className="w-full mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" btn flex items-center gap-2 justify-center gradient"
                >
                  {isSubmitting ? "sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
