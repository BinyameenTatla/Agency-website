"use client";
import { motion } from "framer-motion";

export const Services = () => {
    const services = [
        {
            title: "Custom Web Development",
            description: "Build tailored websites designed to meet unique business needs and drive growth.",
            icon: "🌐",
        },
        {
            title: "Responsive Design",
            description: "Create pixel-perfect designs that work flawlessly across all devices and screen sizes.",
            icon: "📱",
        },
        {
            title: "Performance Optimization",
            description: "Enhance loading speed, interactivity, and overall user experience.",
            icon: "⚡",
        },
        {
            title: "SEO Integration",
            description: "Implement cutting-edge SEO strategies to improve search engine rankings and visibility.",
            icon: "🚀",
        },
        {
            title: "E-Commerce Solutions",
            description: "Develop scalable e-commerce platforms that maximize sales and customer engagement.",
            icon: "🛒",
        },
        {
            title: "API Integration",
            description: "Seamlessly connect your website with third-party services and tools.",
            icon: "🔗",
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-[#f4f6f8] to-[#e0e4e7] py-24 px-6 md:px-12 overflow-hidden">
            {/* Background Animations */}
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 animate-pulse blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-400 rounded-full opacity-30 animate-pulse blur-3xl"></div>

            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Our Professional Services
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                    We provide cutting-edge solutions that empower businesses to thrive in the digital landscape.  
                    Experience unmatched quality and performance.
                </p>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative group bg-white/80 border border-gray-200 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-105 overflow-hidden backdrop-blur-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                        >
                            {/* Icon */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:h-2 transition-all duration-300"></div>
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-6 shadow-lg">
                                <span className="text-3xl">{service.icon}</span>
                            </div>
                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
                {/* <a
                    href="#"
                    className="inline-block bg-blue-600 text-white py-3 px-10 rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
                >
                    Get Started
                </a> */}
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                }
            `}</style>
        </section>
    );
};
