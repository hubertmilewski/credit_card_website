const OrderSteps = () => {
    const steps = [
        {
            title: "Choice card",
            description: "Select card type and basic options.",
            icon: "fa-credit-card",
        },
        {
            title: "Personalization",
            description: "Customize the card.",
            icon: "fa-paint-brush",
        },
        {
            title: "Preview",
            description: "Check what your card will look like.",
            icon: "fa-eye",
        },
        {
            title: "Shipping details",
            description: "Provide address details for the shipment.",
            icon: "fa-truck",
        },
        {
            title: "Finalization",
            description: "Your card is ready to ship!",
            icon: "fa-check-circle",
        },
    ];

    return (
        <section id="orderprocess" className="h-1/4 bg-[#2b2b2b] flex flex-col justify-center items-center py-12">
            <h1 className="text-4xl font-bold text-[#FFF7F0] mb-8" data-aos="fade-up">
                Order <span className="text-blue-200">Process</span>
            </h1>
            <ol className="relative text-[#333] font-lg border-l-2 border-blue-200 ml-6" data-aos="fade-right">
                {steps.map((step, index) => (
                    <li key={step.title} className="mb-10 last:mb-0 flex flex-col sm:flex-row sm:items-center sm:gap-6 relative">
                        <span
                            className="absolute flex items-center justify-center w-12 h-12 bg-blue-200 ring-blue-100 rounded-full -left-6 ring-2"
                            aria-hidden="true"
                        >
                            <i className={`fa ${step.icon} text-xl text-white`} aria-label={step.title}></i>
                        </span>
                        <div className="sm:ml-16">
                            <h1 className="text-lg font-bold text-white">{step.title}</h1>
                            <p className="text-base text-[#b0b3b5]">{step.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default OrderSteps;
