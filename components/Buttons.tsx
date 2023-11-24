import styled from "@emotion/styled";
import ButtonComp from "@mui/material/Button";
import IconButtonComp from "@mui/material/IconButton";
interface Props {
  mt?: string;
  lh?: string;
  width?: string;
  weight?: string;
  fontColor?: string;
  bg?: string;
  border?: string;
  height?: string;
  onClick?: any;
  borderRadius?: string;
  fontSize?: string;
  padding?: string;
  hover?: string;
  ls?: string;
}
export const PrimaryButton = styled(ButtonComp)<Props>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "600")};
  text-align: center;
  text-transform: uppercase;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "3px")};

  height: ${(props) => (props.height ? props.height : "58px")};
  color: ${(props) => (props.fontColor ? props.fontColor : "white")};
  font-family: "Outfit", sans-serif;
  width: ${(props) => (props.width ? props.width : "300px")};
  line-height: ${(props) => (props.lh ? props.lh : "14px")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "25px"};
  border: ${(props) => (props.border ? props.border : "4px solid #28A4C0")};
  background: ${(props) => (props.bg ? props.bg : "transparent")};
  &:hover {
    background: ${(props) =>
      (props.hover ? props.hover : "rgb(142, 190, 244,0.2)") + " !important"};
  }
  &:disabled {
    color: white;
    cursor: not-allowed;
  }
`;
export const PrimaryIconButton = styled(IconButtonComp)<Props>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  text-align: center;
  text-transform: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  height: ${(props) => (props.height ? props.height : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  width: ${(props) => (props.width ? props.width : "")};
  line-height: ${(props) => (props.lh ? props.lh : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  border: ${(props) => (props.border ? props.border : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  &:hover {
    background: ${(props) => (props.hover ? props.hover : "") + " !important"};
  }
  &:disabled {
    color: white;
    cursor: not-allowed;
  }
`;
