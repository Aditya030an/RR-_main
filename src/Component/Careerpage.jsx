

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const jobCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Careerpage = () => {
  const jobs = [
    {
      title: "Real Estate Consultant",
      type: "Full-time / Part-time",
      location: "[City Name]",
      exp: "0–3 years",
      duties: "Assist clients in discovering suitable properties, facilitate site viewing, and oversee negotiations."
    },
    {
      title: "Digital Marketing Executive",
      type: "Hybrid",
      location: "Hybrid",
      exp: "1–4 years",
      duties: "Execute social media campaigns, oversee listings, and create engaging online brand presence."
    },
    {
      title: "Sales Associate – Property Sales",
      type: "On-Site",
      location: "On-Site",
      exp: "1+ years",
      duties: "Oversee end-to-end client interactions, from lead conversion to property closure."
    },
    {
      title: "Telecalling Executive (Lead Generation)",
      type: "Remote / On-Site",
      location: "Remote / On-Site",
      exp: "0–2 years",
      duties: "Call on prospective clients, fix appointments, and follow up on property leads."
    },
  ];

  return (
    <div className="bg-white text-[#0e2338] min-h-screen font-sans">
      {/* Hero */}
      <div className="w-full h-[65vh] bg-gradient-to-br from-[#0e2338] to-[#1c3c59] flex items-center justify-center text-white text-center px-6 shadow-inner">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Career at Roots and Roofs
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Become a part of a team that’s constructing dreams — roof by roof.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            At Roots and Roofs, we don’t just trade in properties — we help people find homes, secure investments, and build a brighter tomorrow. As one of the most reliable real estate consultancy companies, we are always looking for driven, curious, and passionate people.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed text-gray-700 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Whether you're experienced or starting out, we offer a culture of growth, collaboration, and purpose. Join something bigger than just a job.
          </motion.p>
        </motion.div>

        {/* Why Work With Us */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#0e2338]">Why Work With Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
            <li className="bg-gray-50 p-5 rounded-xl shadow-md border border-gray-100">
              <strong>Growth-Oriented Culture:</strong> Career advancement through continuous learning.
            </li>
            <li className="bg-gray-50 p-5 rounded-xl shadow-md border border-gray-100">
              <strong>Client-First Approach:</strong> Help people make the most important decisions of their lives.
            </li>
            <li className="bg-gray-50 p-5 rounded-xl shadow-md border border-gray-100">
              <strong>Innovative & Tech-Savvy:</strong> We lead with tools, data, and creativity.
            </li>
            <li className="bg-gray-50 p-5 rounded-xl shadow-md border border-gray-100">
              <strong>Collaborative Environment:</strong> Team wins, shared success, open communication.
            </li>
          </ul>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#0e2338]">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl shadow-lg border border-gray-200 backdrop-blur-md bg-white/70 hover:shadow-xl transition"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={jobCardVariants}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-1 text-[#0e2338]">{job.title}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {job.type} • {job.location} • Experience: {job.exp}
                </p>
                <p className="text-gray-700">{job.duties}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-lg text-gray-700">
            <strong>Not the right role?</strong> Email us at{" "}
            <a
              href="mailto:careers@rootsandroofs.in"
              className="text-orange-600 underline hover:text-orange-800 transition"
            >
              careers@rootsandroofs.in
            </a>{" "}
            with your resume and a short note.
          </p>
        </div>

        {/* Perks */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#0e2338]">Perks & Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700">
            <li>🎯 Performance-based incentives</li>
            <li>🎓 Ongoing mentorship & training</li>
            <li>🕒 Flexible work hours (select roles)</li>
            <li>🌍 Diverse, inclusive team culture</li>
            <li>🤝 Real estate expo & networking invites</li>
          </ul>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#0e2338]">Grow with Roots and Roofs.</h3>
          <p className="text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            We’re not just a team — we’re a family with a vision. If you’re ready to grow, learn, and create impact — we want you with us.
          </p>
          <a
            href="mailto:careers@rootsandroofs.in"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition font-medium shadow-md"
          >
            Apply Now <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Careerpage;