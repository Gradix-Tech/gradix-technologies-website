import { PlusIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface UserFabProps {
    profileImageUrl?: string;
    imageSize?: string;
}

const UserFab: React.FC<UserFabProps> = ({ profileImageUrl, imageSize = "h-50" }) => {
    const [open, setOpen] = React.useState(false);
    const fabRef = useRef<HTMLDivElement | null>(null);

    // ✅ close when click outside (mobile friendly)
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent | TouchEvent) => {
            if (fabRef.current && !fabRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative" ref={fabRef}>
            <img className={`${imageSize} rounded-full object-cover`} src={profileImageUrl} alt="team" />

            <div className="absolute -bottom-4 left-3/4 -translate-x-1/2 flex flex-col items-end gap-3">
                {/* Social Buttons */}
                <div
                    className={`flex flex-col items-center gap-3 transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
                        }`}
                >
                    <button className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-lg">
                        <FaLinkedinIn />
                    </button>

                    <button className="w-12 h-12 rounded-full bg-[#EA4C89] text-white flex items-center justify-center shadow-lg">
                        <FaInstagram />
                    </button>

                    <button className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg">
                        <FaFacebookF />
                    </button>
                </div>

                {/* Plus Button */}
                <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)} // ✅ mobile open/close
                    className="w-14 h-14 cursor-pointer border-4 rounded-full bg-black text-white flex items-center justify-center"
                >
                    <PlusIcon className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
                </button>
            </div>
        </div>
    );
};

export default UserFab;
