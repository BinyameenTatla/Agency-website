export const Abouts = () => {
    return (
        <>
            <section className="relative bg-gradient-to-br from-[#f4f6f8] to-[#e0e4e7] py-24 px-6 md:px-12 overflow-hidden">
                {/* Background Circles */}
                <div className="absolute top-12 left-12 w-56 h-56 sm:w-28 sm:h-28 md:w-56 md:h-56 bg-blue-500 rounded-full opacity-20 animate-rotate-slow blur-3xl"></div>
                <div className="absolute bottom-12 right-12 w-64 h-64 sm:w-32 sm:h-32 md:w-64 md:h-64 bg-purple-400 rounded-full opacity-25 animate-rotate-slow-reverse blur-3xl"></div>
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-24 sm:h-24 md:w-48 md:h-48 bg-pink-400 rounded-full opacity-15 animate-pulse"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        About Our Agency
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                        Welcome to <span className="font-semibold text-blue-500">NextGen Solutions</span> — where creativity meets innovation.  
                        We are a team of passionate developers, designers, and strategists dedicated to helping businesses succeed 
                        in the digital landscape. Our goal is to craft websites that not only look great but also deliver exceptional performance.
                    </p>

                    {/* Glassmorphism Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Vision */}
                        <div className="backdrop-blur-lg bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become a global leader in web development by delivering innovative solutions that empower businesses.
Build cutting-edge websites that drive growth and engagement.
Empower brands through innovative design and development.
Set the standard for excellence in web solutions.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="backdrop-blur-lg bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                            Deliver high-performance websites that exceed expectations.
Empower businesses with innovative digital solutions.
Create seamless user experiences that drive engagement.

Our mission is to build fast, beautiful, and scalable websites.

Create lasting value through expert design and development.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="backdrop-blur-lg bg-white/80 border border-gray-200 shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
                            <ul className="text-gray-600 list-disc list-inside space-y-2">
                                <li><span className="font-medium">Innovation:</span> Constantly exploring new ideas and technologies.</li>
                                <li><span className="font-medium">Integrity:</span> Transparent and honest communication with clients.</li>
                                <li><span className="font-medium">Client-Centric:</span> Focused on delivering measurable value.</li>
                                <li><span className="font-medium">Excellence:</span> Commitment to delivering high-quality work every time.</li>
                            </ul>
                        </div>
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

                {/* Custom Animations */}
                <style jsx>{`
                    @keyframes rotate-slow {
                        from {
                            transform: rotate(0deg) translate(0px, 0px);
                        }
                        to {
                            transform: rotate(360deg) translate(20px, 20px);
                        }
                    }
                    @keyframes rotate-slow-reverse {
                        from {
                            transform: rotate(0deg) translate(0px, 0px);
                        }
                        to {
                            transform: rotate(-360deg) translate(-20px, -20px);
                        }
                    }
                    @keyframes pulse {
                        0% {
                            transform: scale(1);
                            opacity: 0.5;
                        }
                        50% {
                            transform: scale(1.15);
                            opacity: 0.9;
                        }
                        100% {
                            transform: scale(1);
                            opacity: 0.5;
                        }
                    }
                    .animate-rotate-slow {
                        animation: rotate-slow 14s linear infinite;
                    }
                    .animate-rotate-slow-reverse {
                        animation: rotate-slow-reverse 16s linear infinite;
                    }
                    .animate-pulse {
                        animation: pulse 10s ease-in-out infinite;
                    }
                `}</style>
            </section>
        </>
    );
};
