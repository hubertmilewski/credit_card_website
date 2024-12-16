import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Simulate form submission with async call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmissionStatus("success");
        } catch (error) {
            setSubmissionStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center pt-12 pb-2">
            <h1 className="text-4xl font-bold text-[#FFF7F0] mb-8" data-aos="fade-up">
                Contact <span className="text-blue-200">Us</span>
            </h1>
            <div className="p-2 text-white 2xl:w-1/4 lg:w-1/2 md:w-1/2" data-aos="flip-right">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-md font-medium text-[#FFF7F0]">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tomas"
                            className="p-3 border border-[#404040] rounded-md bg-[#2b2b2b] w-full focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="email" className="block mb-2 text-md font-medium text-[#FFF7F0]">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Tomas@example.com"
                            className="p-3 border border-[#404040] rounded-md bg-[#2b2b2b] w-full focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="message" className="block mb-2 text-md font-medium text-[#FFF7F0]">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Leave a comment..."
                            className="p-3 border border-[#404040] rounded-md bg-[#2b2b2b] w-full h-40 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            required
                        />
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                        By submitting this form you agree to our <span className="text-blue-200 cursor-pointer">terms and conditions</span> and our <span className="text-blue-200 cursor-pointer">privacy policy</span> which explains how we may collect, use and disclose your personal information including to third parties.
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-sky-500 p-3 rounded-md font-bold text-md text-white mt-4"
                        disabled={isSubmitting}
                        aria-live="polite"
                        aria-label={isSubmitting ? "Sending message..." : "Send message"}
                    >
                        {isSubmitting ? "Sending..." : "Send message"}
                    </button>
                </form>
                {submissionStatus && (
                    <div className="mt-4 text-white" role="alert">
                        {submissionStatus === "success" ? (
                            <p className="text-green-400">Your message has been sent successfully!</p>
                        ) : (
                            <p className="text-red-400">Something went wrong. Please try again.</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;
