import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Review = {
    name: string;
    rating: number; // ex: 4.5
    description: string;
};

type TestimonialSliderProps = {
    reviews: Review[];
};

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ reviews }) => {
    const [index, setIndex] = useState(0);

    if (!reviews || reviews.length === 0) return null;

    const current = reviews[index];

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const fullStars = Math.floor(current.rating);
    const hasHalfStar = current.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="mt-10 lg:mt-20 w-10/10">
            {/* Review Content */}
            <div className="w-10/10 h-50">
                <div className="w-10/10 flex gap-5">
                    <div className="w-15 h-15 bg-[#313a40] text-white rounded-2xl flex justify-center items-center">
                        <FaQuoteLeft size={25} />
                    </div>

                    <div className="flex flex-col justify-around">
                        <h1 className="text-xl font-bold text-white">{current.name}</h1>

                        <div className="text-lg text-[#ffb800] flex gap-1">
                            {[...Array(fullStars)].map((_, i) => (
                                <FaStar key={`full-${i}`} />
                            ))}

                            {hasHalfStar && <FaStarHalfAlt />}

                            {[...Array(emptyStars)].map((_, i) => (
                                <FaRegStar key={`empty-${i}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-10/10 mt-10 text-white pr-0 md:pr-20">{current.description}</div>
            </div>

            {/* Arrows */}
            <div className="w-10/10 mt-30 sm:mt-20 flex justify-center items-center gap-10">
                <button
                    onClick={handlePrev}
                    className="inline-flex bg-white p-2 rounded-full justify-center items-center cursor-pointer"
                >
                    <ArrowLeft />
                </button>

                <button
                    onClick={handleNext}
                    className="inline-flex bg-white p-2 rounded-full justify-center items-center cursor-pointer"
                >
                    <ArrowRight />
                </button>
            </div>

            {/* Optional Index Dots */}
            {/* <div className="mt-6 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div> */}
        </div>
    )
};

export default TestimonialSlider;
