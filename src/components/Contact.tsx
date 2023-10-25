import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
// import { Button } from "@mui/material";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [isPending, setIspending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIspending(true);
    console.log(isPending);
    toast.loading("Sending Message...", { id: "sending" });
    const formData = new FormData(e.currentTarget);
    let formDataObj: Record<string, FormDataEntryValue | null> = {};

    for (const key of Array.from(formData.keys())) {
      formDataObj[key] = formData.get(key);
    }
    const data = JSON.stringify(formDataObj);

    console.log("client data", data);

    fetch("https://mailer-steel.vercel.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    })
      .then((res) => res.json())
      .then(({ data }) => {
        if (!data.id) {
          // console.log(data.message);
          toast.error(data.message);
          setIspending(false);
          toast.loading("Sending Message...", {
            id: "sending",
            duration: 100,
          });
        } else {
          console.log("from server", data);
          setMessage("");
          toast.success("Email sent successfully");
          toast.loading("Sending Message...", {
            id: "sending",
            duration: 100,
          });
          setIspending(false);
        }
      })
      .catch((error) => {
        toast.loading(`Error ${error.message}`, {
          id: "sending",
          duration: 5000,
          icon: "❌",
        });
        console.log(error);
        setIspending(false);
      });
  };

  return (
    <div id="contact" className="scroll-mt-28">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 mb-3 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline font-semibold"
          href="mailto:omotayoolarewaju@gmail.com"
        >
          omotayoolarewaju@gmail.com
        </a>{" "}
        or use the form below:
      </p>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{
          delay: 0.2,
          type: "tween",
        }}
        viewport={{ once: true }}
      >
        <form
          className="flex mt-10 gap-3 flex-col dark:text-black "
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Enter your email"
            maxLength={60}
            required
            type="email"
            name="email"
            className="h-14 px-4  border-b-gray-400 rounded-lg border-b-2 border-l-2 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none "
          />
          <textarea
            className="h-52 my-3 rounded-lg p-4 border-b-gray-400 border-b-2 border-l-2 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            required
            placeholder="Write your message"
            name="message"
            cols={30}
            rows={10}
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="group border flex justify-center text-center items-center w-full gap-2 h-[3rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:text-lg focus:scale-[0.98] hover:text-lg hover:bg-gray-950 active:scale-101 disabled:scale-100 disabled:bg-opacity-65"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <>
                Sending...{" "}
                <span className="h-5 w-5 rounded-full animate-spin border-b-2 border-white "></span>
              </>
            ) : (
              <>
                Send{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-[2px] group-focus:-translate-y-1 group-focus:translate-x-2" />{" "}
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
