import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { dataPosts } from './dataPosts';

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);

const Container = tw.div`relative`;

const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

// const Grid = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Grid = tw.div`grid gap-8 lg:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]`;
const Column = tw.div`mt-24`;


function DataCard({ postMessage }) {
    return (
        <Card>
            <Image imageSrc={postMessage.imageSrc} />
            <Category>{postMessage.category}</Category>
            <Title>{postMessage.title}</Title>
            <Link href={postMessage.url}>Read More</Link>
        </Card>
    )
};


export default function ColumnGrid({ dataPosts}){
    // const Column = tw.div`mt-24 lg:w-${1 / noOfColumns}`;
    // const Column = tw.div`mt-24 lg:w-1/3`;
    return (
        // <Container>
            <Grid>
                {dataPosts.map((post, index) => (
                    <Column key={index}>
                        <DataCard postMessage={post} />
                    </Column>
                ))}
            </Grid>
        // </Container>
    )
};
