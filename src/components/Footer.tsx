"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuMail as Mail,LuMapPin as MapPin, LuPhone as  Phone } from "react-icons/lu";

export default function Footer() {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Residential Design", href: "#" },
        { name: "Commercial Architecture", href: "#" },
        { name: "Urban Planning", href: "#" },
        { name: "Interior Design", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Projects", href: "#work" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" }
      ]
    }
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: "Via Archimede 42, Milan, Italy" },
    { icon: <Phone className="w-5 h-5" />, text: "+39 02 1234 5678" },
    { icon: <Mail className="w-5 h-5" />, text: "studio@rossi-architecture.com" }
  ];

  return (
    <footer className="bg-stone-900 text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-light mb-6">UMASON STUDIO</h3>
            <p className="text-stone-400 mb-6">
              Creating meaningful spaces that inspire and endure through innovative architectural design.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                  aria-label={social}
                >
                  {social}
                </Link>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
            >
              <h4 className="text-lg font-medium mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-amber-400 mt-0.5">{item.icon}</span>
                  <span className="text-stone-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Umason Architecture. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}