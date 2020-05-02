import React from 'react';
import Header from '../../components/Header/Header';
import RestaurantList from '../../components/RestaurantList/RestaurantList';
import Footer from '../Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => (
    <div style={{ position: 'relative', paddingBottom: '20rem' }}>
        <Header />
        <RestaurantList />
        <Gallery />
        <Footer />
    </div> 
);

export default Home;