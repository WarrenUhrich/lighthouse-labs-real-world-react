import React, { useState } from 'react';

const RouterAttempt = () => {
    const navLinks = ['home', 'about'];
    const [currentPage, setCurrentPage] = useState('home');

    const handleClick = (event, page) => {
        event.preventDefault();

        setCurrentPage(page);
    };

    return (
        <div>

            <nav>

                <a onClick={event => handleClick(event, 'home')} href="#">Home</a>

                <a onClick={event => handleClick(event, 'about')} href="#">About</a>

            </nav>

            {'home' === currentPage && <section>
                <h2>Home Page!</h2>
                <p>Welcome to our website.</p>
            </section>}

            {'about' === currentPage && <section>
                <h2>All About Us!</h2>
                <p>We are Lighthouse Labs, a Canadian web programming bootcamp!</p>
            </section>}

        </div>
    );
};

export default RouterAttempt;
