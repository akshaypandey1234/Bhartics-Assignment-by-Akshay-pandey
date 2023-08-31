// import React from 'react'
import Directions from '../Components/Directions';
import Footer from '../Components/Footer';
import IntroSection from '../Components/IntroSection'
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <IntroSection />
            <Directions />
            <Footer />
        </div>
    )
}

export default Home