import React from 'react';
import Banner from './Banner';
import FeaturedSection from './FeaturedSection';
import ContactUs from './ContactUs ';
import Footer from './Footer';
import HowItWorks from './HowItWorks ';
import BloodGroups from './BloodGroups ';
import ImpactStats from './ImpactStats ';
import Testimonials from './Testimonials ';
import EligibilitySafety from './EligibilitySafety';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <HowItWorks></HowItWorks>
            <BloodGroups></BloodGroups>
            <ImpactStats></ImpactStats>
            <Testimonials></Testimonials>
            <EligibilitySafety></EligibilitySafety>
           <section id='contact'>
             <ContactUs></ContactUs>
           </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;