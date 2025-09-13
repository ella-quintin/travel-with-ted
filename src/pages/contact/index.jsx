import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect} from "react";
import {
    Phone,
    MapPin,
    Clock,
    Mail
} from "lucide-react"; // Lucide icons
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 },
    }),
};



const ContactUs = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
     // Handle scroll events to toggle button visibility
        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 200) {
                    setShowScrollButton(true);
                } else {
                    setShowScrollButton(false);
                }
            };
            window.addEventListener("scroll", handleScroll);
    
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
        // Scroll to top logic
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

  

    const contactItems = [
        {
            icon: <Phone size={28} className="text-[#099AB3] mx-auto mb-2" />,
            title: "Phone",
            content: "+233-302905659 | +233-243380612",
        },
        {
            icon: <MapPin size={28} className="text-[#099AB3] mx-auto mb-2" />,
            title: "Address",
            content: "4 Naa Botwey Street, Mabey, Haatso , Accra, Ghana",
        },
        {
            icon: <Clock size={28} className="text-[#099AB3] mx-auto mb-2" />,
            title: "Open Time",
            content: "9:00 am to 5:00 pm",
        },
        {
            icon: <Mail size={28} className="text-[#099AB3] mx-auto mb-2" />,
            title: "Email",
            content: "info@aibconsulting.biz",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 pb-36">
                {/* Banner */}
                <div
                    className="relative h-80 bg-cover bg-center flex items-center justify-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1588854337118-1eaabed0a10f')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#183C58] to-[#099AB3] bg-opacity-40" />
                    <h1 className="relative text-white text-4xl md:text-4xl mt-10 font-bold z-10">Contact Us</h1>
                </div>

                {/* Cards */}
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 -mt-16 relative z-10 bg-white rounded-lg shadow-lg py-10">
                    {contactItems.map((item, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            {item.icon}
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-600 mt-1">{item.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Map */}
                <div className="mt-10 px-4 max-w-6xl mx-auto">
                    <motion.iframe
                        className="w-full h-96 rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2572788020293!2d-0.2044089254651427!3d5.67589893243331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c46381efe3f%3A0x277ee275bff66dca!2sMabey%20St%2C%20Haatso!5e0!3m2!1sen!2sgh!4v1745940621215!5m2!1sen!2sgh" 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    />
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-[#099AB3] text-white p-4 rounded-full shadow-lg hover:bg-[#077f91] focus:outline-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                >
                    ↑
                </motion.button>
            )}

            <Footer />
        </>
    );
};

export default ContactUs;
