import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">FreelanTrios</h2>
            <p className="text-sm mb-4">
              Blending creativity and code, we craft digital experiences that
              leave a mark. <br />
              Got an idea? Let’s make it real together.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="/" aria-label="GitHub" className="hover:text-white">
                <BsGithub size={20} />
              </a>
              <a href="/" aria-label="LinkedIn" className="hover:text-white">
                <BsLinkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">© 2024 FreelanTrios</p>
          </div>

          {/* General Links */}
          <FooterSection title="General">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/blogs">Blog</FooterLink>
          </FooterSection>

          {/* Specifics */}
          <FooterSection title="Specifics">
            <FooterAnchor href="/">Guest Book</FooterAnchor>
            <FooterAnchor href="/">Bucket List</FooterAnchor>
          </FooterSection>

          {/* Extras */}
          <FooterSection title="Extra">
            <FooterAnchor href="/">Book a Call</FooterAnchor>
            <FooterAnchor href="/">Links</FooterAnchor>
          </FooterSection>
        </div>
      </div>
    </footer>
  );
}

const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
};

const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link to={to} className="hover:text-white">
        {children}
      </Link>
    </li>
  );
};

const FooterAnchor = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <a href={href} className="hover:text-white">
        {children}
      </a>
    </li>
  );
};
