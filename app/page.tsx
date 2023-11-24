"use client";
import { useState, useEffect } from "react";
import { Wrapper, useMediaQuery, SpanWrapper } from "@/components/Layout";
import Image from "next/image";
import Header from "@/components/Header";
import { Spacer } from "@/components/Spacer";
import { H1, H2, P } from "@/components/Typography";
import { PrimaryButton } from "@/components/Buttons";
import { PrimaryInput } from "@/components/Inputs";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { AccountContext } from "./context/context";
import { LoadingSpinner, TimerBox } from "@/components/Layout";

import AOS from "aos";
import "aos/dist/aos.css";

import styled from "styled-components";
interface BackgroundProps {
  height?: any;
  url: any;
}
const Background = styled.div<BackgroundProps>`
  background-image: ${(props) => (props.url ? props.url : "")};
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100vw;
  height: ${(props) => (props.height ? props.height : "52vh")};
`;
const tableData = {
  col: [
    {
      month: "January '24",
      tokens: "LOCKED",
    },
    {
      month: "February '24",
      tokens: "LOCKED",
    },
    {
      month: "March '24",
      tokens: "LOCKED",
    },
    {
      month: "April, May, June '24",
      tokens: "5% each",
    },
    {
      month: "July '24 to January '25",
      tokens: "10% each",
    },
    {
      month: "February '25",
      tokens: "15%",
    },
  ],
};
const TableRow = ({ fontSize, weight, month, tokens, index }: any) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <>
      <Wrapper
        width={isResponsive ? "350px" : "400px"}
        borderBottom={"1px solid white"}
        className="flex flex-row items-center justify-between p-5"
      >
        <P
          className="mb-0"
          fontSize={fontSize}
          weight={weight}
          fontColor="white"
        >
          {month}
        </P>
        <P
          className="mb-0"
          fontSize={fontSize}
          weight={weight}
          fontColor="white"
        >
          {tokens}
        </P>
      </Wrapper>
    </>
  );
};
const TableComp = ({ data }: any) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <>
      <Wrapper
        width={isResponsive ? "370px" : "450px"}
        height="auto"
        bg="linear-gradient(to bottom, #2a70fa, #671acd);"
        borderRadius={"14px"}
        className={`flex flex-col items-center justify-center mx-3 ${
          isResponsive ? "my-3" : "my-3"
        } p-5`}
      >
        <H1
          ls="5px"
          weight="600"
          fontSize="24px"
          fontColor="white"
          className="mt-0 mb-3"
        >
          VESTING SCHEDULE
        </H1>
        <TableRow
          fontSize="18px"
          weight="600"
          month="Month"
          tokens={"Release %"}
        />
        {data.map((val: any, index: number) => {
          return (
            <>
              <TableRow
                key={index}
                fontSize="16px"
                weight="400"
                month={val.month}
                tokens={val.tokens}
                index={index}
              />
            </>
          );
        })}
        <P
          fontColor="white"
          className="mb-0 text-center pt-5 ms-2 me-2"
          fontSize="14px"
        >
          Holders who participate in the token conversion will receive all of
          their tokens 14 months from their conversion event. Cliffs will be for
          90 days, but unlocks will only be on the 1st of every month.
        </P>
      </Wrapper>
    </>
  );
};
export default function Home() {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  const isResponsiveTable = useMediaQuery({
    query: "(max-width: 890px)",
  });
  const isResponsiveCenter = useMediaQuery({
    query: "(max-width: 1400px)",
  });
  const isResponsiveCenter2 = useMediaQuery({
    query: "(max-width: 930px)",
  });
  const [mount, setMount] = useState(false);
  const [account, setAccount] = useState<string>("");
  async function getWeb3Modal() {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "your-infura-id",
          },
        },
      },
    });
    return web3Modal;
  }
  async function connect() {
    try {
      const web3Modal = await getWeb3Modal();
      const connection = await web3Modal.connect();
      const provider: any = new Web3Provider(connection);
      // const provider: any = new ethers.providers.Web3Provider(connection);
      const accounts = await provider.listAccounts();
      setAccount(accounts[0]);
      localStorage.setItem("isWalletConnected", "true");
    } catch (err) {
      console.log("error:", err);
    }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Background url="url(/assets/bg.png)" height={"100vh"}>
        <Wrapper className="flex flex-row items-center justify-center">
          <Wrapper width={isResponsive ? "97vw" : "82vw"} className="mt-6 ">
            <Header />
            <Wrapper
              height="70vh"
              className="flex flex-row items-center justify-between"
            >
              <Wrapper
                className={`flex flex-col gap-4  ${
                  isResponsive
                    ? "items-center justify-center text-center"
                    : " items-start justify-start text-start"
                }`}
              >
                <H1
                  // data-aos="fade-right"
                  // data-aos-duration="2000"
                  ls={"12px"}
                  fontSize={isResponsive ? "32px" : "56px"}
                  lHeight={isResponsive ? "31px" : "39px"}
                  weight="600"
                >
                  RAINMAKER
                </H1>
                <H1
                  // data-aos="fade-right"
                  // data-aos-duration="2000"
                  ls={"12px"}
                  fontSize={isResponsive ? "32px" : "56px"}
                  lHeight={isResponsive ? "31px" : "39px"}
                  weight="600"
                >
                  SWAP
                </H1>
                <Spacer height="5px" />
                <P
                  fontColor="#CCC9FF"
                  fontSize="27px"
                  ls={"5px"}
                  lHeight="38px"
                  className="mb-0"
                >
                  Connect your wallet with
                  <br />{" "}
                  <SpanWrapper color={"#6AA4FF"}>
                    <b>$RAIN</b>
                  </SpanWrapper>{" "}
                  to swap for{" "}
                  <SpanWrapper color="white">
                    <b>$DUEL</b>
                  </SpanWrapper>
                </P>
                <Spacer height="15px" />

                <Wrapper>
                  {!account ? (
                    <PrimaryButton
                      // data-aos="flip-left"
                      // data-aos-duration="2000"
                      onClick={connect}
                    >
                      Connect your Wallet
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      data-aos="flip-right"
                      data-aos-duration="2000"
                    >
                      Convert Rain
                    </PrimaryButton>
                  )}
                </Wrapper>
              </Wrapper>
              <Wrapper></Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper
          position="absolute"
          bottom="-11%"
          left={isResponsiveCenter ? "30%" : "38%"}
          style={{ zIndex: 7 }}
        >
          <Image
            src="/assets/group.png"
            alt="price"
            width={isResponsive ? 200 : 300}
            height={isResponsive ? 200 : 300}
          />
        </Wrapper>
        {!isResponsive && <TimerBox />}
      </Background>
      {isResponsive && (
        <Wrapper className="mt-20 flex flex-row align-center justify-center">
          <TimerBox />
        </Wrapper>
      )}
      {/* Section2  */}
      <Wrapper
        height={isResponsive ? "1450px" : "1100px"}
        className="flex flex-row items-center justify-center"
      >
        <Wrapper
          width={isResponsive ? "94vw" : "100vw"}
          className="flex flex-col items-center justify-center gap-7"
        >
          {isResponsive ? (
            <>
              {" "}
              <P
                fontSize={isResponsive ? "16px" : "18px"}
                lHeight="24px"
                weight="700"
                className="text-center"
                fontColor="#10131a"
                ls={"4px"}
              >
                Once you have confirmed your swap. <b>$DUEL</b> will be locked
                in a vesting contract. Your new tokens will start to vast in 90
                days from when you swap.
              </P>
            </>
          ) : (
            <>
              {" "}
              <P
                fontSize={isResponsive ? "17px" : "18px"}
                lHeight="24px"
                weight="700"
                className="text-center"
                fontColor="#10131a"
                ls={"4px"}
              >
                Once you have confirmed your swap. <b>$DUEL</b> will be locked
                in a
                <br />
                vesting contract. Your new tokens will start to vast in 90 days
                <br /> from when you swap.
              </P>
            </>
          )}

          <Spacer height={isResponsive ? "0px" : "3vh"} />

          <Wrapper
            width={isResponsive ? "100%" : "70%"}
            className={`flex flex-row items-center ${
              isResponsive ? " flex-wrap justify-center" : " justify-between"
            }`}
          >
            {isResponsive && (
              <Wrapper color="#10131a">
                <Image
                  src="/assets/rain-maker.png"
                  alt="rain maker"
                  width={600}
                  height={600}
                  // layout="responsive"
                />
              </Wrapper>
            )}
            <Wrapper color="#10131a">
              <TableComp data={tableData.col} />
            </Wrapper>
            {!isResponsive && (
              <Wrapper color="#10131a">
                <Image
                  src="/assets/rain-maker.png"
                  alt="rain maker"
                  width={600}
                  height={600}
                  // layout="responsive"
                />
              </Wrapper>
            )}
          </Wrapper>
        </Wrapper>
      </Wrapper>

      {/* Footer  */}
      <Background
        url="url(/assets/footer-bg.png)"
        className="flex flex-row justify-center align-items-center"
      >
        <Wrapper
          height="300px"
          width={isResponsive ? "300px" : "40vw"}
          className="flex flex-col items-center justify-content-center"
        >
          <Wrapper width={isResponsive ? "200px" : "20vw"}>
            <Image
              src="/logo.png"
              alt="footer"
              width={250}
              height={250}
              layout="responsive"
            />
          </Wrapper>
          <P fontSize="14px" className="mb-0 text-center" fontColor="gray">
            &copy; 2023 Rainmaker Games is not endorsed by Riot Games, nor does
            it reflect the views or opinions of Riot Games or anyone officially
            involved in League of Legends’ production and/or management. League
            of Legends and Riot Games are trademarks or registered trademarks of
            Riot Games, Inc. League of Legends © Riot Games, Inc.
          </P>
        </Wrapper>
      </Background>
    </>
  ) : (
    <>
      <LoadingSpinner />
    </>
  );
}
