"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Azure Heights",
    type: "Skyscraper",
    year: "2024",
    color: "#06b6d4",
    image: "/images/project1.jpg", // Add image paths
    location: "New York, USA",
  },
  {
    id: 2,
    title: "Villa Kora",
    type: "Residential",
    year: "2023",
    color: "#f59e0b",
    image: "/images/project2.jpg",
    location: "Santorini, Greece",
  },
  {
    id: 3,
    title: "The Glass Canopy",
    type: "Public Space",
    year: "2022",
    color: "#10b981",
    image: "/images/project3.jpg",
    location: "Singapore",
  },
  {
    id: 4,
    title: "Marble Atrium",
    type: "Commercial",
    year: "2021",
    color: "#8b5cf6",
    image: "/images/project4.jpg",
    location: "Milan, Italy",
  },
];

function MagneticCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const gradientOpacity = useTransform(y, [-100, 100], [0.1, 0.4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    animate(x, 0, { duration: 0.5 });
    animate(y, 0, { duration: 0.5 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="aspect-square rounded-2xl overflow-hidden relative cursor-pointer group"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Color Overlay */}
      <motion.div
        className="absolute inset-0 mix-blend-multiply"
        style={{ backgroundColor: project.color, opacity: 0.3 }}
        whileHover={{ opacity: 0.2 }}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"
        style={{ opacity: gradientOpacity }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="text-white space-y-1"
        >
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-medium">{project.title}</h3>
              <p className="text-sm opacity-80">
                {project.type} • {project.year}
              </p>
            </div>
            <motion.p 
              className="text-xs opacity-60"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
            >
              {project.location}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-10 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-2">
            Built Manifestos
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Architectural statements that redefine spaces and experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project) => (
            <MagneticCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href={"/work"} className="px-8 py-3 border border-stone-300 rounded-full text-stone-700 hover:bg-stone-100 transition-colors">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}