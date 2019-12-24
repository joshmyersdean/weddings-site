import React, { Fragment } from "react";
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import { H5, H6, B2 } from "../components/Fonts/Fonts";
import { Form, Input } from "formsy-react-components";

export default () => (
  <PageWithNav>
    <Fragment>
      <Form
        onSubmit={data => {
          console.log(data);
        }}
      >
        <Input
          name="firstname"
          label="Please Enter Your First and Last Name."
        />
        <Input name="guests" label="Are You Bringing a Guest?" />
        <Input name="diet" label="Do You Have Any Food Allergies?" />
        <input
          name="button"
          className="btn btn-primary"
          formnovalidate=""
          type="submit"
        />
      </Form>
    </Fragment>
  </PageWithNav>
);
