import { useState } from 'react';

const RouterAttempt = () => {
    const navLinks = ['home', 'about'];

    const [currentPage, setCurrentPage] = useState('home');

    const handleClick = (event) => {
        event.preventDefault();

        const urlPieces = event.target.href.split('/');
        const pathName = urlPieces[urlPieces.length - 1];

        setCurrentPage(pathName);
    };

    return (
        <main>
            <nav>
                <a onClick={handleClick} href="home">Home</a>
                <a onClick={handleClick} href="about">About</a>
            </nav>
            {'home' === currentPage &&
                <section>
                    <h2>Home</h2>
                    <p>Welcome home!</p>
                </section>
            }
            {'about' === currentPage &&
                <section>
                    <h2>About</h2>
                    <p>All about us!</p>
                </section>
            }
            {false === navLinks.includes(currentPage) &&
                <section>
                    <h2>404: Page Not Found!</h2>
                    <p>Please try again.</p>
                </section>
            }
        </main>
    );
};

export default RouterAttempt;
