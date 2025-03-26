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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false); // Add state for success
  const [submitError, setSubmitError] = useState<string | null>(null); // Add state for error

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);  // Reset success state before submission
    setSubmitError(null);  // Reset error state before submission

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSubmitSuccess(true);  // Set success state to true on success
        reset();  // Reset the form
        toast("Email Sent!: Your message has been sent successfully.");
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setSubmitError("Uh oh! Something went wrong. There was a problem with your request.");
        toast("Uh oh! Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
                htmlFor="email"
                className="block text-left text-gray-700 text-lg font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="w-full p-3 mt-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
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

            {/* Display Success or Error Message */}
            {submitSuccess && (
              <p className="text-green-600 text-center">
                Your message has been sent successfully!
              </p>
            )}
            {submitError && (
              <p className="text-red-600 text-center">{submitError}</p>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 mt-4 ${
                  isSubmitting ? "bg-gray-400" : "bg-blue-600"
                } text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
