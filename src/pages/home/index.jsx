import React from 'react';
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import CardList from "./CardList.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Faq from "./FAQ";
import Interested from "./Interested.jsx";
import Footer from "./Footer.jsx";

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <CardList />
            <Section1 />
            <Section2 />
            <Section3 />
            <Faq/>
            <Interested />
            <Footer />
        </div>
    );
};

export default HomePage;
