import React from 'react';

import HomePageBanner from "../../assets/Images/HomePageBanner.jpg";
import { ArrowUpRight } from 'lucide-react';


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
                <h3 className="inline-block border border-white px-10 py-3 text-white text-lg md:text-2xl font-semibold rounded mt-20">
                    AI automation Partner
                </h3>
                <h1 className='w-9/10 md:w-8/10 lg:w-6/10  text-center text-white font-semibold tracking-wider text-4xl md:text-7xl'>
                    Elevate your business with AI-Power
                </h1>

                <h6 className='w-8/10 md:w-7/10 lg:w-5/10  text-center text-white text-lg'>
                    Technologies into businesses to enhance efficiency, decision-making, and overall performance. They offer services such as AI implementation.
                </h6>

                <button id="bottone1"><strong className='flex gap-2'>Join Today <ArrowUpRight /></strong></button>
            </div>
            <div className='w-10/10 h-auto py-10 lg:h-screen flex flex-col gap-8 justify-center items-center'></div>
        </div>
    );
};

export default HomePage;