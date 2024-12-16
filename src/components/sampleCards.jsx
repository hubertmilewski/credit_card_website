import Card from './card.jsx';
import CarImg from '../assets/cardimg/car.webp';
import RickAndMortyImg from '../assets/cardimg/rickandmortyfront.webp';
import RickAndMortyImgBack from '../assets/cardimg/rickandmortyback.webp';

function Samplecards() {
    const sampleCardsData = [
        {
            name: "Antony Stark",
            logo: "mastercard",
            frontGradient: "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500",
            backGradient: "bg-gradient-to-l from-gray-700 via-gray-900 to-black",
            frontImage: RickAndMortyImg,
            backImage: RickAndMortyImgBack,
            textcolorback: "text-gray-300"
        },
        {
            name: "John Michael",
            logo: "visa",
            frontGradient: "",
            backGradient: "",
            frontImage: "",
            backImage: "",
            textcolorback: "text-gray-300"
        },
        {
            name: "Andrew Jackson",
            logo: "mastercard",
            frontGradient: "bg-gradient-to-l from-blue-200 via-blue-400 to-indigo-600",
            backGradient: "#CBD5E1",
            frontImage: CarImg,
            backImage: "",
            textcolorback: "text-black"
        }
    ];

    return (
        <section
            id="sampleCards"
            className="h-auto flex flex-col justify-center items-center bg-[#2b2b2b] py-12"
        >
            <h1
                className="text-4xl font-bold text-[#FFF7F0] p-4"
                data-aos="fade-up"
            >
                <span className="text-blue-200">Sample </span>Cards
            </h1>
            <div className="flex flex-wrap justify-center gap-8 2xl:flex-nowrap xl:flex-wrap">
                {sampleCardsData.map((card, index) => (
                    <div key={card.name} data-aos="fade-right">
                        <Card
                            name={card.name}
                            logo={card.logo}
                            frontGradient={card.frontGradient}
                            backGradient={card.backGradient}
                            frontImage={card.frontImage}
                            backImage={card.backImage}
                            textcolorback={card.textcolorback}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Samplecards;
