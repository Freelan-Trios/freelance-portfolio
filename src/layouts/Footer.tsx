import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-bold text-white">Trios</span>
            </div>
            <div className="mb-4 text-sm">
              We trios - a full-stack developers, freelancers. <br /> Thanks for
              checking out our site!
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white">
                <BsGithub size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <BsLinkedin size={20} />
              </a>
            </div>

            <div className="text-sm text-gray-400 mt-6">© 2024 Trios</div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">General</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white">
                  Project
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Specifics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Guest Book
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Bucket List
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Extra</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Book a call
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
