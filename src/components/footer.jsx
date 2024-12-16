const Footer = () => {
    const currentYear = new Date().getFullYear();

    // List of social media links to make the code more modular
    const socialLinks = [
        {
            href: "https://www.facebook.com",
            label: "Facebook",
            iconClass: "fab fa-facebook-f",
            color: "#3B5998"
        },
        {
            href: "https://www.instagram.com",
            label: "Instagram",
            iconClass: "fab fa-instagram",
            color: "#E4405F"
        },
        {
            href: "https://www.twitter.com",
            label: "Twitter",
            iconClass: "fab fa-twitter",
            color: "#1DA1F2"
        },
        {
            href: "https://github.com/hubertmilewski",
            label: "GitHub",
            iconClass: "fab fa-github",
            color: "#3d3d3d"
        }
    ];

    return (
        <footer className="w-full bg-gray-800 p-4">
            <p className="text-center text-white">
                © {currentYear} <span className="font-bold"><span className="text-blue-200">Card</span>Crafter</span>. All Rights Reserved.
            </p>
            <nav className="flex justify-center space-x-6">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-[#F8F9FA] hover:text-[link.color] transition duration-300"
                    >
                        <i className={`${link.iconClass} text-xl`} role="img" aria-label={link.label}></i>
                    </a>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;
