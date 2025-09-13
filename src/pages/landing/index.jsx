import Navbar from "../../components/navbar"
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import hero from "./../../assets/images/hero.jpg";
import graduate from "./../../assets/images/graduate.jpg";
import student from "./../../assets/images/student.jpg";
import school from "./../../assets/images/school.jpg";
import lady from "./../../assets/images/lady.jpg";
import passport from "./../../assets/images/passport.jpg";
import man from "./../../assets/images/man.jpg";
import university from "./../../assets/images/university.jpg";
import document from "./../../assets/images/document.jpg";
import { Plane, TrendingUp, ShieldCheck, Lightbulb, GraduationCap, Book, FileCheck } from "lucide-react";
import { Target, Globe2, CheckCircle } from 'lucide-react';
import Footer from "../../components/footer";

const Landing = () => {

    const features = [
        {
            title: "Standards",
            description:
                "We adhere to the highest professional standards in student visa consulting and travel services.",
            icon: Plane,
        },
        {
            title: "Performance",
            description:
                "We measure success not just by approvals, but by students' smooth transitions and academic achievements abroad.",
            icon: TrendingUp,
        },
        {
            title: "Integrity",
            description:
                "We never make unrealistic promises and always prioritize students' best interests over short-term profits.",
            icon: ShieldCheck,
        },
        {
            title: "Innovation",
            description:
                "We embrace innovative ideas and methods to continually improve our student visa services.",
            icon: Lightbulb,
        },
    ];
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div id="home" className="relative w-full h-screen mt-20">
                {/* Background Image */}
                <img
                    src={graduate}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center z-10"
                >
                    <motion.h3
                        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        ...Guiding students into their global future
                    </motion.h3>
                    <motion.h4
                        className="text-white text-base sm:text-lg md:text-2xl font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Expert Visa & Admission Support for Students Ready to Study Abroad.
                    </motion.h4>

                    <ScrollLink
                        to="contact-us" 
                        smooth={true}
                        duration={800}
                        offset={-40} 
                    >
                        <motion.button
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-[#0792FB] rounded-3xl text-white font-semibold px-6 py-3 mt-6 shadow-xl hover:scale-110"
                        >
                            Talk to a Consultant
                        </motion.button>
                    </ScrollLink>
                </motion.div>
            </div>

            <section id="about-us" className="bg-white py-16 px-4">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    {/* Left content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-orange-500 font-semibold mb-2 uppercase">About Us</h3>
                        <h2 className="text-[#2A3493] text-3xl md:text-4xl font-bold leading-snug mb-4">
                            Travel with Ted <br className="hidden md:inline" />

                        </h2>
                        <p className="text-gray-600 mb-4">
                            We are a travel consulting company founded by a team of experienced travel professionals and former international students, our travel consulting agency was born from a simple observation: too many bright, ambitious students were struggling to navigate the complex world of international education due to visa complications and inadequate guidance.
                        </p>
                        <p className="text-gray-600 mb-6">
                            We witnessed countless talented individuals missing opportunities due to visa rejections, incomplete applications, and lack of proper guidance. This drove us to specialize exclusively in student visa applications and educational travel services.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                            Read more
                        </button>
                    </div>

                    {/* Right images */}
                    <div className="flex-1 flex gap-4">
                        <div className="flex-1">
                            <img
                                src={student}
                                alt="Beach with plane"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <img
                                src={school}
                                alt="Jet ski in ocean"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white bg-center">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2A3493] mb-12">Our Values</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center group hover:shadow-xl transition">
                                    <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4 shadow-md group-hover:scale-110 transition">
                                        <IconComponent className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl text-[#2A3493] font-semibold mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-orange-50 py-20 px-4">
                <div className="max-w-screen-xl mx-auto text-center">
                    {/* Mission */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 leading-tight">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
                        Empowering dreams through education abroad: We guide ambitious students on their journey to top European institutions, seamlessly blending expert visa assistance with unforgettable travel experiences. Our mission is to open doors to global opportunities, fostering cultural exchange and academic excellence.
                    </p>
                    {/* Vision */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6 leading-tight">
                        Our Vision
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-base sm:text-lg md:text-xl leading-relaxed">
                        Our vision is to become the foremost and sustainable travel consulting agency recognized for its expertise, reliability and exceptional customer service.
                    </p>
                </div>
            </section>


            <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8 mt-14 mb-14 py-10">
                {/* Left images */}
                <div className="">
                    <div className="">
                        <img
                            src={lady}
                            alt="Beach with plane"
                            className="rounded-lg w-96 h-full object-cover"
                        />
                    </div>
                </div>


                {/* Right content */}
                <div className="flex-1 text-center lg:text-left mx-6">
                    <h3 className="text-orange-500 font-semibold mb-2 uppercase">Why Work With Us</h3>
                    <h2 className=" text-[#2A3493] text-3xl md:text-4xl font-bold leading-snug mb-4">
                        Your Future, Simplified <br className="hidden md:inline" />
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We turn the complex student visa process into a clear, step-by-step journey to your dream university.
                        While others see paperwork, we see your future — and we have the expertise and proven track record to make it happen.
                    </p>
                </div>
            </section>


            <section id="our-services"
                className="relative py-28 px-4 bg-cover bg-center text-white mt-14"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Services </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="relative">
                                <img src={passport} alt="Visa Assistance" className="w-full h-52 object-cover" />
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow">
                                    <Plane className="text-orange-500 w-8 h-8" />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-3">Visa & Documentation</h3>
                                <p className="text-gray-600 text-sm">
                                    Passport applications, visa processing, travel document verification, and guidance on entry requirements for various countries.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="relative">
                                <img src={man} alt="Educational Travel" className="w-full h-52 object-cover" />
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow">
                                    <GraduationCap className="text-orange-500 w-8 h-8" />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-3">Educational Travel</h3>
                                <p className="text-gray-600 text-sm">
                                    Study abroad programs, student visa applications, university partnerships, and academic exchange coordination.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="relative">
                                <img src={university} alt="University Support" className="w-full h-52 object-cover" />
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow">
                                    <Book className="text-orange-500 w-8 h-8" />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-3">University Admission</h3>
                                <p className="text-gray-600 text-sm">
                                    Application assistance for universities, course selection guidance, scholarship identification, and admission support.
                                </p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="relative">
                                <img src={document} alt="Document Verification" className="w-full h-52 object-cover" />
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow">
                                    <FileCheck className="text-orange-500 w-8 h-8" />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-3">Document Authentication</h3>
                                <p className="text-gray-600 text-sm">
                                    Apostille services, document translation, certificate verification, and ensuring academic credentials meet destination country requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Landing