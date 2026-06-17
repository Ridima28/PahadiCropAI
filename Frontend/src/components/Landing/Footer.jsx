import React from 'react';
import { Leaf, MessageCircle, Globe, Mail, Send } from 'lucide-react';
import logo from '../../assets/logo.png';

const footerLinks = {
  Product: ['Chat with AI', 'Features', 'How It Works', 'Pricing'],
  Resources: ['Documentation', 'API Reference', 'Blog', 'Community'],
  Contact: ['Email Us', 'Feedback', 'Report Issue', 'Join Collective'],
};

const socialIcons = [Send, MessageCircle, Mail, Globe];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-50 dark:bg-gray-900/10 border-t border-gray-100 dark:border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="PahadiCrop Logo" className="h-14 w-auto"/>            

              <div>
                <span className="font-heading font-bold text-base text-foreground">PahadiCrop</span>
                
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mb-5 leading-relaxed">
              AI-powered agricultural advisory for Uttarakhand&apos;s mountain farmers. Built by
              Mandakini Organic Produce Collective.
            </p>

            <div className="flex items-center gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Social link ${i + 1}`}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-emerald-600 hover:border-emerald-300 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 dark:text-gray-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2025 Mandakini Organic Produce Collective. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 bg-amber-500/5 px-3 py-1.5 rounded-full border border-amber-500/10">
            ⚠ Responsible AI Notice: All advice should be verified with agricultural experts.
          </p>
        </div>
      </div>
    </footer>
  );
}