import { ArrowRight } from "lucide-react";
import TelegramIcon from "@/assets/telegram.svg";
import InstagramIcon from "@/assets/instagram.svg";
import MailIcon from "@/assets/gmail.svg";

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-50 via-white to-[#5d2de6]/12"></div>
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 pt-20 pb-8 sm:px-4 lg:px-6 lg:pt-28">
        <div className="text-center">
          <h2 className="text-black font-Poppins font-medium text-4xl lg:text-6xl tracking-tight">
            Get early access today.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-base lg:text-lg text-gray-600 font-Be-Vietnam-Pro">
            Get behind the scenes updates and be the first to know when we
            launch.
          </p>

          <a href="#waitlist">
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-28">
          <ul className="flex flex-wrap justify-center gap-6 text-sm lg:justify-start">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Cookies
              </a>
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-4 sm:mt-0 lg:justify-end">
            <li>
              <a
                href="https://www.instagram.com/gizigadgets?utm_source=ig_web_button_share_sheet&igsh=OWY1YjJyZ2IyY2py"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
            </li>

            <li>
              <a
                href="https://t.me/gizigadgets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={TelegramIcon}
                  alt="Telegram"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
            </li>

            <li>
              <a
                href="https://gizigadgets@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MailIcon}
                  alt="Gmail"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Gizi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
