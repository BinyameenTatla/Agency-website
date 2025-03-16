"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "John Doe",
        review: "Absolutely fantastic service! My website is now fast and user-friendly.",
        rating: 5,
        img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Jane Smith",
        review: "The team was super professional and delivered beyond my expectations!",
        rating: 4,
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Alex Johnson",
        review: "Top-notch service and highly responsive team. Highly recommended!",
        rating: 5,
        img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
];

export const Test = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto slide every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 2000); // Changed to 1 second
        return () => clearInterval(interval);
    }, []);

    // Handle swipe gestures
    const handleDragEnd = (event, info) => {
        if (info.offset.x < -100) {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        } else if (info.offset.x > 100) {
            setActiveIndex(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
            );
        }
    };

    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4 overflow-hidden">
            <div className="w-full max-w-3xl">
                {/* Heading */}
                <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-8">
                    ⭐ What Our Clients Say
                </h2>

                {/* Testimonial Card */}
                <motion.div
                    key={activeIndex}
                    className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                >
                    {/* User Profile */}
                    <div className="flex items-center gap-4 mb-6">
                        <motion.img
                            src={testimonials[activeIndex].img}
                            alt={testimonials[activeIndex].name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white">
                                {testimonials[activeIndex].name}
                            </h3>
                            {/* Star Ratings */}
                            <div className="flex mt-1">
                                {[...Array(5)].map((_, index) => (
                                    <motion.span
                                        key={index}
                                        className={`text-lg ${
                                            index < testimonials[activeIndex].rating
                                                ? "text-yellow-400"
                                                : "text-gray-500"
                                        }`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Review */}
                    <p className="text-white/70 text-base leading-relaxed">
                        "{testimonials[activeIndex].review}"
                    </p>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-6 gap-2">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                activeIndex === index
                                    ? "bg-blue-400 scale-125"
                                    : "bg-gray-500"
                            }`}
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.2 }}
                        />
                    ))}
                </div>
            </div>

            {/* Floating Background Animation */}
            <motion.div
                className="absolute top-10 left-10 w-[100px] h-[100px] bg-blue-500 rounded-full opacity-20 blur-2xl"
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
                className="absolute bottom-10 right-10 w-[100px] h-[100px] bg-purple-500 rounded-full opacity-20 blur-2xl"
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
