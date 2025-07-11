import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-2">Ramsethu Electrical & Mechanical Solutions Pvt. Ltd.</div>
              <div className="text-gray-400 text-xs mb-2">CIN: U74999JH2016PTC009115</div>
              <div className="text-gray-400 text-sm mb-2 flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                Sijhua, Bariyath, Ichak, Hazaribagh, Jharkhand – 825402
              </div>
              <div className="text-xs text-gray-400 mb-2">Head Office</div>
              <div className="text-xs text-gray-400">&copy; 2024 Ramsethu Electrical & Mechanical Solutions Pvt. Ltd. All rights reserved.</div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/expertise">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Expertise</span>
                  </Link>
                </li>
                <li>
                  <Link to="/landmarks">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</span>
                  </Link>
                </li>
                <li>
                  <Link to="/investors">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Investors</span>
                  </Link>
                </li>
                <li>
                  <Link to="/media">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Media</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/expertise/solar-rooftop">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Solar Rooftop Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/expertise/railway-signalling">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Railway Signalling Systems</span>
                  </Link>
                </li>
                <li>
                  <Link to="/expertise/solar-microgrid">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Solar Microgrid Deployment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/expertise/networking-telecom">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Networking & Telecommunication</span>
                  </Link>
                </li>
                <li>
                  <Link to="/expertise/electrical-grid">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Electrical Grid Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/expertise/installation-maintenance">
                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">High-Quality Installation & Maintenance</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-8340360437</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-9601874348</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-6202464498</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-6207510117</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-8758871045</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" />
                  <a href="mailto:ramsethu.spl@gmail.com" className="underline hover:text-blue-200">ramsethu.spl@gmail.com</a>
                </p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Youtube className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 Ramsethu Construction. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Corporate Governance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
