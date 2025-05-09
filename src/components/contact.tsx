// components/Contact.tsx
'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [activeField, setActiveField] = useState<string | null>(null)
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [controls])

  return (
    <motion.section 
      ref={ref}
      className="min-h-screen flex items-center justify-center p-10 bg-gradient-to-br from-stone-900 to-stone-800"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      <div className="max-w-2xl w-full">
        <motion.div 
          className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.8, ease: "backOut" }
            }
          }}
        >
          <div className="p-12">
            <motion.h2 
              className="text-4xl font-light mb-12 text-white"
              variants={{
                hidden: { x: -30, opacity: 0 },
                visible: { 
                  x: 0, 
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.6 }
                }
              }}
            >
              Let's <span className="text-amber-400">collaborate</span>
            </motion.h2>

            <form className="space-y-8">
              {['Name', 'Email', 'Message'].map((label, i) => (
                <motion.div
                  key={label}
                  className="relative"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.3 + i * 0.1 }
                    }
                  }}
                >
                  <input
                    id={label.toLowerCase()}
                    type={label === 'Email' ? 'email' : 'text'}
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-6 text-white focus:border-amber-400 focus:ring-0 peer"
                    onFocus={() => setActiveField(label.toLowerCase())}
                    onBlur={() => setActiveField(null)}
                  />
                  <label
                    htmlFor={label.toLowerCase()}
                    className={`absolute left-0 transition-all duration-300 ${
                      activeField === label.toLowerCase() || label === 'Message'
                        ? 'text-xs top-1 text-amber-400'
                        : 'top-6 text-white/70 peer-focus:text-xs peer-focus:top-1 peer-focus:text-amber-400'
                    }`}
                  >
                    {label}
                  </label>
                </motion.div>
              ))}

              <motion.button
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6 }
                  }
                }}
              >
                <span className="relative z-10">Send Enquiry</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}