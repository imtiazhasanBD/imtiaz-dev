"use client";
import { useTheme } from "next-themes";
import { contactData } from "../data/data";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Contact() {
  const { theme } = useTheme();
  const access_key = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().matches(/^[0-9]+$/, "Phone must be a number"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("access_key", access_key);
    Object.entries(values).forEach(([key, value]) =>
      formData.append(key, value)
    );

    const json = JSON.stringify(Object.fromEntries(formData));

    const fetchSubmission = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    toast.promise(
      fetchSubmission,
      {
        pending: "Message sending...",
        success: "Send message successfully!",
        error: "Form submission failed. Please try again. 😞",
      },
      {
        position: "bottom-left",
        autoClose: 3000,
        theme: theme,
      }
    );

    const res = await fetchSubmission;
    if (res.success) {
      resetForm(); // Reset form after successful submission
    }
  };

  const pathName = usePathname();

  return (
    <div
      className={`${pathName === "/contact" ? "mt-10" : "mt-40"} px-2 lg:px-0`}
    >
      <h2 className="text-2xl lg:text-4xl font-medium text-customGreen mb-8">
        Let&apos;s connect
      </h2>

      <div className="lg:flex justify-between gap-20 items-center space-y-12">
        {/* Left: Contact Form */}
        <div className="lg:w-3/5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4 lg:flex justify-between gap-8">
                  <div className="w-full lg:mb-0">
                    <label
                      htmlFor="name"
                      className="block text-base font-medium relative after:content-['*'] after:text-customGreen after:ml-1"
                    >
                      Name
                    </label>

                    <Field
                      type="text"
                      name="name"
                      className="mt-1 block w-full h-14 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                      placeholder="Your Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block text-base font-medium after:content-['*'] after:text-customGreen after:ml-1"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="mt-1 block w-full h-14 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                      placeholder="Your Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium"
                  >
                    Phone
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    className="mt-1 block w-full h-14 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                    placeholder="Your Phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-base font-medium after:content-['*'] after:text-customGreen after:ml-1"
                  >
                    Subject
                  </label>
                  <Field
                    type="text"
                    name="subject"
                    className="mt-1 block w-full h-14 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                    placeholder="Subject"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-base font-medium after:content-['*'] after:text-customGreen after:ml-1"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows="5"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                    placeholder="Your Message"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-customGreen text-white dark:text-black py-2 px-4 rounded-md shadow-sm font-medium"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right: Contact Info */}
        <div className="lg:w-1/2">
          <ul className="space-y-6">
            {contactData.map((contact, i) => (
              //    mailto:${contact.info}
              <li key={i} className="flex items-center gap-6">
                <Link
                  href={`${contact.name === "Email" && `mailto:${contact.info}`|| contact.name === "Phone" && `tel:${contact.info}` || contact.name === "Linkedin" && `https://www.linkedin.com/in${contact.info}` || contact.name === "Address" && `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.info)}`}`}
                  target={
                    contact.name === "Linkedin" || contact.name === "Address"
                      ? "_blank"
                      : "_self"
                  }
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 w-full"
                >
                  <span className="text-customGreen text-xl bg-white dark:bg-customBg p-5 border-gray-600 rounded-lg">
                    {contact.icon}
                  </span>
                  <div className="w-full">
                    <p className="text-gray-600">{contact.name}</p>
                    <p className="text-lg font-medium">{contact.info}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
