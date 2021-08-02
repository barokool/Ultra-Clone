import React from 'react'
import { Footerdiv, Para, Heading, FooterButton, Input, SubsDiv, GridDiv, SmallGridDiv, SmallFooterDiv, Link, Span, Logo, LinkDiv, LogoHeading } from "./Footer.element"
const Footer = () => {
    return (
        <Footerdiv>
            <SubsDiv>
                <Heading>Join our exclusive membership to receive the latest news and trends </Heading>
                <Para>You can unsubscribe at any time</Para>
                <form>
                    <Input value="Your Email" />
                    <FooterButton>Subscribe</FooterButton>
                </form>
            </SubsDiv>
            <GridDiv>

                <SmallGridDiv>
                    <Heading>About us</Heading>
                    <Para>How it works</Para>
                    <Para>Careers</Para>
                    <Para>Terms of service</Para>

                </SmallGridDiv>
                <SmallGridDiv>
                    <Heading>Contact Us</Heading>
                    <Para>Support</Para>
                    <Para>Destinations</Para>
                    <Para>Sponsorships</Para>
                </SmallGridDiv>
                <SmallGridDiv>
                    <Heading>Videos</Heading>
                    <Para>Submit video</Para>
                    <Para>Agency</Para>
                    <Para>Influecer</Para>
                </SmallGridDiv>
                <SmallGridDiv>
                    <Heading>Social Media</Heading>
                    <Para>Instagram</Para>
                    <Para>Facebook</Para>
                    <Para>Twitter</Para>
                </SmallGridDiv>
            </GridDiv>
            <SmallFooterDiv>
                <Logo>
                    <LogoHeading>ULTRA</LogoHeading>
                </Logo>
                <div>
                    <Span>
                        Ultra 2020
                    </Span>
                </div>

                <LinkDiv>
                    < Link>Insta</ Link>
                    < Link>Facebook</ Link>
                    < Link>Twitter</ Link>
                </LinkDiv>
            </SmallFooterDiv>
        </Footerdiv>
    )
}

export default Footer
