import React, { useState, useEffect } from "react";
import Visa from '../assets/cardimg/visa.webp';
import Mastercard from '../assets/cardimg/mastercard.webp';
import Chip from '../assets/cardimg/chip.webp';
import Paski from '../assets/cardimg/paski.webp';

const generateRandomCardNumber = () => {
    return Array(4)
        .fill(0)
        .map(() => Math.floor(1000 + Math.random() * 9000))
        .join(" ");
};

const generateRandomDate = () => {
    const month = (Math.floor(Math.random() * 12) + 1).toString().padStart(2, "0");
    const year = (new Date().getFullYear() % 100) + Math.floor(Math.random() * 5) + 1;
    return `${month}/${year}`;
};

const generateRandomCVV = () => Math.floor(100 + Math.random() * 900).toString();

const Card = ({
    name = "John Doe",
    logo = "visa",
    frontGradient = "",
    backGradient = "",
    frontImage = "",
    backImage = "",
    textcolorback = "",
    className = ""
}) => {
    const [flipped, setFlipped] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvv, setCvv] = useState("");

    useEffect(() => {
        setCardNumber(generateRandomCardNumber());
        setExpirationDate(generateRandomDate());
        setCvv(generateRandomCVV());
    }, []);

    const flipCard = () => {
        setFlipped(prev => !prev);
    };

    const getLogoUrl = () => {
        return logo === "visa" ? Visa : Mastercard;
    };

    const commonCardStyles = {
        backgroundColor: frontGradient || "#333",
        backgroundImage: frontImage ? `url(${frontImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: textcolorback || "#ccc"
    };

    const commonBackStyles = {
        backgroundColor: backGradient || "#333",
        backgroundImage: backImage ? `url(${backImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: textcolorback || "#ccc"
    };

    return (
        <div
            onClick={flipCard}
            className={`relative w-[19rem] xl:w-[32rem] xl:h-80 sm:w-96 h-60 rounded-2xl font-sans text-white overflow-hidden cursor-pointer transition-all duration-500 transform ${className} ${flipped ? "rotate-y-180" : ""} perspective-[1000px]`}>
            
            {/* Front Side */}
            <div
                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 ${frontGradient} transition-all duration-100 delay-200 z-20 motion-preset-focus ${flipped ? "hidden" : ""}`}
                style={commonCardStyles}>
                <div className="flex justify-between items-center">
                    <img src={Chip} alt="Smart card chip" className="w-12 drop-shadow-2xl" />
                    <img src={getLogoUrl()} alt="Card logo" className="w-14 drop-shadow-2xl" />
                </div>
                <div>
                    <input
                        type="text"
                        value={cardNumber}
                        readOnly
                        className="outline-none w-full bg-transparent text-center text-2xl text-shadow-lg" />
                </div>
                <div className="w-full flex flex-row justify-between">
                    <input
                        type="text"
                        value={name || "Your Name"}
                        readOnly
                        className="outline-none bg-transparent w-full text-shadow-lg text-lg" />
                    <div className="w-1/4 flex flex-col">
                        <label className="text-shadow-lg">Expires</label>
                        <input
                            type="text"
                            value={expirationDate}
                            readOnly
                            className="outline-none bg-transparent text-shadow-lg" />
                    </div>
                </div>
            </div>

            {/* Back Side */}
            <div
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-tr ${backGradient} flex flex-col space-y-2 py-3 ${textcolorback} transform rotate-y-180 motion-preset-focus text-[0.50rem] ${!flipped ? "hidden" : ""}`}
                style={commonBackStyles}>
                <p className="px-8 text-shadow-sm xl:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elitr</p>
                <div className="w-full h-14 bg-[#1C1C1C]"></div>
                <p className="text-center text-shadow-sm xl:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div
                    className="w-[90%] mx-auto h-11 rounded-md bg-[#D3D3D3] flex flex-row-reverse"
                    style={{
                        backgroundImage: `url(${Paski})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    <div className="bg-white flex items-center">
                        <p className="text-black text-xl transform skew-x-12 px-3 text-shadow-sm">{cvv}</p>
                    </div>
                </div>
                <p className="text-center px-6 py-3 text-shadow-sm xl:text-sm">Morbi tellus arcu, hendrerit sit amet justo nec, tincidunt efficitur urna. Cras sed placerat orci. Nunc commodo odio id ligula placerat, sit amet ornare eros consequat. Sed facilisis placerat semper.</p>
            </div>
        </div>
    );
};

export default Card;
