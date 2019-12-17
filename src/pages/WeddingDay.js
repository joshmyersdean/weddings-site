import React, { Fragment } from "react";
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import { H5, B2, H6 } from "../components/Fonts/Fonts";
import { HOME, AFTER_PARTY, RSVP_ROUTE } from "../routes/routes";
import { Nav, Navbar } from "react-bootstrap";


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
        <MainHeader>18th September 2020</MainHeader>
        <VenueInfo>Excelsior Group Campground</VenueInfo>
        <B2>
          Our wedding ceremony will take place at x time at y place and the
          party will begin at 5pm at z place.
        </B2>
      </HeadingContainer>

      <SectionTitle>Accomodation</SectionTitle>
      <P>
        We have rented out the entire retreat center so there are 18 heated bunk
        style cabins that can hold roughly 144 people, camping is also available
        in the park for those who would like a bit more privacy. For those who
        do not wish to camp or bunk there are plently of{" "}
        <a href="https://www.priceline.com/relax/in/Bellingham,%20WA/rooms/1">
          hotels
        </a>{" "}
        in and around Olympia.
      </P>

      <SectionTitle>Directions</SectionTitle>
      // @TODO

      <SectionTitle>Details</SectionTitle>
      <P>
        One again, kids under the age of 14 are welcome at the ceremony but we
        ask that they do not come to the after party. Well behaved dogs are
        welcome at all times. @TODO Itineray
      </P>
    </Fragment>
  </PageWithNav>
);
