import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { P, H1 } from "./Typography";
import { PrimaryButton } from "./Buttons";
interface WrapperProps {
  size?: any;
  color?: any;
  bg?: any;
  width?: any;
  height?: any;
  borderRadius?: any;
  border?: any;
  ms?: any;
  me?: any;
  mt?: any;
  mb?: any;
  ps?: any;
  pe?: any;
  pt?: any;
  pb?: any;
  p?: any;
  family?: any;
  boxShadow?: any;
  pointer?: boolean;
  position?: any;
  top?: any;
  bottom?: any;
  left?: any;
  right?: any;
  hover?: any;
  minWidth?: any;
  borderBottom?: any;
  borderBottomHover?: any;
  zIndex?: any;
}
const Wrapper = styled.div<WrapperProps>`
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  width: ${(props) => (props.width ? props.width : "")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  border: ${(props) => (props.border ? props.border : "")};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "")};
  margin-left: ${(props) => (props.ms ? props.ms : "")};
  margin-right: ${(props) => (props.me ? props.me : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  padding-left: ${(props) => (props.ps ? props.ps : "")};
  padding-right: ${(props) => (props.pe ? props.pe : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  font-family: ${(props) => (props.family ? props.family : "")};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "")};
  position: ${(props) => (props.position ? props.position : "")};
  top: ${(props) => (props.top ? props.top : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  left: ${(props) => (props.left ? props.left : "")};
  right: ${(props) => (props.right ? props.right : "")};
  cursor: ${(props) => (props.pointer ? "pointer" : "")};
  z-index: ${(props) => (props.zIndex ? props.zIndex : "")};
  &:hover {
    background-color: ${(props) => (props.hover ? props.hover : "")};
    border-bottom: ${(props) =>
      props.borderBottomHover ? props.borderBottomHover : ""};
    margin-bottom: ${(props) => props.borderBottomHover && "-3px"};
  }
`;
const SpanWrapper = styled.span<WrapperProps>`
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  border: ${(props) => (props.border ? props.border : "")};
  margin-left: ${(props) => (props.ms ? props.ms : "")};
  margin-right: ${(props) => (props.me ? props.me : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  padding-left: ${(props) => (props.ps ? props.ps : "")};
  padding-right: ${(props) => (props.pe ? props.pe : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  font-family: ${(props) => (props.family ? props.family : "")};
`;
const LoadingSpinner = () => {
  return (
    <>
      <Wrapper
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          src={"/assets/loading.svg"}
          alt="loading..."
          width={150}
          height={150}
        />
      </Wrapper>
    </>
  );
};
const TimerBox = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <>
      <Wrapper
        position={isResponsive ? "relative" : "absolute"}
        bottom={isResponsive ? "" : "-1%"}
        left={isResponsive ? "" : "54%"}
        color="white"
        bg="black"
        className="p-5"
        width={isResponsive ? "330px" : "400px"}
        borderRadius={"13px"}
        style={{ zIndex: 1 }}
      >
        <Wrapper className="flex flex-col align-center justify-center text-center gap-5">
          <P fontColor="gray" fontSize="14px">
            Super Bounty Up to 45%
          </P>
          <Wrapper
            className={`flex flex-row align-center justify-center ${
              isResponsive ? "gap-3" : "gap-6"
            }`}
          >
            {[0, 1, 2, 3].map((val, index) => {
              return (
                <>
                  <Wrapper
                    ps="10px"
                    pe="10px"
                    pt="15px"
                    pb="15px"
                    bg="white"
                    borderRadius="9px"
                  >
                    <P
                      className="mb-0"
                      fontSize="31px"
                      fontColor="black"
                      weight="600"
                    >
                      00
                    </P>
                  </Wrapper>
                </>
              );
            })}
          </Wrapper>
          <H1 fontSize="38px" fontColor="white" ls="1px" weight="600">
            1RAIN=0.3 DUEL
          </H1>
          <Wrapper className="flex flex-row align-center justify-center">
            <PrimaryButton
              bg="linear-gradient(to bottom, #2a70fa, #671acd)"
              border="none"
              hover="#2a70fa"
            >
              Buy Crypto Tokens
            </PrimaryButton>
          </Wrapper>
          <P
            className="mb-0 ms-2 me-2"
            fontColor="gray"
            fontSize="13px"
            lHeight="21px"
            weight="500"
            ls="1px"
          >
            RM puchase will be vested for 2 months cliff followed by 11 months
            variable release.
          </P>
          <Wrapper className="flex flex-col align-center justify-center gap-1">
            <Wrapper className="flex flex-row align-center justify-between ms-3 me-3">
              <P className="mb-0" fontColor="gray" fontSize="12px">
                $5,000,000
              </P>
              <P className="mb-0" fontColor="gray" fontSize="12px">
                $25,000,000
              </P>
            </Wrapper>
            <Wrapper className="flex flex-row align-center justify-center">
              <Wrapper
                width="330px"
                borderRadius={"13px"}
                position="relative"
                height="18px"
                bg="#44454A"
              >
                <Wrapper
                  borderRadius={"13px"}
                  position="absolute"
                  width="30%"
                  height="18px"
                  bg="#84CDED"
                  style={{ zIndex: 5 }}
                ></Wrapper>
                <Wrapper
                  // borderRadius={"13px"}
                  position="absolute"
                  width="40%"
                  height="18px"
                  bg="#09C6C0"
                  style={{ zIndex: 1, borderRadius: "13px" }}
                ></Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper className="flex flex-row align-center justify-between ms-3 me-3">
              <P className="mb-0" fontColor="gray" fontSize="12px">
                <b>Softcap</b> reached in 30 days
              </P>
              <P className="mb-0" fontColor="gray" fontSize="12px">
                <b>Hardcap</b>
              </P>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};
export {
  Tooltip,
  Wrapper,
  SpanWrapper,
  useMediaQuery,
  LoadingSpinner,
  TimerBox,
};
