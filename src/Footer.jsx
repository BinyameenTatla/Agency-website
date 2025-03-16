"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Logo and Description */}
                    <div>
                        <motion.h2
                            className="text-3xl font-bold text-gray-900 mb-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            YourAgency
                        </motion.h2>
                        <p className="text-gray-500">
                            Building innovative and scalable solutions for modern businesses.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "Services", "About", "Portfolio", "Contact"].map((link) => (
                                <motion.li
                                    key={link}
                                    className="hover:text-blue-500 transition-colors cursor-pointer"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {link}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {[
                                { id: 1, icon: <FaFacebookF />, link: "#" },
                                { id: 2, icon: <FaTwitter />, link: "#" },
                                { id: 3, icon: <FaLinkedinIn />, link: "#" },
                                { id: 4, icon: <FaInstagram />, link: "#" },
                            ].map((social) => (
                                <motion.a
                                    key={social.id}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} YourAgency. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
