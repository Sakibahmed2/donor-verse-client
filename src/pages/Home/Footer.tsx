import { InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
              {/* Instagram  */}
              <Link
                to="https://www.instagram.com/sakib_.ahmed/"
                className="text-gray-300 hover:text-white "
                target="_blank"
              >
                <InstagramOutlined />
              </Link>
              {/* LinkedIn  */}
              <Link
                to="https://www.linkedin.com/in/sakib-ahmed-loskor/"
                target="_blank"
                className="text-gray-300 hover:text-white "
              >
                <LinkedinOutlined />
              </Link>
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
