import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components';
import Header from '../components/header';
import Hero from '../components/hero';
import FeaturedData from '../components/featuredData';
import { dataPosts } from '../components/dataPosts';
import Footer from '../components/footer';

function Home() {
    return (
        <>
            <Header roundedHeaderButton={false} />
            <Hero tw='mb-0 py-0'/>
            <FeaturedData dataPosts={dataPosts}/>
            <Footer />
        </>
    );
}


export default Home;