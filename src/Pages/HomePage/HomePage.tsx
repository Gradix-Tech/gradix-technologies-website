import React from 'react';
import HomePageBanner from "../../assets/Images/HomePageBanner.jpg";
import { ArrowUpRight, PlusIcon } from 'lucide-react';
import Shape1 from "../../assets/Images/Shape1.png";
import Banner2 from "../../assets/Images/Banner2.jpg";
import bot1 from "../../assets/Images/bot1.png";
import pencil from "../../assets/Images/pencil.png";
import mic from "../../assets/Images/mic.png";
import chat from "../../assets/Images/chat.png";
import folder from "../../assets/Images/folder.png";
import Banner3 from "../../assets/Images/Banner3.jpg";
import Banner4 from "../../assets/Images/banner4.jpg";
import team1 from "../../assets/Images/team1.jpg";
import team2 from "../../assets/Images/team2.jpg";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Project1 from '../../assets/Images/project1.jpg';
import Project2 from '../../assets/Images/project2.jpg';
import Project3 from '../../assets/Images/project3.jpg';

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: bref, inView: binView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });



    return (
        <div className='w-10/10 h-auto'>
            <div className='w-10/10 h-[90vh] py-10 lg:h-screen flex flex-col gap-8 justify-center items-center'
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
            <div className='w-10/10 py-10 lg:py-20 flex flex-col gap-5 lg:gap-8 justify-center items-center'>
                <div className='w-9/10 flex flex-col lg:flex-row gap-5 lg:gap-8'>
                    <div className='w-10/10 lg:w-7/10 rounded-xl flex justify-center items-center'
                        style={{
                            background: `url("${Shape1}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        <div className='w-9/10 lg:w-15/20 py-10 md:py-25'>
                            <h3 className="inline-block border border-[#0067fc] uppercase text-[#0067fc] text-xl font-semibold rounded px-6 py-1">
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
                    <div className='w-10/10 lg:w-3/10 flex flex-col gap-5 lg:gap-8'>
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
                            <div ref={ref} className="text-center text-[#0067fc] font-bold text-6xl">
                                <CountUp start={inView ? 0 : undefined} end={25} duration={2} suffix="K" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-10/10 pb-10 lg:pb-20 flex flex-col justify-center items-center'>
                <h3 className="inline-block border border-[#0067fc] text-[#0067fc] text-xl font-semibold rounded px-6 py-1 uppercase">
                    Services
                </h3>
                <div className='w-9/10 lg:w-5/10 mt-5 text-center text-[#110e28] text-3xl md:text-5xl font-semibold leading-10 md:leading-15 tracking-wider'>
                    AI-optimized design for innovative futures
                </div>
                <div className='w-9/10 sm:w-7/10 lg:w-9/10 mt-15'>
                    <div className='w-10/10 gap-5 lg:gap-0 flex flex-col lg:flex-row'>
                        <div style={{
                            background: `url("${Banner2}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className='w-full border rounded-xl border-[#dfdfdf] flex justify-center p-10 items-center'>
                            <div style={{ backdropFilter: "blur(10px)" }} className='bg-transparent w-60 h-60 border border-white flex justify-center items-center rounded-full'>
                                <div className='absolute animate-spin [animation-duration:20s] text-white'>
                                    <svg viewBox="0 0 200 200" className="w-64 h-64"><defs>
                                        <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                                    </defs>
                                        <text fill="white" font-size="16" className="font-bold">
                                            <textPath href="#circlePath" startOffset="50%" text-anchor="middle">
                                                Automation & predictive maintenance
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <img className='h-40 w-30 p-2' src={bot1} alt="bot1" />
                            </div>
                        </div>
                        <div className='w-full border rounded-xl border-[#dfdfdf] p-10'>
                            <img className='w-12' src={pencil} alt="pencil" />
                            <div className='text-2xl text-[#110e28] font-bold mt-15 hover:text-[#0067fc] transition-colors cursor-pointer'>Ai Development</div>
                            <div className='text-lg text-[#676872] font-normal mt-5'>
                                Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. AI for speech-to-text.
                            </div>
                        </div>
                        <div className='w-full border rounded-xl border-[#dfdfdf] p-10'>
                            <img className='w-12' src={folder} alt="pencil" />
                            <div className='text-2xl text-[#110e28] font-bold mt-15 hover:text-[#0067fc] transition-colors cursor-pointer'>Data Science</div>
                            <div className='text-lg text-[#676872] font-normal mt-5'>
                                Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. AI for speech-to-text.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-9/10 sm:w-7/10 lg:w-9/10 mt-5 lg:mt-0'>
                    <div className='w-10/10 gap-5 lg:gap-0 flex flex-col lg:flex-row'>
                        <div className='w-full border rounded-xl border-[#dfdfdf] p-10'>
                            <img className='w-12' src={mic} alt="pencil" />
                            <div className='text-2xl text-[#110e28] font-bold mt-15 hover:text-[#0067fc] transition-colors cursor-pointer'>Machine Learning</div>
                            <div className='text-lg text-[#676872] font-normal mt-5'>
                                Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. AI for speech-to-text.
                            </div>
                        </div>
                        <div className='w-full border rounded-xl border-[#dfdfdf] p-10'>
                            <img className='w-12' src={chat} alt="pencil" />
                            <div className='text-2xl text-[#110e28] font-bold mt-15 hover:text-[#0067fc] transition-colors cursor-pointer'>Chatbot Solutions</div>
                            <div className='text-lg text-[#676872] font-normal mt-5'>
                                Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. AI for speech-to-text.
                            </div>
                        </div>
                        <div style={{
                            background: `url("${Banner3}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className='w-full border rounded-xl border-[#dfdfdf] p-10 flex flex-col justify-center items-start'>
                            <div className='text-2xl text-white font-bold mt-10 hover:text-[#0067fc] transition-colors cursor-pointer'>Ai Community</div>
                            <div className='text-lg text-white font-normal mt-5'>
                                Dive into the art scene and unleash your inner artist!
                            </div>
                            <div className='flex mt-5'>
                                <img className='w-12 h-12 rounded-full border-2 border-white' src={team1} alt="team1" />
                                <img className='w-12 h-12 rounded-full border-2 border-white -ml-5' src={team2} alt="team2" />
                                <img className='w-12 h-12 rounded-full border-2 border-white -ml-5' src={team1} alt="team1" />
                                <img className='w-12 h-12 rounded-full border-2 border-white -ml-5' src={team2} alt="team2" />
                                <div className='w-12 h-12 rounded-full border-2 border-white -ml-5 bg-[linear-gradient(166deg,#13102A_0%,#090976_54%,#0067FC_100%)] text-white flex justify-center items-center'><PlusIcon width={25} height={25} /></div>
                            </div>
                            <div className='text-lg text-white font-bold mt-2 hover:text-[#0067fc] transition-colors cursor-pointer'>Over 40M+ users</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                background: `url("${Banner4}")`,
                backgroundSize: 'zoom',
                backgroundPosition: 'start'
            }} className='w-10/10 h-auto flex flex-col justify-center items-center pt-30'>
                <div className='w-8/10 md:w-6/10 lg:w-4/10'>
                    <h3 className="inline-block border border-white text-white text-xl font-semibold rounded px-6 py-1 uppercase">
                        How it works
                    </h3>
                    <div className='mt-5 text-start text-white text-3xl md:text-5xl font-semibold leading-10 md:leading-15 tracking-wider'>
                        Crafting smarter AI through our process
                    </div>
                </div>
                <div style={{ backdropFilter: "blur(60px)" }} className='w-9/10 h-full flex-col lg:flex-row mt-20 bg-transparent rounded-tl-2xl gap-10 rounded-tr-2xl flex justify-center items-center p-5 md:p-20'>
                    <div className='w-full h-full process-style-one-item'>
                        <h2>01</h2>
                        <div className='text-white text-2xl font-semibold'>
                            Discovery & Strategy
                        </div>
                        <div className='text-sm text-light text-white mt-2 tracking-wider leading-6 font-light'>
                            Librarian indulged speaking the was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
                        <div className="w-px h-62.5 hidden lg:block bg-linear-to-b from-transparent via-white/30 to-transparent"></div>
                        <div className="w-full h-px block lg:hidden bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                        <div className='w-full h-full process-style-one-item border-white'>
                            <h2>02</h2>
                            <div className='text-white text-2xl font-semibold'>
                                Custom AI Development
                            </div>
                            <div className='text-sm text-light text-white mt-2 tracking-wider leading-6 font-light'>
                                Perfection indulged speaking was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.
                            </div>
                        </div>
                        <div className="w-px h-62.5 hidden lg:block bg-linear-to-b from-transparent via-white/30 to-transparent"></div>
                        <div className="w-full h-px block lg:hidden bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>
                    <div className='w-full h-full process-style-one-item'>
                        <h2>03</h2>
                        <div className='text-white text-2xl font-semibold'>
                            Optimization & Support
                        </div>
                        <div className='text-sm text-light text-white mt-2 tracking-wider leading-6 font-light'>
                            Artificial indulged speaking the was out horrible for domestic are regular position. Seeing rather her you not esteem men settle genius excuse at the perfection for standard.
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full py-20 flex justify-center items-center bg-[#f0f2f4] gap-10">
                <div className="w-9/10 flex flex-col lg:flex-row gap-10">
                    <div className="w-10/10 md:w-6/10 lg:w-4/10 block lg:sticky top-20 h-fit">
                        <div className="p-8 rounded-2xl">
                            <h3 className="inline-block border border-[#0067fc] uppercase text-[#0067fc] text-xl font-semibold rounded px-6 py-1">
                                Latest Projects
                            </h3>
                            <div className='mt-5 text-[#110e28] text-3xl md:text-5xl font-semibold leading-10 md:leading-15 tracking-wider'>
                                Best projects for intelligent
                            </div>
                            <div ref={bref} className="mt-15 w-70 text-center py-3 rounded-2xl bg-[red] text-white font-bold text-6xl  bg-[linear-gradient(166deg,#13102A_0%,#090976_54%,#0067FC_100%)]">
                                <CountUp start={binView ? 0 : undefined} end={2650} duration={2} suffix="+" />
                            </div>
                            <div className='mt-5 text-[#110e28] text-2xl font-semibold'>
                                Finished creative projects successfully using AI support
                            </div>
                        </div>
                    </div>

                    {/* RIGHT Scroll Section */}
                    <div className="w-10/10 lg:w-6/10 flex flex-col gap-8">
                        <div className="p-5 md:p-10 bg-white rounded-2xl shadow h-auto flex gap-5">
                            <div className='w-5/10'>
                                <img src={Project3} className='rounded-2xl object-center' alt="project1" />
                            </div>
                            <div className='w-5/10 flex flex-col justify-between'>
                                <div className='text-[#110e28] text-lg md:text-2xl font-semibold'>
                                    Intelligent predictive maintenance system for industrial machinery
                                </div>
                                <div>
                                    <div className='text-sm text-[#086cfc] font-semibold mt-5 flex gap-2 uppercase cursor-pointer'>
                                        Explore More <ArrowUpRight />
                                    </div>
                                    <div className='mt-5 flex gap-3 flex-wrap'>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Artificial</div>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Technology</div>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Machine</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 md:p-10 bg-white rounded-2xl shadow h-auto flex gap-5">
                            <div className='w-5/10'>
                                <img src={Project2} className='rounded-2xl object-center' alt="project1" />
                            </div>
                            <div className='w-5/10 flex flex-col justify-between'>
                                <div className='text-[#110e28] text-lg md:text-2xl font-semibold'>
                                    Advanced predictive maintenance for tech driven AI machinery
                                </div>
                                <div>
                                    <div className='text-sm text-[#086cfc] font-semibold mt-5 flex gap-2 uppercase cursor-pointer'>
                                        Explore More <ArrowUpRight />
                                    </div>
                                    <div className='mt-5 flex gap-3 flex-wrap'>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Artificial</div>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Technology</div>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Machine</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 md:p-10 bg-white rounded-2xl shadow h-auto flex gap-5">
                            <div className='w-5/10'>
                                <img src={Project1} className='rounded-2xl object-center' alt="project1" />
                            </div>
                            <div className='w-5/10 flex flex-col justify-between'>
                                <div className='text-[#110e28] text-lg md:text-2xl font-semibold'>
                                    Automated predictive maintenance system for industrial assets
                                </div>
                                <div>
                                    <div className='text-sm text-[#086cfc] font-semibold mt-5 flex gap-2 uppercase cursor-pointer'>
                                        Explore More <ArrowUpRight />
                                    </div>
                                    <div className='mt-5 flex gap-3 flex-wrap'>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Artificial</div>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Technology</div>
                                        <div className='rounded-lg inline-block py-1 px-3 border border-[#086cfc] text-[#60616c] text-xs md:text-sm'>Machine</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default HomePage;