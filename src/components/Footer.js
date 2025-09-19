import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, url: '#' },
    { name: 'Facebook', icon: <FaFacebook />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'Pinterest', icon: <FaPinterest />, url: '#' }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-white/95 to-gray-50/90 backdrop-blur-sm text-gray-900 py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <img
              src="/images/neoshe.png" // <-- replace with your logo path
              alt="NEOSHE Logo"
              className="h-7 md:h-7 object-contain"
            />
            <br />
            <p className="text-gray-600 mb-6 max-w-md">
              Luxury organic skincare for modern women. Discover the power of 
              natural ingredients in our carefully crafted collection.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-neoshe/10 backdrop-blur-sm border border-neoshe/20 hover:bg-neoshe hover:border-neoshe rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                >
                  <span className="text-lg text-neoshe group-hover:text-white">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#about" className="hover:text-neoshe transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-neoshe transition-colors">Products</a></li>
              <li><a href="#routine" className="hover:text-neoshe transition-colors">Routine</a></li>
              <li><a href="#contact" className="hover:text-neoshe transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-4 text-gray-900">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#shipping" className="hover:text-neoshe transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-neoshe transition-colors">Returns</a></li>
              <li><a href="#faq" className="hover:text-neoshe transition-colors">FAQ</a></li>
              <li><a href="#privacy" className="hover:text-neoshe transition-colors">Privacy</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a 
                  href="mailto:hello@neoshe.com" 
                  className="hover:text-neoshe transition-colors"
                >
                  info@neoshe.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 text-center text-gray-600"
        >
          <p>&copy; 2024 NEOSHE. All rights reserved. Made with ❤️ for beautiful skin.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
