import React from "react";
import styled from "styled-components";
import smg from "assets/png/snp.png";
import { Button, Heading } from "styles/Globalstyle";
import { AiFillPlayCircle } from "react-icons/ai";

const FirstHero = () => {
  return (
    <>
      <HeroContainer>
        {/* <NavBar /> */}
        <HeroWrapper>
          <LeftSection>
            <Title>
              A friendly <br />
              crypto wallet
            </Title>
            <Description>
              Phantom makes it safe & easy for you to store, buy, send, receive,
              swap tokens and collect NFTs on the Solana blockchain.
            </Description>

            <BtnWrapper>
              <DownBtn>Download</DownBtn>
              <WatchBtn>
                <WatchIcon />
                Watch
              </WatchBtn>
            </BtnWrapper>
            <Available></Available>
          </LeftSection>
          <RightSection>
            <Img src={smg} />
          </RightSection>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default FirstHero;

const HeroContainer = styled.div``;
const HeroWrapper = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  display: grid;
  grid-template-areas: "first second";
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  justify-content: center;
  padding: 70px 20px;
  overflow-x: hidden;
  @media only screen and (max-width: 765px) {
    grid-template-areas: "second" "first";
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  grid-area: first;
`;
const Title = styled(Heading)`
  color: #fff;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 24px;
  margin: 35px 0;
  line-height: 1.5;
  @media only screen and (max-width: 765px) {
    text-align: center;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  /* margin: 0 auto;
   */
  justify-content: space-between;
  max-width: 400px;
  @media only screen and (max-width: 765px) {
    justify-content: space-between;
  }
  @media only screen and (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const DownBtn = styled(Button)`
  background: #4e44ce;
  padding: 15px 30px;
  margin: 15px 0;
  font-weight: 700;
  font-size: 20px;
`;
const WatchBtn = styled(Button)`
  display: flex;
  align-items: center;
  background: #2c2d30;
  padding: 15px 30px;
  /* margin: 0 25px; */
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0px 0px 2px rgb(0 0 0.1);

  /* @media only screen and (max-width: 765px) {
    margin-left: 10px;
  }
  @media only screen and (max-width: 550px) {
    margin: unset;
  }
  @media only screen and (max-width: 450px) {
    margin: 0 auto;
  } */
`;
const Available = styled.div``;
const RightSection = styled.div`
  grid-area: second;
`;
const Img = styled.img`
  width: 100%;
`;

const WatchIcon = styled(AiFillPlayCircle)`
  color: #fff;
  margin: 0 10px;
`;
