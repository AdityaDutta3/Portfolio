import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { name, email, subject, message } = formData;

    // Construct the mailto URL
    const mailtoUrl = `mailto:duttaaditya890@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\n\nMessage: ${message}`
    )}`;

    // Open the user's default email client
    window.location.href = mailtoUrl;

    // Reset the form
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-semibold text-gray-900 mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-left text-gray-700 text-lg font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full p-3 mt-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-left text-gray-700 text-lg font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: true })}
                className="w-full p-3 mt-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-left text-gray-700 text-lg font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                className="w-full p-3 mt-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;