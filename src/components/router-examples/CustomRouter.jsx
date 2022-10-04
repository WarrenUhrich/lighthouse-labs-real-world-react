import { useState } from 'react';

const CustomRouter = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavAClick = (event) => {
        event.preventDefault();
        const linkParts = event.target.href.split('/');
        setCurrentPage(linkParts[linkParts.length - 1]);
    };

    return (
        <main>
            <h1>Welcome to our Website</h1>
            <nav>
                <a href="home" onClick={handleNavAClick}>Homepage</a>
                <a href="about" onClick={handleNavAClick}>About</a>
            </nav>
            {'home' === currentPage &&
                <section>
                    <h2>Homepage!</h2>
                    <p>This is the homepage.</p>
                </section>
            }
            {'about' === currentPage &&
                <section>
                    <h2>About!</h2>
                    <p>All about us!.</p>
                </section>
            }
        </main>
    );
};

export default CustomRouter;
