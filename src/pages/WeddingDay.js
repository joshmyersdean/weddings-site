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
        <MainHeader>20th June 2020</MainHeader>
        <VenueInfo>Millersylvania State Park Retreat Center</VenueInfo>
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
        <a href="https://www.priceline.com/relax/in/Olympia,WA,US/rooms/1/?adp=1t4&city_id=3000023353&gclid=EAIaIQobChMI2_6YkcrY5AIV-R6tBh1nJQESEAAYBCAAEgKRZPD_BwE&kw=olympia%20wa%20hotels&match=e&query=olympia%20wa%20hotels&refclickid=d%3Achotel14935375410g2705515167601402377001kwd-134496855%7C9033356%7C1t4&refid=PLGOOGLECPC&slingshot=1749&statename=Washington">
          hotels
        </a>{" "}
        in and around Olympia.
      </P>

      <SectionTitle>Directions</SectionTitle>
      <DirectionsContainer>
        <DirectionsFrame
          title="Directions"
          width="300"
          height="300"
          src={
            "https://www.google.com/maps/embed/v1/place?key=" +
            process.env.REACT_APP_API_KEY +
            "&q=millersylvania+environmental+learning+center"
          }
          frameborder="0"
          scrolling="no"
        />
      </DirectionsContainer>

      <SectionTitle>Details</SectionTitle>
      <P>
        One again, kids under the age of 14 are welcome at the ceremony but we
        ask that they do not come to the after party. Well behaved dogs are
        welcome at all times. @TODO Itineray
      </P>
    </Fragment>
  </PageWithNav>
);
