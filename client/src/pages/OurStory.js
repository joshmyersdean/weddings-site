import React, { Fragment } from "react";
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import { H5, H6, B2, H3 } from "../components/Fonts/Fonts";
import FlipPage from "react-flip-page";
import tinder from "../static/tinder.png";
import julia from "../static/julia.jpg";
import cover from "../static/cover.jpg"
import proposal from "../media/proposal.mp4";

const theEndStyle = {
  alignItems: "flex-end",
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  padding: 10
};
const theEnd = <div style={theEndStyle}>The End!</div>;
export default () => (
  <PageWithNav>
    <Fragment>
      <div className={"book-container"}>
        <FlipPage
          className={"book"}
          showSwipeHint
          orientation={"horizontal"}
          lastComponent={theEnd}
        >
          <div className="book-pg">
            <h2>The Story Of Us</h2>
            <img
              height={"400"}
              width={"350"}
              className="img-responsive"
	      src={cover}
            />
          </div>
          <div className="book-pg">
            <article>
              <h2>First We Met On Tinder... </h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src={tinder}
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>Then We Got Coffee At Spruce Confections...</h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/21577065_1462683433824264_294948654190428160_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=_EiccLAfudIAX8o9Ilq&oh=7423f41bd18d641e33a642ec9c6f2adc&oe=5E7EF415"
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>Then We Spent 3 Months Becoming Close Friends...</h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/23164133_143363326288468_8930349727036211200_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=0DJkj8WlZPEAX-YkYLf&oh=40bdf174d038c1d36c7531e4f15ac472&oe=5E937396"
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>
                Then We Ran Up a Mountain and Started Officially Dating on
                12/6/2017!
              </h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src={julia}
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>
                Since then we have had a lot of rad adventures together...
              </h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/25010283_1736723559673292_6021953936116678656_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=108&oh=ecd410be4def760bb2d63b9ca4434954&oe=5E81405C"
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>Like Mountain Biking in Moab!</h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/28752897_951601411656616_6994496911759638528_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&oh=f512adccd3074ceb88fe3dcb3a39146f&oe=5E79B122"
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>And running new distances!</h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/28752908_796325353893556_2684142676378386432_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=X2Wyr1BByUkAX_ozoID&oh=0d6e8433a304a5a2401025df10e192b9&oe=5E7D6624"
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>And Graduating College!</h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/31571511_154218668762418_5699956771896950784_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=106&oh=a8f02cac40da620edce89e29ee4884be&oe=5E8E4B3B"
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>And Summiting Our First 14ers!</h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/40326533_306397066830070_5800131263273023926_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=MMYOvCqNwMwAX_blHbx&oh=f4f70d49707c8bb132ff44f026a0931a&oe=5E97F858"
              />
            </article>
          </div>

          <div className="book-pg">
            <article>
              <h2>But Getting Engaged Definitely Takes the Cake!</h2>
              <img
                height={"400"}
                width={"350"}
                className="img-responsive"
                src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/50124788_399988723904455_629405158935971769_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=90-MVkQsbecAX-Jvmw7&oh=0fd0131245401e920625b7642b630631&oe=5E76AD44"
              />
            </article>
          </div>
        </FlipPage>
      </div>
      <hr />
      <div className="video-container">
        <H3>How I Proposed</H3>
        <video controls muted className="proposal">
          <source src={proposal} />
        </video>
     </div>
    </Fragment>
  </PageWithNav>
);
