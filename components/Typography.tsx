import styled from "styled-components";
interface TextProps {
  tt?: string;
  weight?: string;
  lHeight?: string;
  fontSize?: string;
  fontColor?: string;
  td?: string;
  ellipsis?: boolean;
  pointer?: boolean;
  justify?: boolean;
  family?: any;
  ls?: any;
  hover?: any;
}
const H1 = styled.h1<TextProps>`
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
`;
const H2 = styled.h2<TextProps>`
  font-style: normal;
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};

  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
`;
const H3 = styled.h3<TextProps>`
  font-style: normal;
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};

  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
`;
const H4 = styled.h4<TextProps>`
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
`;
const H5 = styled.h5<TextProps>`
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
`;
const P = styled.p<TextProps>`
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "24px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  overflow: ${(props) => (props.ellipsis ? "hidden" : "")};
  text-overflow: ${(props) => (props.ellipsis ? " ellipsis" : "")};
  display: ${(props) => (props.ellipsis ? " -webkit-box" : "")};
  -webkit-line-clamp: ${(props) => (props.ellipsis ? "2" : "")};
  -webkit-box-orient: ${(props) => (props.ellipsis ? "vertical" : "")};
  cursor: ${(props) => (props.pointer ? "pointer" : "")};
  hyphens: ${(props) => (props.justify ? "auto" : "")};
  text-align: ${(props) => (props.justify ? "justify" : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
`;
const A = styled.a<TextProps>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "24px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  letter-spacing: ${(props) => props.ls && props.ls};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  text-decoration: none;
  font-family: ${(props) =>
    props.family ? props.family : "'Outfit', sans-serif"};
  margin-bottom: 0px;
  &:hover {
    opacity: ${(props) => props.hover && "0.8"};
  }
`;
export { H1, H2, H3, H4, H5, P, A };
