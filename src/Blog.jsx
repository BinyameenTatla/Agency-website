"use client";

import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "Mastering React.js for Scalable Applications",
        excerpt:
            "Discover how to build scalable and high-performance applications using React.js with the latest best practices.",
        date: "March 14, 2025",
        author: "John Doe",
        image: "r.jpg",
    },
    {
        id: 2,
        title: "SEO Strategies to Boost Organic Traffic",
        excerpt:
            "Learn the key SEO strategies that can help you rank higher on search engines and drive more traffic.",
        date: "March 10, 2025",
        author: "Jane Smith",
        image: "w.png",
    },
    {
        id: 3,
        title: "Why Tailwind CSS is a Game Changer for Developers",
        excerpt:
            "Tailwind CSS provides a highly customizable and modern way to style your applications quickly.",
        date: "March 5, 2025",
        author: "Alex Johnson",
        image: "ee.webp",
    },
];

export const Blog = () => {
    return (
        <section className="min-h-screen bg-gray-950 text-white py-16">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    📝 Latest Insights & News
                </motion.h2>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Image */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-2xl font-semibold mb-3 hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                {/* Excerpt */}
                                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                {/* Metadata */}
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <span>By {post.author}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Animation */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"
                animate={{
                    x: ["0vw", "5vw", "0vw"],
                    y: ["0vh", "-5vh", "0vh"],
                    rotate: [0, 360, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"
                animate={{
                    x: ["0vw", "-5vw", "0vw"],
                    y: ["0vh", "5vh", "0vh"],
                    rotate: [0, -360, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </section>
    );
};
