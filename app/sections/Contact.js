import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contactData } from "../data/data";

export default function Contact() {
  return (
    <div className="my-40 px-2 lg:px-0">
      <div className="">
        <h2 className="text-4xl font-medium  text-customGreen mb-8">
          Let's connect
        </h2>
        <div className="lg:flex justify-between gap-20 items-center space-y-12">
          {/* Left: Contact Form */}
          <div className="lg:w-3/5">
            <form action="#" className="">
              <div className="mb-4 lg:flex items-center justify-between gap-8">
                <div className="w-full mb-4 lg:mb-0">
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full h-14 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full h-14 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full h-14 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                  placeholder="Your Phone"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full h-14 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-customBg dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition duration-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-customGreen text-white dark:text-black py-2 px-4 rounded-md shadow-sm font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="lg:w-1/2">
            <ul className="space-y-6">
              {contactData.map((contact) => (
                <li className="flex items-center gap-6">
                  <span className="text-customGreen text-xl bg-white dark:bg-customBg p-5 border-gray-600 rounded-lg">
                    {contact.icon}
                  </span>
                  <div className="w-full">
                    <p className="text-gray-600">{contact.name}</p>
                    <p className="text-lg font-medium">{contact.info}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
