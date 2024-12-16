// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    // Funkcja do przewijania strony do góry
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Funkcja do pokazywania lub ukrywania przycisku strzałki w zależności od przewinięcia
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true); // Pokaż strzałkę, gdy przewinięto stronę w dół
            } else {
                setShowScrollToTop(false); // Ukryj strzałkę, gdy na górze strony
            }
        };

        window.addEventListener('scroll', handleScroll); // Słuchaj zdarzenia scroll

        return () => {
            window.removeEventListener('scroll', handleScroll); // Usuwanie nasłuchu przy unmount
        };
    }, []);

    return (
        <>
            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-lg p-3 px-6 shadow-lg hover:bg-blue-700 transition-all"
                >
                    <i className="fa-solid fa-angles-up"></i>
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
