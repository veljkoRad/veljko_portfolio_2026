"use client";
import { motion, useInView } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import SectionTitle from "./UI/SectionTitle";

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
    }
  };

  return (
    <section className="bg-bg-second px-12 max-sm:px-6 ">
      <div className="container-main max-lg:max-w-145 ">
        <h2 className="section-title ">
          <SectionTitle>Contact</SectionTitle>
        </h2>
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-start max-xl:items-center max-lg:flex-col flex-row gap-17.5"
        >
          <Image
            width={800}
            height={845}
            alt="Veljko Image for Contact Section"
            src="/images/profile_veljko.jpeg"
            className=" rounded-xl  max-lg:max-w-145 max-xl:max-w-110 max-w-145 w-full h-full"
          />
          <div>
            <div className="text-secondary text-xl mt-2 max-lg:text-lg">
              I’m always excited to take on new projects and work with creative
              teams. Whether you have a project in mind or just want to connect,
              feel free to reach out!
            </div>
            <form
              className="mt-12.5 flex flex-col "
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Name */}
              <label htmlFor="name" className="sr-only">
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
                    placeholder="Your Name"
                    className={`form-input ${errors.name ? "border-red" : "border-gray"} hover:border-blue`}
                  />
                )}
              />
              {errors.name && (
                <span className="text-red text-sm font-medium">
                  {errors.name.message}
                </span>
              )}

              {/* Email */}
              <label htmlFor="email" className="sr-only">
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
                    placeholder="Your Email"
                    className={`mt-5 form-input ${errors.email ? "border-red" : "border-gray"} hover:border-blue`}
                  />
                )}
              />
              {errors.email && (
                <span className="text-red text-sm font-medium">
                  {errors.email.message}
                </span>
              )}

              {/* Subject */}
              <label htmlFor="subject" className="sr-only">
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
                    placeholder="Write a Subject"
                    className={`mt-5 form-input ${errors.subject ? "border-red" : "border-gray"} hover:border-blue`}
                  />
                )}
              />
              {errors.subject && (
                <span className="text-red text-sm font-medium">
                  {errors.subject.message}
                </span>
              )}

              {/* Message */}
              <label htmlFor="message" className="sr-only">
                Message
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
                    placeholder="Your Message"
                    rows={4}
                    className={`mt-5 form-input ${errors.message ? "border-red" : "border-gray"} hover:border-blue`}
                  />
                )}
              />
              {errors.message && (
                <span className="text-red text-sm font-medium">
                  {errors.message.message}
                </span>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 btn-color text-white w-47.5 h-15 rounded-2xl uppercase font-semibold cursor-pointer"
              >
                {isSubmitting ? "sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
