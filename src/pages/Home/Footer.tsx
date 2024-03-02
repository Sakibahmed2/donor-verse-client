const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">123 Donor Way, City, Country</p>
            <p className="text-gray-300">Email: email@Donorverse.com</p>
            <p className="text-gray-300">Phone: +1 (123) ***-****</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 3a1 1 0 0 1 1 1v2h-2a1 1 0 0 0-1 1v3h3v3h-3v7h-4v-7H8v-3h3V8a1 1 0 0 0-1-1H6V4h2a1 1 0 0 1 1-1h3V1h4v2h3z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.8 6.1c-.7.3-1.5.6-2.4.7a4.1 4.1 0 0 0 1.8-2.3 8.2 8.2 0 0 1-2.6 1-4-4-4-9.9 0-13.9l-.1-.1C15.5.8 8.6.8 4.6 4.7c-.7.7-1.2 1.6-1.4 2.5a12.4 12.4 0 0 0 1.9.2 4.8 4.8 0 0 1-1.6-3.7c.3.2.6.3 1 .3.5 0 1-.2 1.5-.4C2.3 3.5 1.2 2 1.2 2c1.4.8 2.4 2.2 2.8 3.7-1-.1-1.9-.5-2.8-1C2.4 5.5 3.2 7 4.5 7c-.8-.1-1.5-.4-2.2-.8v.1c0 1.9 1.3 3.5 3 3.9-.6.2-1.3.2-2 .1.6 1.6 2.2 2.8 4.1 2.9a8.4 8.4 0 0 1-5.9 1.5c1.7 1.1 3.7 1.7 5.8 1.7 7 0 10.8-5.8 10.8-10.8 0-.2 0-.4 0-.6a7.6 7.6 0 0 0 1.9-2 7.5 7.5 0 0 1-2.2.6c.7-1 1.2-2.2 1.5-3.5z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V3zm2.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM7 17h2V9H7v8zm4 0h2v-3.5c0-.8.6-1.5 1.5-1.5s1.5.7 1.5 1.5V17h2v-4.7c0-1.7-1.3-3-3-3s-3 1.3-3 3V17zm6-8h-2v2h2V9z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support & Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Donate Now
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Volunteer Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates on events, campaigns, and
              more.
            </p>
            <form className="mt-4">
              <div className="flex flex-col">
                <input
                  type="email"
                  className="py-2 px-4 rounded-lg bg-gray-800 text-white"
                  placeholder="Enter your email address"
                />
                <button type="submit" className="mt-2 custom-btn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-400 text-center">
            © 2050 Donor verse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
