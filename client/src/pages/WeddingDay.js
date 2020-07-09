import React, {Fragment} from "react";
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import {H5, B2, H6, H4} from "../components/Fonts/Fonts";
import {HOME, AFTER_PARTY} from "../routes/routes";
import {Nav, Navbar} from "react-bootstrap";


const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(H5)`
  margin-bottom: 0.25rem;
  text-align: center;
  font-size: 36px;
`;

const VenueInfo = styled(H5)`
  margin-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.background.quintenary};
`;

const At = styled(H6)`
    font-size: 2.8em;
top: .1em;
position: relative;
color:#537d36;
text-align: center;
`

const SectionTitle = styled(H5)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.background.quintenary};
`;

const SectionTitle2 = styled(H5)`
  margin-top: 1rem;
  margin-bottom: .5rem;
  text-align: center;
`;

const P = styled(B2)`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.foreground.secondary};
`;

const HotelName = styled(B2)`
  text-decoration: underline;
`;

const DirectionsContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const DirectionsFrame = styled.iframe`
  border: none;
`;

export default () => (
    <PageWithNav>
        <Fragment>
            <HeadingContainer>
                <MainHeader>Join Us On <br/>19th September 2020</MainHeader>
                <At>@</At>
                <MainHeader>2909 Martin St. Bellingham, WA 98226</MainHeader>
                <SectionTitle2>For Our Wedding Ceremony</SectionTitle2>
                <br />
                <B2>
                    Our wedding ceremony will take place at 3:30pm  at a beautiful backyard at 2909 Martin St. and the
                    bar crawl will begin at 8:30pm starting at Structures Brewing. We ask that everyone who attends try to bring
                    a plant based meal (signup link in details below). So excited to celebrate with everyone!
                </B2>
            </HeadingContainer>

            <SectionTitle>Accomodation</SectionTitle>
            <P>
                There are some local {" "}
                <a href="https://www.priceline.com/relax/in/Bellingham,%20WA/rooms/1">
                    hotels
                </a>{" "}
                in and around Bellingham as well as various campgrounds and Air BnB's.
            </P>

            <SectionTitle>Directions</SectionTitle>
            <DirectionsContainer>
                <DirectionsFrame
                    title="Directions"
                    width="300"
                    height="300"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.8074606664686!2d-122.41756008389471!3d48.76819547927866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485a545504baf67%3A0x90c8b27d1a52783a!2s2909%20Martin%20St%2C%20Bellingham%2C%20WA%2098226!5e1!3m2!1sen!2sus!4v1594322911516!5m2!1sen!2sus" 
                    frameborder="0"
                    scrolling="no"
                />
            </DirectionsContainer>

            <SectionTitle>Details</SectionTitle>
            <P>
                Once again we ask that you leave the kiddos at home and if you are planning on brining a meal make sure to sign up {" "}
                <a href="https://docs.google.com/spreadsheets/d/1UueEuPFJ07c8qcu0rs_jJBsPdrhUR-KIXV7ez2CgmV0/edit?usp=sharing"> here </a>{" "}. <br />
                Itinerary will be announced as the date comes closer. Semi-casual-formal attire would be neat but come in whatever is comfortable!
            </P>
        </Fragment>
    </PageWithNav>
);
