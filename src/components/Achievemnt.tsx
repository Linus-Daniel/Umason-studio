"use client";
import { motion } from "framer-motion";
import { LuGlobe as Globe,LuAward as Award,LuUser as Users, LuHouse as Home } from "react-icons/lu";

export default function Stats() {
  const stats = [
    { value: 150, label: "Projects Completed", icon: <Home className="w-6 h-6" /> },
    { value: 28, label: "Industry Awards", icon: <Award className="w-6 h-6" /> },
    { value: 12, label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { value: 50, label: "Team Members", icon: <Users className="w-6 h-6" /> }
  ];

  const counterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1, duration: 1 }
    })
  };

  return (
    <section className="py-16 bg-amber-700 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={counterVariants}
              custom={i}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-white/20">
                  {stat.icon}
                </div>
              </div>
              <motion.p
                className="text-4xl font-light mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {stat.value}+
              </motion.p>
              <p className="text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}