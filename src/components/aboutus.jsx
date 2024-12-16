import React from "react";
import aboutus1 from '../assets/aboutUs/aboutus1.svg';
import aboutus2 from '../assets/aboutUs/aboutus2.svg';
import aboutus3 from '../assets/aboutUs/aboutus3.svg';

function AboutUsSection() {
  const aboutData = [
    {
      img: aboutus1,
      title: "Who are we?",
      text: "We are a team of enthusiasts who have been creating solutions tailored to your needs for years. Our mission is to provide the highest quality products that combine modernity with an individual approach to each client. We draw inspiration from our customers to continually improve our services and deliver solutions that exceed expectations.",
      alt: "Team working on solutions",
    },
    {
      img: aboutus2,
      title: "Our values",
      text: [
        "Your safety and satisfaction are our priority.",
        "We use the latest technologies to provide the best experience.",
        "We love what we do - and it shows in our products.",
      ],
      alt: "Our values",
    },
    {
      img: aboutus3,
      title: "Why is it worth choosing our services?",
      text: [
        "We have taken care of all security aspects so that you can use our services without worries.",
        "Create products tailored to your needs in just a few simple steps.",
        "We process your orders quickly, without compromising on quality.",
        "Many years of presence on the market allow us to provide proven and reliable solutions.",
      ],
      alt: "Why choose our services",
    },
  ];

  return (
    <section id="aboutus" className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-8 lg:px-12 space-y-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#FFF7F0] mt-8 text-center" data-aos="fade-up">
        About <span className="text-blue-200">Us</span>
      </h1>

      {aboutData.map((item, index) => (
        <div key={index} data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-7xl w-full">
          <img src={item.img} className="w-full max-w-xs mx-auto sm:max-w-sm lg:max-w-md" alt={item.alt} />
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FFF7F0]">{item.title}</h2>
            {Array.isArray(item.text) ? (
              item.text.map((text, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#adaeaf] pt-2">
                  <span className="text-[#dbdcdd] font-medium">{text.split(" ")[0]}</span> {text.slice(text.indexOf(" ") + 1)}
                </p>
              ))
            ) : (
              <p className="text-sm sm:text-base text-[#adaeaf] pt-2">{item.text}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default AboutUsSection;
