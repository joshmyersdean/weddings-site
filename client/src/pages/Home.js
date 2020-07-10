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

const WEDDING_DATE = new Date(2020, 8, 19);
let TODAY = new Date();

class Home extends PureComponent {

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
            join us for a fun filled day of drinking and debauchery at
            our dearest friend Tyler's new backyard! We encourage you to come out with us after for a night of bar crawling in fancy attire after the festivities!
          </SubTitle>
          <SubTitle>
            <em>
              Note: We are asking people to please leave their children at home for this! Also all events are COVID pending, and more details will be sent out via email closer to the actual day.
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
            <Button buttonType={ButtonTypes.OUTLINE} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.zola.com/registry/joshandjuliaseptember19';
      }}>
              Registry
            </Button>
          </VerticalButtonGroup>
        </HomeContainer>
      </Header>
    );
  }
}

export default Home;
