import React, { PureComponent } from "react";
import styled from "styled-components";
import { H2 } from "../components/Fonts/Secondary";
import { S1 } from "../components/Fonts/Fonts";
import Button, {
  TYPES as ButtonTypes,
  STYLES as ButtonStyles
} from "../components/Button";
import PageContainer from "../components/PageContainer";
import { VerticalButtonGroup } from "../components/ButtonGroup";
import Countdown from "../components/Countdown";
import {
  RSVP_ROUTE,
  WEDDING_DAY,
  OUR_STORY,
  AFTER_PARTY
} from "../routes/routes";
import banner from "./Banner.jpg";
import Header from "../components/Header";
import Tilt from "react-tilt";

const Banner = styled.img`
  margin-bottom: 1rem;
  width: 100%;
`;

const HomeContainer = styled(PageContainer)`
  margin-top: 4rem;
  @media (min-width: 768px) {
    margin-top: 9rem;
  }
`;

const MainTitle = styled(H2)`
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SubTitle = styled(S1)`
  color: ${props => props.theme.colors.foreground.secondary};
  margin-bottom: 1rem;
  text-align: center;
`;

const DaysLeft = styled(Countdown)`
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.foreground.secondary};
`;

const WEDDING_DATE = new Date(2020, 9, 18);
const TODAY = new Date();

class Home extends PureComponent {
  goToRSVP = () => {
    const { history } = this.props;
    history.push(RSVP_ROUTE.path);
  };

  goToWeddingDay = () => {
    const { history } = this.props;
    history.push(WEDDING_DAY.path);
  };

  goToAfterParty = () => {
    const { history } = this.props;
    history.push(AFTER_PARTY.path);
  };

  goToStory = () => {
    const { history } = this.props;
    history.push(OUR_STORY.path);
  };

  render() {
    return (
      <Header>
        <HomeContainer>
          <Tilt className="Tilt">
            <Banner src={banner} alt="Banner" />
          </Tilt>
          <Tilt className="Tilt">
            <MainTitle>Josh and Julia, J&#178;</MainTitle>
          </Tilt>
          <SubTitle>
            <DaysLeft fromDate={TODAY} toDate={WEDDING_DATE} />
          </SubTitle>
          <SubTitle>
            We're getting married! Excited to share the day with ya'll. Come
            join us for a fun filled evening of drinking and debauchery at
            Excelsior Group Campground! We encourage you to stay the night and
            to party as hard as you would like, because after all this is a
            celebration!
          </SubTitle>
          <SubTitle>
            Don’t forget to RSVP <strong>before May 15th</strong> and to include
            any dietary restrictions/allergies you may have.{" "}
            <em>
              Note: No animal products will be served at this wedding, we make
              good food, I promise!
            </em>
          </SubTitle>
          <SubTitle></SubTitle>
          <SubTitle>
            We are so looking forward to celebrating with you all!
          </SubTitle>
          <VerticalButtonGroup center>
            <Button
              buttonType={ButtonTypes.OUTLINE}
              onClick={this.goToWeddingDay}
            >
              Wedding Day
            </Button>
            <Button
              buttonType={ButtonTypes.OUTLINE}
              onClick={this.goToAfterParty}
            >
              After Party
            </Button>
            <Button buttonType={ButtonTypes.OUTLINE} onClick={this.goToStory}>
              Our Story
            </Button>
            <Button buttonStyle={ButtonStyles.PRIMARY} onClick={this.goToRSVP}>
              RSVP
            </Button>
          </VerticalButtonGroup>
        </HomeContainer>
      </Header>
    );
  }
}

export default Home;
