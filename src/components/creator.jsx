import React, { useState } from 'react';
import Card from './card.jsx';

function Creator() {
    const [cards, setCards] = useState({
        cname: '',
        clogo: 'mastercard',
        cfrontGradient: '#000000', // domyślny kolor
        cbackGradient: '#000000',  // domyślny kolor
        cfrontImage: '',
        cbackImage: '',
        ctextcolorback: '#FFFFFF', // domyślny kolor
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCards((prevCards) => ({ ...prevCards, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setCards((prevCards) => ({
                ...prevCards,
                [name]: URL.createObjectURL(files[0]),
            }));
        }
    };

    const renderRadioOption = (id, label) => (
        <div className="rounded-lg border bg-[#2b2b2b] border-[#404040] p-4 ps-4 w-1/2">
            <div className="flex items-start">
                <div className="flex h-5 items-center">
                    <input
                        id={id}
                        type="radio"
                        name="clogo"
                        value={id}
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                        checked={cards.clogo === id}
                        onChange={handleChange}
                        aria-label={`Wybierz logo ${label}`}
                    />
                </div>
                <div className="ms-4 text-sm">
                    <label htmlFor={id} className="font-medium leading-none text-white">
                        {label}
                    </label>
                </div>
            </div>
        </div>
    );

    return (
        <section
            id="contact"
            className="min-h-screen bg-[url('./assets/bg-phone.svg')] xl:bg-[url('./assets/bg.svg')] bg-cover bg-center flex flex-col items-center"
        >
            <div
                data-aos="fade-down"
                className="min-h-screen flex flex-col xl:flex-row-reverse justify-center items-center lg:px-[6%] mt-6 lg:mt"
            >
                <div className="lg:flex lg:items-center lg:bg-[hsl(0,0%,15%)] lg:p-12 lg:rounded-md lg:shadow-xl">
                    <Card
                        name={cards.cname}
                        logo={cards.clogo || 'mastercard'}
                        frontGradient={cards.cfrontGradient}
                        backGradient={cards.cbackGradient}
                        frontImage={cards.cfrontImage}
                        backImage={cards.cbackImage}
                        textcolorback={cards.ctextcolorback}
                        className="w-full"
                    />
                    <div className="mt-2 space-y-1 lg:ml-8">
                        <input
                            type="text"
                            name="cname"
                            placeholder="Your Name"
                            value={cards.cname}
                            onChange={handleChange}
                            className="p-3 border border-[#404040] rounded-md bg-[#2b2b2b] w-full focus:ring-2 focus:ring-sky-500 focus:outline-none text-white"
                        />
                        <div className="flex">
                            {renderRadioOption('mastercard', 'MasterCard')}
                            {renderRadioOption('visa', 'Visa')}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Front Color</label>
                            <input
                                type="color"
                                name="cfrontGradient"
                                value={cards.cfrontGradient}
                                onChange={handleChange}
                                className="rounded-md bg-[#2b2b2b] w-full h-10 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Back Color</label>
                            <input
                                type="color"
                                name="cbackGradient"
                                value={cards.cbackGradient}
                                onChange={handleChange}
                                className="rounded-md bg-[#2b2b2b] w-full h-10 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Color Back Text</label>
                            <input
                                type="color"
                                name="ctextcolorback"
                                value={cards.ctextcolorback}
                                onChange={handleChange}
                                className="rounded-md bg-[#2b2b2b] w-full h-10 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Front Image</label>
                            <input
                                type="file"
                                name="cfrontImage"
                                onChange={handleFileChange}
                                className="w-full file:mr-4 file:py-3 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#404040] file:text-white hover:file:bg-[#2b2b2b] cursor-pointer border border-[#404040] rounded-md bg-[#2b2b2b] text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2">Back Image</label>
                            <input
                                type="file"
                                name="cbackImage"
                                onChange={handleFileChange}
                                className="w-full file:mr-4 file:py-3 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#404040] file:text-white hover:file:bg-[#2b2b2b] cursor-pointer border border-[#404040] rounded-md bg-[#2b2b2b] text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Creator;
