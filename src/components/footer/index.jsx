import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer id='contact-us' className="bg-[#2A3493] py-12 text-gray-300 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        
        {/* Logo & About */}
        <div>
          <div className="bg-white w-24 rounded-xl flex items-center justify-center mb-3 shadow">
            <img src={logo} alt="Travel With Ted Logo" className="h-10" />
          </div>
          <p className="text-sm text-gray-200 leading-snug max-w-xs">
            Travel with Ted … Guiding students into their global future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-base">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/#about' },
              { label: 'Our Services', href: '/services' },
              { label: 'Contact', href: '/contact-us' },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-[#0792FB] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-base">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium text-gray-100">Call:</span>{' '}
              <a href="tel:01626122793" className="hover:underline text-gray-200">
                0162 6122793
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-100">Email:</span>{' '}
              <a
                href="mailto:travelwithtedok@outlook.com"
                className="hover:underline text-gray-200 break-all"
              >
                travelwithtedok@outlook.com
              </a>
            </li>
          </ul>
          <a
            href="mailto:travelwithtedok@outlook.com"
            className="inline-block mt-4 bg-[#0792FB] hover:bg-[#0575c0] text-white text-sm font-medium py-2.5 px-6 rounded-full shadow transition-colors duration-200"
          >
            Send Email
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-500/40 pt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Travel with Ted. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
