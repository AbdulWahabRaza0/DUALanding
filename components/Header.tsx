"use client";
import React from "react";
import Image from "next/image";
import { Wrapper, useMediaQuery } from "./Layout";
import { PrimaryButton } from "./Buttons";
const Header = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <>
      <Wrapper className="flex flex-row items-center justify-between">
        <Wrapper>
          <Image
            src="/logo.png"
            alt="Logo"
            width={isResponsive ? 150 : 250}
            height={isResponsive ? 100 : 200}
          />
        </Wrapper>
        <Wrapper
          mt={isResponsive ? "-20px" : "-50px"}
          me={isResponsive ? "10px" : ""}
        >
          <PrimaryButton
            height={isResponsive ? "40px" : "50px"}
            width={isResponsive ? "200px" : "220px"}
          >
            Get Tokens
          </PrimaryButton>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Header;
