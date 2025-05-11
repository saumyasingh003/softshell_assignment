import {
  FaUpload,
  FaSearchDollar,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaBolt,
  FaThumbsUp,
} from "react-icons/fa";
import ContactForm from "./Contactform";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: idx * 0.2 },
    }),
  };
  const {darkMode, setDarkMode} = useDarkMode()

  return (
    <div className="min-h-screen  transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-10">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#F95738]"
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#F95738]">
              Resell Your Unused Software Licenses with SoftSell
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-[#083D77] dark:text-blue-100">
              Turn your idle software into instant value. Get fast quotes,
              secure transfers, and top market payouts.
            </p>
            <button className="mt-8 px-8 py-4 bg-[#EE964B] hover:bg-[#F95738] text-white text-lg font-medium rounded-full transition duration-300">
              Sell My Licenses
            </button>
          </div>
        </motion.h1>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#F4D35E] dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#083D77] dark:text-white mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUpload />,
                title: "Upload License",
                desc: "Submit your unused or surplus software licenses securely.",
              },
              {
                icon: <FaSearchDollar />,
                title: "Get Valuation",
                desc: "We assess and provide you a competitive market quote.",
              },
              {
                icon: <FaMoneyCheckAlt />,
                title: "Get Paid",
                desc: "Accept the offer and receive payment quickly and securely.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center text-[#F95738] text-5xl mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#083D77] dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#083D77] dark:text-gray-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16  transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#083D77] dark:text-white mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Secure Transfers",
                desc: "We prioritize safety and compliance in every transaction.",
              },
              {
                icon: <FaBolt />,
                title: "Fast Payouts",
                desc: "Receive payments swiftly with minimal waiting times.",
              },
              {
                icon: <FaThumbsUp />,
                title: "Reliable Support",
                desc: "Our support team is here to guide you every step of the way.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F0F3BD] dark:bg-gray-700 shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center text-[#F95738] text-5xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#083D77] dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#083D77] dark:text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F4D35E] dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#083D77] dark:text-white mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "“SoftSell made it incredibly easy to monetize unused licenses. The process was quick, transparent, and hassle-free!”",
                name: "Sarah Kumar",
                title: "IT Manager, TechHive Inc.",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                text: "“I was amazed at how fast I got paid. SoftSell's team is very responsive and professional. Highly recommended!”",
                name: "James Patel",
                title: "Freelance Developer",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
              >
                <p className="text-[#083D77] dark:text-gray-200 text-lg mb-4">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#F95738]">{t.name}</h4>
                    <p className="text-sm text-[#083D77] dark:text-blue-100">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Hero;
