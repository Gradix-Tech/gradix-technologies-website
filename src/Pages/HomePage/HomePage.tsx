import React from 'react';
import HomePageBanner from "../../assets/Images/HomePageBanner.jpg";
import { ArrowUpRight } from 'lucide-react';
import Shape1 from "../../assets/Images/Shape1.png";


interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = () => {

    return (
        <div className='w-10/10 h-auto'>
            <div className='w-10/10 h-auto py-10 lg:h-screen flex flex-col gap-8 justify-center items-center'
                style={{
                    background: `url("${HomePageBanner}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <h3 data-aos="fade-up" className="inline-block border border-white px-10 py-3 text-white text-lg md:text-2xl font-semibold rounded mt-20">
                    AI automation Partner
                </h3>
                <h1 data-aos="fade-up" data-aos-delay="150" className='w-9/10 md:w-8/10 lg:w-6/10  text-center text-white font-semibold tracking-wider text-4xl md:text-7xl'>
                    Elevate your business with AI-Power
                </h1>

                <h6 data-aos="fade-up" data-aos-delay="200" className='w-8/10 md:w-7/10 lg:w-5/10  text-center text-white text-lg'>
                    Technologies into businesses to enhance efficiency, decision-making, and overall performance. They offer services such as AI implementation.
                </h6>

                <div data-aos="fade-up" data-aos-delay="250">
                    <button id="bottone1"><strong className='flex gap-2'>Join Today <ArrowUpRight /></strong></button>
                </div>
            </div>
            <div className='w-10/10 py-20 flex flex-col gap-8 justify-center items-center'>
                <div className='w-9/10 flex flex-col lg:flex-row gap-10'>
                    <div className='w-10/10 lg:w-7/10 rounded-xl flex justify-center items-center'
                        style={{
                            background: `url("${Shape1}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className='w-9/10 lg:w-15/20 py-15 md:py-25'>
                            <h3 className="inline-block border border-[#0067fc] text-[#0067fc] text-xl font-semibold rounded px-6 py-1">
                                ABOUT GRADIX
                            </h3>
                            <div className='mt-5 text-[#110e28] text-3xl md:text-5xl font-semibold leading-10 md:leading-15 tracking-wider'>
                                Unlock limitless possibilities with our intelligent solutions
                            </div>
                            <div className='mt-8 text-[#676872] text-sm md:text-lg font-normal leading-7'>
                                This focus on leveraging advanced technology—like AI, automation, and data-driven insights—to help businesses or individuals overcome challenges and achieve unprecedented growth. Below are some key details that could be associated with this statement. AI algorithms analyze your business needs and automatically. Tailors responses based on user behavior to help businesses and individuals overcome challenges and achieve Real fond attachment.
                            </div>
                        </div>
                    </div>
                    <div className='w-10/10 lg:w-3/10 flex flex-col gap-8'>
                        <div className="p-7 md:p-15 flex flex-col items-end rounded-xl bg-[linear-gradient(166deg,#13102A_0%,#090976_54%,#0067FC_100%)]">
                            <div className='text-white text-2xl font-semibold'>
                                API integration to your business
                            </div>
                            <div className='text-sm text-light text-white mt-5 tracking-wider leading-6'>
                                Application programming interface integration has become essential for modern machines businesses.
                            </div>
                            <div className='mt-10'>
                                <button id="bottone1"><strong className='flex gap-2'>Join Today <ArrowUpRight /></strong></button>
                            </div>
                        </div>
                        <div className='p-7 md:p-15 flex flex-col gap-7 lg:gap-0 justify-between w-10/10 h-full rounded-xl' style={{
                            background: `url("${Shape1}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <div className='text-2xl font-semibold text-[#110e28]'>
                                Seamless Integration
                            </div>
                            <div className='border border-[#cddff3]'></div>
                            <div className='text-center text-[#0067fc] font-bold text-6xl'>
                                28K
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;