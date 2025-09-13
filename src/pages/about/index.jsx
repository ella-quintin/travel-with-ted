import { motion } from "framer-motion";
import hero from "./../../assets/images/hero.jpg";
import Navbar from "../../components/navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="mb-20">
                {/* About Us Section */}
                <motion.div
                    className="relative w-full h-64 mt-16 bg-cover bg-center"
                    style={{ backgroundImage: `url(${hero})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <motion.h3
                            className="text-white text-4xl font-bold"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Who We Are
                        </motion.h3>
                    </div>
                </motion.div>

                {/* Welcome Section */}
                <motion.div
                    className="container mx-auto mt-12 py-16 px-6 lg:px-8 max-w-screen-lg grid lg:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                            Inspired by God; Driven by Purpose
                        </h2>
                        <motion.div
                            className="w-24 h-1 bg-[#1D6205] mb-6"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Pleroma Sycamore Foundation is a divine inspiration, established to enforce God’s will on earth through impactful partnerships and spirit-filled initiatives.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We are committed to creating opportunities for worship, empowerment, and positive transformation.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Our objectives include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 leading-relaxed sm:text-md mb-6">
                            <motion.li
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Supporting Christian missions, ministries, and outreaches focused on propagating the Word of God.
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Providing social interventions for the aged, youth and children.
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Supporting Christian leadership and entrepreneurship development.
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Mitigate accommodation challenges through social housing.
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={hero}
                            alt="Child with a guitar"
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </motion.div>

                {/* Mission and Vision */}
                <div className="max-w-screen-xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
                    {/* Mission */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <Target className="text-orange-500 w-8 h-8" />
                            <h4 className="text-2xl font-semibold text-gray-800">Our Mission</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Empowering dreams through education abroad: We guide ambitious students on their journey to top European institutions,
                            seamlessly blending expert visa assistance with unforgettable travel experiences.
                            Our mission is to open doors to global opportunities, fostering cultural exchange and academic excellence.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <Globe2 className="text-orange-500 w-8 h-8" />
                            <h4 className="text-2xl font-semibold text-gray-800">Our Vision</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Our vision is to become the foremost and sustainable travel consulting agency recognized for its expertise,
                            reliability, and exceptional customer service.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About