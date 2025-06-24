import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About company
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Privacy & policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Cookie policy
                </Link>
              </li>
              <li>
                <Link href="/down-status" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Down Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-primary-400 transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Help centre
                </Link>
              </li>
              <li>
                <Link href="/mobile-app" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Mobile app
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Admin Access */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Admin</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admin-login" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Admin Login
                </Link>
              </li>
              <li>
                <Link href="/admin-dashboard" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest articles and insights about sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400"
              />
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold">Agrob</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2024 Agrob. All rights reserved. | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}