import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components'; // eslint-disable-line no-unused-vars
import { css } from 'styled-components/macro'; //eslint-disable-line

import logo from "../images/logo1.png";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const AllColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;
const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-20`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;


export default function Footer() {
    return (
        <Container>
            <AllColumns>
                <WideColumn>
                    <LogoContainer>
                        <LogoImg src={logo} />
                        <LogoText>Open Data for AI</LogoText>
                    </LogoContainer>
                    <CompanyDescription>
                        Open Data for AI is a platform that provides high-quality, usable datasets for AI research and development in India.
                    </CompanyDescription>
                </WideColumn>
                <Column>
                    <ColumnHeading>The Project</ColumnHeading>
                    <LinkList>
                        <LinkListItem>
                            <Link href="/about">About Us</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="/contribute">Contribute</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="/contact">Contact Us</Link>
                        </LinkListItem>
                    </LinkList>
                </Column>
                <Column>
                    <ColumnHeading>Quick Links</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="/datasets">Datasets</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="/resources">Resources</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="/community">Community</Link>
                            </LinkListItem>

                            <LinkListItem>
                                <Link href="/insights">Insights</Link>
                            </LinkListItem>
                        </LinkList>
                </Column>
                <Column>
                    <ColumnHeading>Logistics</ColumnHeading>
                    <LinkList>
                        <LinkListItem>
                            <Link href="/terms">Terms of Service</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="/privacy">Privacy Policy</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="/cookies">Cookie Policy</Link>
                        </LinkListItem>
                    </LinkList>
                </Column>

            </AllColumns>

        </Container>

    )
}