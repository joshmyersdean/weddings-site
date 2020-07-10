import React, { Fragment } from "react";
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import { H5, H6, B2, H3 } from "../components/Fonts/Fonts";
import FlipPage from "react-flip-page";
import tinder from "../static/tinder.png";
import julia from "../static/julia.jpg";
import cover from "../static/cover.jpg"
import proposal from "../media/proposal.mp4";
import engaged from "../static/engaged.jpg";
import alleycat from "../static/alleycat.jpg";
import ccc from "../static/ccc.jpg";
import baker from "../static/baker.jpg";
import moag from "../static/moag.jpg";
import coffee from "../static/coffee.jpg";
import know from "../static/know.jpg";
import graduate from "../static/graduate.jpg";
import teen from "../static/14.jpg";

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
              height={"512"}
              width={"512"}
              className="img-responsive"
	      src={cover}
            />
          </div>
          <div className="book-pg">
            <article>
              <h2>First We Met On Tinder... </h2>
              <img
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={tinder}
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>Then We Got Coffee At Spruce Confections...</h2>
              <img
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={coffee}
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>Then We Spent 3 Months Becoming Close Friends...</h2>
              <img
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={know}
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
                height={"512"}
                width={"512"}
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
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={baker}
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>Like Mountain Biking in Moab!</h2>
              <img
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={moag}
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>And running new distances!</h2>
              <img
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={ccc}
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>And Graduating College!</h2>
              <img
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={graduate}
              />
            </article>
          </div>
          <div className="book-pg">
            <article>
              <h2>And Summiting Our First 14ers!</h2>
              <img
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={teen}
              />
            </article>
          </div>
            <div className="book-pg">
              <article>
                <h2>And Getting Rowdy On Fixed Gear Bikes!</h2>
                <img
                  height={"512"}
                  width={"512"}
                  className="img-responsive"
                  src={alleycat}
                />
              </article>
            </div>

          <div className="book-pg">
            <article>
              <h2>But Getting Engaged Definitely Takes the Cake!</h2>
              <img
                height={"512"}
                width={"512"}
                className="img-responsive"
                src={engaged}
              />
            </article>
          </div>
        </FlipPage>
      </div>
      <hr />
      <div className="row" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <div className="video-container">
        <H3>How I Proposed</H3>
        <video controls muted className="proposal" fluid={true} >
          <source src={proposal} />
        </video>
    </div>
    </div>
    </Fragment>
  </PageWithNav>
);
