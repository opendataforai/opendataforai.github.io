import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import FeaturedData from '../components/featuredData';
import { dataPosts } from '../components/dataPosts';
import Footer from '../components/footer';
// eslint-disable-next-line no-unused-vars
import tw from 'twin.macro';
import { css } from 'styled-components';

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