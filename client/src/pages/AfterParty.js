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
                    <MainHeader>Come Party With Us!</MainHeader> <On>On</On><MainHeader>19th September 2020</MainHeader>
                </Tilt>
                <At>@</At>
                <MainHeader>2909 Martin St. Bellingham, WA 98229</MainHeader>
                <br/>
                <B2>
                    Please join us for a small afterparty at the same location as the ceremony! We will have music, drinks, dancing, and food. We also plan to do a bar crawl 
                    starting at Structures Brewing at 8:30pm. Please make sure you have reliable transportation if you will be drinking. Bikes are very encouraged!
                </B2>
            </HeadingContainer>
        </Fragment>
    </PageWithNav>

);
