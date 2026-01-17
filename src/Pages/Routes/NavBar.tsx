import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/GRADIX_WHITE.png";
import LogoColor from "../../assets/Images/GRADIX_COLOR.png";
import { CiMenuFries } from "react-icons/ci";
import { ArrowUpRight, X } from "lucide-react";

const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔥 Stop background scroll when menu open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    const handleNavigate = (path: string) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <div className={`w-full fixed ${scrolled && "shadow-lg"} top-0 left-0 z-50`}>
            <nav
                className={`w-full h-20 flex justify-between items-center px-5 lg:px-10 ${scrolled ? "bg-white" : "bg-transparent"
                    }`}
            >
                <img
                    className="h-16 cursor-pointer"
                    onClick={() => handleNavigate("/")}
                    src={scrolled ? LogoColor : Logo}
                    alt="Logo"
                />

                {/* Desktop Menu */}
                <div
                    className={`h-20 justify-center items-center gap-5 hidden lg:flex ${scrolled ? "text-[#0a1c2c]" : "text-white"
                        }`}
                >
                    <div className="cursor-pointer">Home</div>
                    <div className="cursor-pointer">About Us</div>
                    <div className="cursor-pointer">Services</div>
                    <div className="cursor-pointer">Contact Us</div>
                </div>

                <div className="hidden lg:block">
                    <button id={`${scrolled ? "bottoneb" : "bottonet"}`}>
                        <strong className="flex gap-2">
                            Get Started <ArrowUpRight />
                        </strong>
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="block lg:hidden">
                    <CiMenuFries
                        onClick={() => setMenuOpen(true)}
                        className={`w-8 h-8 cursor-pointer ${scrolled ? "text-[#0a1c2c]" : "text-white"
                            }`}
                    />
                </div>
            </nav>

            {/* ✅ Mobile Slide Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen z-999 transition-all duration-300 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
            >
                <div className="flex w-full h-full">
                    {/* 70% White Menu */}
                    <div
                        className={`w-[70%] h-full bg-white p-6 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        {/* Close Button */}
                        <div className="flex justify-end">
                            <X
                                className="w-7 h-7 cursor-pointer text-black"
                                onClick={() => setMenuOpen(false)}
                            />
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col gap-6 mt-10 text-lg font-medium text-[#0a1c2c]">
                            <div
                                className="cursor-pointer"
                                onClick={() => handleNavigate("/")}
                            >
                                Home
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => handleNavigate("/about")}
                            >
                                About Us
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => handleNavigate("/services")}
                            >
                                Services
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => handleNavigate("/contact")}
                            >
                                Contact Us
                            </div>

                            <div>
                                <button id="bottoneb">
                                    <strong className="flex gap-2">
                                        Get Started <ArrowUpRight />
                                    </strong>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 30% Transparent Dark Overlay */}
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="w-[30%] h-full bg-black/30 backdrop-blur-[1px]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
