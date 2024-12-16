import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from './card.jsx';
import CarImg from '../assets/cardimg/car.webp';
import RickAndMortyImg from '../assets/cardimg/rickandmortyfront.webp';
import RickAndMortyImgBack from '../assets/cardimg/rickandmortyback.webp';

// Externalizing the card data for modularity
const cardsData = [
    {
        name: "Andrew Jackson",
        logo: "mastercard",
        frontGradient: "",
        backGradient: "#CBD5E1",
        frontImage: CarImg,
        backImage: "",
        textcolorback: "#fff"
    },
    {
        name: "John Doe",
        logo: "mastercard",
        frontGradient: "from-blue-500 to-blue-700",
        backGradient: "from-gray-500 to-gray-700",
        frontImage: RickAndMortyImg,
        backImage: RickAndMortyImgBack,
        textcolorback: "#fff"
    },
    {
        name: "Jane Smith",
        logo: "visa",
        frontGradient: "#CBD5E1",
        backGradient: "#E2E8F0",
        frontImage: "",
        backImage: "",
        textcolorback: "#333"
    }
];

function Home() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // Using useEffect to handle card fade animation and card change
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
            }, 700);

            setTimeout(() => {
                setIsFading(false);
            }, 1500);
        }, 5000); // Change card every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const navigate = useNavigate();

    // Navigating to the card creator page
    const handleNavigate = () => {
        navigate('/creator');
    };

    return (
        <section id="home" className="min-h-screen bg-[url('./assets/bg-phone.svg')] xl:bg-[url('./assets/bg.svg')] bg-cover bg-center flex flex-col items-center">
            <div className="min-h-screen flex flex-col xl:flex-row-reverse justify-center items-center lg:px-[6%]">
                <div className="motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[1.35s] motion-duration-[2.02s]/scale motion-duration-[2.02s]/translate motion-duration-[2.43s]/rotate">
                    <div
                        className={`mb-4 transition-all duration-700 ease-in-out ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                    >
                        <Card
                            className="motion-preset-oscillate motion-duration-2000 drop-shadow-2xl"
                            name={cardsData[currentCardIndex].name}
                            logo={cardsData[currentCardIndex].logo}
                            frontGradient={cardsData[currentCardIndex].frontGradient}
                            backGradient={cardsData[currentCardIndex].backGradient}
                            frontImage={cardsData[currentCardIndex].frontImage}
                            backImage={cardsData[currentCardIndex].backImage}
                            textcolorback={cardsData[currentCardIndex].textcolorback}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center xl:items-start px-3 text-center xl:text-left motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-duration-[2.00s] mt-12 xl:mt-0">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF7F0]">
                        <span className="text-blue-200">Card</span>Crafter
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl xl:text-3xl font-medium text-gray-300 mt-1">
                        Make your own personalized card!
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg font-medium text-blue-200 mt-4 xl:w-[53%]">
                        Your card your rules! Use a credit card that is your style and makes you stand out from the crowd. Choose a design you love and add a distinctive touch to your payment instance!
                    </p>
                    <button 
                        onClick={handleNavigate} 
                        className="bg-sky-500 hover:bg-sky-700 px-6 py-4 mt-6 rounded-md text-[#FFF7F0] font-medium text-lg duration-300"
                        aria-label="Create a personalized card"
                    >
                        Create Card
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;
