import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import Nav2 from "../../components/Nav2";
import { H3 } from "../../components/Fonts/Secondary";
import PageContainer from "../../components/PageContainer";
import { HOME, getTitleByPath } from "../../routes/routes";
import { Nav, Navbar } from "react-bootstrap";

class PageWithNav extends Component {
  goToHome = () => {
    const { history } = this.props;
    history.push(HOME.path);
  };

  render() {
    const { location, children } = this.props;
    return (
      <Fragment>
        <Navbar className="bg-light justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/wedding">Wedding</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/after">After Party</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/ourstory">Our Story</Nav.Link>
          </Nav>
        </Navbar>
        <Nav2>
          <H3 onClick={this.goToHome}>{getTitleByPath(location.pathname)}</H3>
        </Nav2>
        <PageContainer>{children}</PageContainer>
      </Fragment>
    );
  }
}

export default withRouter(PageWithNav);
