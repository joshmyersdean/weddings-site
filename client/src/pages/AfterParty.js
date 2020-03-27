import React, {Fragment} from "react";
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import {H5, H6, B2} from "../components/Fonts/Fonts";
import Tilt from 'react-tilt';

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(H5)`
  margin-bottom: 0.25rem;
  text-align: center;
  font-size: 36px;
`;
const On = styled(H5)`
 text-align: center;
  font-size: 36px;
  color: ${props => props.theme.colors.background.quintenary};
`

const VenueInfo = styled(H6)`
  margin-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.background.quintenary};
`;

const SectionTitle = styled(H6)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.background.quintenary};
`;

const P = styled(B2)`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.foreground.secondary};
`;

const DirectionsContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const DirectionsFrame = styled.iframe`
  border: none;
`;
const At = styled(H6)`
    font-size: 2.8em;
top: .1em;
position: relative;
color:#537d36;
text-align: center;
`
export default () => (
    <PageWithNav>
        <Fragment>

            <HeadingContainer>
                <Tilt>
                    <MainHeader>Come Party With Us!</MainHeader> <On>On</On><MainHeader>18th September 2020</MainHeader>
                </Tilt>
                <At>@</At>
                <MainHeader>Excelsior Group Campground</MainHeader>
                <br/>
                <B2>
                    Come partaaaaay with us!! We encourage everyone to bring a 6 pack of your favorite
                    beer/cider/anything to share! (Shit beer strongly encouraged). We will have a bunch of food for
                    everyone to accomadate all dietary restrictions, but keep in mind that no animal products will be
                    served at this event. We will also have an edible bar for those who do not wish to drink! Dancing is
                    mandatory, don't be a square.
                </B2>
            </HeadingContainer>

            <SectionTitle>Accomodation</SectionTitle>
            <P>
                Please stay the night! We rented out the whole retreat center so there is ample bunk style housing,
                camping, and even hotels near by! Don't drive intoxicated, it's not good for anyone.
            </P>
            <SectionTitle>Directions</SectionTitle>
            <DirectionsContainer>
                <DirectionsFrame
                    title="Directions"
                    width="300"
                    height="300"
                    id="gmap_canvas"
                    src={key} // your key here
                    frameborder="0"
                    scrolling="no"
                />
            </DirectionsContainer>

        </Fragment>
    </PageWithNav>

);
