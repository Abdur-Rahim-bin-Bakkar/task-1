import { Card, Button } from "@heroui/react";
import {
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaEnvelope,
    FaDownload,
    FaRocket,
    FaCogs,
    FaUserTie,
} from "react-icons/fa";

export default function ProjectOverview() {
    return (
        <Card className="rounded-3xl shadow-xl p-8 space-y-10">

            {/* Header */}
            <div className="space-y-14">

                {/* ================= HERO ================= */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-700 text-white p-10">

                    <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-16 w-56 h-56 bg-cyan-400/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 text-center">

                        <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-medium backdrop-blur">
                            Full Stack Developer Screening Project
                        </span>

                        <h1 className="text-5xl font-extrabold mt-6">
                            Item Price Calculator
                        </h1>

                        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-200 leading-8">
                            A modern Full-Stack application built with Next.js that accepts
                            multiple items, calculates the total price, identifies the most
                            expensive product, and returns the result using a custom API Route.
                        </p>

                    </div>

                </div>

                {/* ================= FEATURES ================= */}

                <section>

                    <div className="flex items-center gap-3 mb-8">

                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <FaRocket className="text-3xl text-blue-600" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">
                                Features
                            </h2>

                            <p className="text-gray-500">
                                Everything included in this project.
                            </p>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {[
                            "Add unlimited items with name & price.",
                            "Submit items using Next.js API Route.",
                            "Calculate total price instantly.",
                            "Find the most expensive item.",
                            "Clean responsive Hero UI interface.",
                            "Fast client-side experience."
                        ].map((feature, index) => (

                            <div
                                key={index}
                                className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >

                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                    <FaRocket className="text-blue-600 text-xl" />
                                </div>

                                <p className="font-medium leading-7">
                                    {feature}
                                </p>

                            </div>

                        ))}

                    </div>

                </section>

                {/* ================= HOW IT WORKS ================= */}

                <section>

                    <div className="flex items-center gap-3 mb-8">

                        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                            <FaCogs className="text-3xl text-green-600" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">
                                Workflow
                            </h2>

                            <p className="text-gray-500">
                                Application flow step by step.
                            </p>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {[
                            "Enter Item Name",
                            "Enter Item Price",
                            "Click Add Item",
                            "Repeat for multiple items",
                            "Click See Result",
                            "API processes the data",
                            "Total is calculated",
                            "Most expensive item is displayed"
                        ].map((step, index) => (

                            <div
                                key={index}
                                className="flex items-center gap-5 border rounded-2xl p-5 hover:border-blue-500 hover:bg-blue-50 transition"
                            >

                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>

                                <h3 className="font-semibold text-lg">
                                    {step}
                                </h3>

                            </div>

                        ))}

                    </div>

                </section>

                {/* ================= DEVELOPER ================= */}

                <section>

                    <div className="flex items-center gap-3 mb-8">

                        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                            <FaUserTie className="text-3xl text-purple-600" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">
                                Developer
                            </h2>

                            <p className="text-gray-500">
                                Connect with me.
                            </p>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <a
                            href="https://portfolio-eight-pi-mc123cjc5o.vercel.app/"
                            target="_blank"
                            className="group rounded-2xl border p-6 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300"
                        >
                            <FaGlobe className="text-3xl mb-4" />
                            <h3 className="text-xl font-bold">
                                Portfolio
                            </h3>
                            <p className="opacity-70 mt-2">
                                View my latest projects and skills.
                            </p>
                        </a>

                        <a
                            href="https://github.com/Abdur-Rahim-bin-Bakkar"
                            target="_blank"
                            className="group rounded-2xl border p-6 hover:bg-gray-900 hover:text-white transition-all duration-300"
                        >
                            <FaGithub className="text-3xl mb-4" />
                            <h3 className="text-xl font-bold">
                                GitHub
                            </h3>
                            <p className="opacity-70 mt-2">
                                Explore my source code repositories.
                            </p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/"
                            target="_blank"
                            className="group rounded-2xl border p-6 hover:bg-blue-700 hover:text-white transition-all duration-300"
                        >
                            <FaLinkedin className="text-3xl mb-4" />
                            <h3 className="text-xl font-bold">
                                LinkedIn
                            </h3>
                            <p className="opacity-70 mt-2">
                                Let's connect professionally.
                            </p>
                        </a>

                        <a
                            href="mailto:webdesignrahim4061@gmail.com"
                            className="group rounded-2xl border p-6 hover:bg-red-600 hover:text-white transition-all duration-300"
                        >
                            <FaEnvelope className="text-3xl mb-4" />
                            <h3 className="text-xl font-bold">
                                Email
                            </h3>
                            <p className="opacity-70 mt-2">
                                Feel free to contact me anytime.
                            </p>
                        </a>

                    </div>

                </section>

            </div>

            {/* Resume Download */}
            <div className="flex justify-center pt-4">

                <a href="/resume.pdf" download>
                    <Button
                        color="primary"
                        size="lg"
                        startContent={<FaDownload />}
                        className="px-8 font-semibold"
                    >
                        Download Resume
                    </Button>
                </a>

            </div>

        </Card>
    );
}