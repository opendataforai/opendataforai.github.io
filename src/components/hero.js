import React from 'react';
import HeroBanner from "../images/hero-3-bg-removed.png";

import tw from 'twin.macro';
import { css } from "styled-components/macro"; // eslint-disable-line no-unused-vars
import styled from 'styled-components'; // eslint-disable-line no-unused-vars


const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-8 md:py-10`;
// const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
// const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const LeftColumn = tw.div`relative lg:w-6/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-0 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
const PrimaryAction = tw.button`rounded-full px-10 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 
                                bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 
                                hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default function Hero() {
    return (
        <Container>
            <TwoColumn>
                <LeftColumn>
                    <Heading>
                        Open Data platform for <span tw='text-primary-500'>Artificial Intelligence</span> 
                    </Heading>
                    <Paragraph>
                        Discover high quality, usable Indian datasets for AI research and development. <br />
                        Explore, contribute, and collaborate on data projects to drive innovation in AI for India. <br />
                        This is a test line
                        {/* <span tw="flex bg-black font-bold text-lg">
                            <span tw="text-orange-500">I</span>
                            <span tw="text-white">n</span>
                            <span tw="text-green-600">d</span>
                            <span tw="text-blue-800">i</span>
                            <span tw="text-orange-500">a</span>
                        </span>. */}
                    </Paragraph>
                    <PrimaryAction tw="ml-6">Explore Data</PrimaryAction>
                    <PrimaryAction
                        tw="ml-6"
                        onClick={() => {
                            const section = document.getElementById("featured-data");
                            if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        >
                        Featured Data
                        </PrimaryAction>
                </LeftColumn>
                <RightColumn>
                    <IllustrationContainer>
                    <img tw="min-w-0 w-full max-w-lg xl:max-w-2xl" src={HeroBanner} alt="Hero Banner" />
                    </IllustrationContainer>
                </RightColumn>
            </TwoColumn>

        </Container>
    )
}