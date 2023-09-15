import React from 'react';
import Banner from '../Banner/Banner';
import SSStory from '../SSStory/SSStory';
import AppointmentHome from '../AppointmentHome/AppointmentHome';
import Review from '../Review/Review';
import WorkSystem from '../Work-System/WorkSystem';
import Pricing from '../Pricing-List/Pricing';
import HomeGallery from '../HomeGallery/HomeGallery';
import MainSlider from '../MainSlider/MainSlider';
import ServiceList from '../ServiceList/ServiceList';

const Home = () => {
    return (
        <div>
            <MainSlider></MainSlider>
            <Banner></Banner>
            <ServiceList></ServiceList>
            <SSStory></SSStory>
            <AppointmentHome></AppointmentHome>
            <Review></Review>
            <WorkSystem></WorkSystem>
            <Pricing></Pricing>
            <HomeGallery></HomeGallery>
        </div>
    );
};

export default Home;