import React, { Fragment  } from "react";
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import { H5, H6, B2  } from "../components/Fonts/Fonts";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(H5)`
  margin-bottom: 0.25rem;
  text-align: center;
`;

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

export default () => (
      <PageWithNav>
        <Fragment>
          <HeadingContainer>
            <MainHeader>20th June 2020</MainHeader>
            <VenueInfo>Millersylvania State Park Retreat Center</VenueInfo>
            <B2>
           Come partaaaaay with us!! We encourage everyone to bring a 6 pack of your favorite beer/cider/anything to share! (Shit beer strongly encouraged). We will have a bunch of food for everyone to accomadate all dietary restrictions, but keep in mind that no animal products will be served at this event. We will also have an edible bar for those who do not wish to drink! Dancing is mandatory, don't be a square.
           </B2>
          </HeadingContainer>

          <SectionTitle>Accomodation</SectionTitle>
          <P>
          Please stay the night! We rented out the whole retreat center so there is ample bunk style housing, camping, and even hotels near by! Don't drive intoxicated, it's not good for anyone.
          </P>
          <SectionTitle>Directions</SectionTitle>
          <DirectionsContainer>
            <DirectionsFrame
              title="Directions"
              width="300"
              height="300"
              id="gmap_canvas"
              src={"https://www.google.com/maps/embed/v1/place?key="+process.env.REACT_APP_API_KEY+"&q=millersylvania+state+park"}
              frameborder="0"
              scrolling="no"
            />
          </DirectionsContainer>

        </Fragment>
      </PageWithNav>

);
