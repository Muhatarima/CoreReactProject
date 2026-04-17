import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[#1F5A50] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="border-b border-white/15 pb-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold">KeenKeeper</h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-white/75">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Social Links</h3>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#1F5A50] flex items-center justify-center hover:scale-105 transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm5.25-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#1F5A50] flex items-center justify-center hover:scale-105 transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7v3h3v8h3.5Z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white text-[#1F5A50] flex items-center justify-center hover:scale-105 transition"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.9L5.9 22H2.8l7.2-8.3L1 2h6.5l4.4 6.2L18.9 2Zm-1.1 18h1.7L6.6 3.9H4.7L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© {year} KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;