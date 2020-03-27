import styled from "styled-components";

export const H2 = styled.h2`
  @import url("https://fonts.googleapis.com/css?family=Unica+One&display=swap");
  font-size: ${props => props.theme.fonts.h2.size};
  font-weight: ${props => props.theme.fonts.h2.weight};
  letter-spacing: ${props => props.theme.fonts.h2.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
  font-family: "Unica One", cursive;
`;

export const H3 = styled.h3`
  @import url("https://fonts.googleapis.com/css?family=Unica+One&display=swap");
  font-size: ${props => props.theme.fonts.h3.size};
  font-weight: ${props => props.theme.fonts.h3.weight};
  letter-spacing: ${props => props.theme.fonts.h3.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
  font-family: "Unica One", cursive;
`;

export const H4 = styled.h4`
  @import url("https://fonts.googleapis.com/css?family=Unica+One&display=swap");
  font-size: ${props => props.theme.fonts.h4.size};
  font-weight: ${props => props.theme.fonts.h4.weight};
  letter-spacing: ${props => props.theme.fonts.h4.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
  font-family: "Unica One", cursive;
`;

export const H5 = styled.h5`
  @import url("https://fonts.googleapis.com/css?family=Unica+One&display=swap");
  font-size: ${props => props.theme.fonts.h5.size};
  font-weight: ${props => props.theme.fonts.h5.weight};
  letter-spacing: ${props => props.theme.fonts.h5.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
  font-family: "Unica One", cursive;
`;

export const H6 = styled.h6`
  @import url("https://fonts.googleapis.com/css?family=Unica+One&display=swap");
  font-size: ${props => props.theme.fonts.h6.size};
  font-weight: ${props => props.theme.fonts.h6.weight};
  letter-spacing: ${props => props.theme.fonts.h6.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
  font-family: "Unica One", cursive;
`;
