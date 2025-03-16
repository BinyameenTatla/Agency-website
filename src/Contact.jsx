"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6">
            <motion.div
                className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Heading */}
                <motion.h2
                    className="text-3xl font-bold text-white text-center mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    ✉️ Get in Touch
                </motion.h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                        <motion.input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="peer w-full bg-transparent border-b border-white/30 text-white outline-none py-3 px-2 focus:border-blue-500 transition duration-300"
                            required
                            placeholder=" "
                            whileFocus={{ scale: 1.02 }}
                        />
                        <label
                            className={`absolute left-2 top-3 text-white/50 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-[-10px] peer-focus:text-blue-400`}
                        >
                            Your Name
                        </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <motion.input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full bg-transparent border-b border-white/30 text-white outline-none py-3 px-2 focus:border-blue-500 transition duration-300"
                            required
                            placeholder=" "
                            whileFocus={{ scale: 1.02 }}
                        />
                        <label
                            className={`absolute left-2 top-3 text-white/50 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-[-10px] peer-focus:text-blue-400`}
                        >
                            Your Email
                        </label>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                        <motion.textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="peer w-full bg-transparent border-b border-white/30 text-white outline-none py-3 px-2 focus:border-blue-500 transition duration-300 resize-none"
                            required
                            placeholder=" "
                            whileFocus={{ scale: 1.02 }}
                        />
                        <label
                            className={`absolute left-2 top-3 text-white/50 text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-[-10px] peer-focus:text-blue-400`}
                        >
                            Your Message
                        </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-xl shadow-lg hover:bg-blue-400 active:scale-95 transition duration-300"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#3B82F6",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🚀 Send Message
                    </motion.button>
                </form>
            </motion.div>

            {/* Background Effects */}
            <motion.div
                className="absolute top-20 left-10 w-[150px] h-[150px] bg-blue-500 rounded-full opacity-30 blur-3xl"
                animate={{
                    x: ["0vw", "5vw", "0vw"],
                    y: ["0vh", "-5vh", "0vh"],
                    rotate: [0, 360, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-[150px] h-[150px] bg-purple-500 rounded-full opacity-30 blur-3xl"
                animate={{
                    x: ["0vw", "-5vw", "0vw"],
                    y: ["0vh", "5vh", "0vh"],
                    rotate: [0, -360, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </section>
    );
};
