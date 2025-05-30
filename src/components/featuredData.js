import React from 'react';
import tw from 'twin.macro';
// import styled from 'styled-components';
import ColumnGrid from './dataCard';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-0 lg:py-4`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const HeadingDescription = tw.p`mt-0 font-medium text-gray-600 text-center max-w-sm`;
const PrimaryAction = tw.button`rounded-full px-10 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 
                                bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 
                                hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
const FullScreenCenteredWrapper = tw.div`flex items-center justify-center`;


export default function FeaturedData({dataPosts}) {
    return (
        <Container id='featured-data'>
            <Content>
                <HeadingInfoContainer>
                    <HeadingTitle>Featured Data</HeadingTitle>
                    <HeadingDescription>Some Amazing data</HeadingDescription>
                </HeadingInfoContainer>
                <ColumnGrid dataPosts={dataPosts} />
                <FullScreenCenteredWrapper>
                    <PrimaryAction>Explore More Datasets</PrimaryAction>
                </FullScreenCenteredWrapper>
                
            </Content>
        </Container>
    );
};