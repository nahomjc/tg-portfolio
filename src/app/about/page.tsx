"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="mt-12 min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-pink-950/20 overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero Section with Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col md:flex-row items-center gap-10 mb-16"
        >
          {/* Main Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-visible flex-shrink-0">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200 dark:border-pink-500 bg-white/40 dark:bg-pink-900/30 backdrop-blur-lg">
              <img
                src="/personla-image/1747396061958.jpg"
                alt="Tigist Fiseha profile"
                className="w-full h-full object-cover object-center rounded-3xl"
              />
            </div>
            {/* Accent Image - Overlapping Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 40, y: -40, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, x: 24, y: -32, rotate: 8 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 60 }}
              className="absolute -top-8 right-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-pink-100 dark:border-pink-400 bg-white/60 dark:bg-pink-900/40 backdrop-blur-md z-10"
              style={{ boxShadow: "0 8px 32px 0 rgba(236,72,153,0.15)" }}
            >
              <img
                src="/personla-image/1747730100486.jpg"
                alt="Tigist Fiseha at work"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </motion.div>
          </div>
          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-fuchsia-500 to-pink-400 dark:from-pink-400 dark:to-pink-300 drop-shadow-[0_2px_24px_rgba(236,72,153,0.25)]"
            >
              Who am I?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4"
            >
              A multidisciplinary content creator passionate about storytelling,
              research, and digital education.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-pink-600 dark:text-pink-400 font-medium mb-4"
            >
              Based in Addis Ababa, Ethiopia
            </motion.p>
          </div>
        </motion.div>

        {/* Info Cards Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Expertise Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl border-2 border-pink-100 dark:border-pink-900/40 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-400">
              Areas of Expertise
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📝</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Script Writing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Crafting compelling narratives for various media platforms,
                    focusing on engaging storytelling and audience connection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    E-learning Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creating interactive and engaging educational content that
                    makes learning accessible and enjoyable.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎙️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Podcasting
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Producing and hosting engaging podcast content that informs,
                    entertains, and connects with audiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl border-2 border-pink-100 dark:border-pink-900/40 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-400">
              Notable Achievements
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏆</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Educational Impact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developed e-learning content reaching over 10,000 students,
                    improving learning outcomes by 40%.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Podcast Success
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Grew podcast audience to 50,000+ monthly listeners, becoming
                    one of Ethiopia&apos;s top educational podcasts.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌟</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Industry Recognition
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Received multiple awards for outstanding contributions to
                    digital education and content creation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300"
        >
          My Journey
        </motion.h2>
        <div className="relative border-l-4 border-pink-200 dark:border-pink-900/40 ml-4">
          {[
            {
              year: "2024",
              title: "Lead E-learning Content Developer",
              org: "Muyalogy",
              desc: "Developed engaging digital education content for diverse audiences.",
            },
            {
              year: "2022",
              title: "Script Writer & Journalist",
              org: "Ewqet.org & Hamer Media",
              desc: "Crafted compelling scripts and delivered impactful news stories.",
            },
            {
              year: "2020",
              title: "Podcast Host & Producer",
              org: "Keyezerfu Podcast",
              desc: "Launched and produced a successful podcast series.",
            },
            {
              year: "2018",
              title: "BA in Journalism",
              org: "Addis Ababa University",
              desc: "Graduated with honors in Journalism and Communication.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="mb-10 ml-6 relative"
            >
              <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-400 border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white font-bold text-sm">
                {item.year}
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-pink-100 dark:border-pink-900/40 backdrop-blur-xl p-6">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-1">
                  {item.title}
                </h3>
                <div className="text-pink-500 dark:text-pink-300 font-semibold mb-2">
                  {item.org}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300"
        >
          My Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { skill: "Script Writing", level: 95 },
            { skill: "Journalism", level: 90 },
            { skill: "E-learning Development", level: 92 },
            { skill: "Podcasting", level: 88 },
            { skill: "Content Strategy", level: 85 },
          ].map((item, idx) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  {item.skill}
                </span>
                <span className="font-semibold text-gray-500 dark:text-gray-300">
                  {item.level}%
                </span>
              </div>
              <div className="w-full h-4 bg-pink-100 dark:bg-pink-900/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1 * idx }}
                  className="h-full bg-gradient-to-r from-pink-500 to-fuchsia-400 rounded-full shadow"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
