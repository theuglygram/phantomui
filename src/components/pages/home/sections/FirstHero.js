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
            <Available>
              Available on iOS, Android, Chrome, Brave, and more!
            </Available>
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

  @media only screen and (max-width: 665px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
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
  max-width: 400px;

  @media only screen and (max-width: 765px) {
    margin: 0 auto;
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
  margin: 15px 15px 15px 0;
  font-weight: 700;
  font-size: 20px;
  @media only screen and (max-width: 765px) {
    margin: 15px 15px;
  }
`;
const WatchBtn = styled(Button)`
  display: flex;
  align-items: center;
  background: #2c2d30;
  padding: 15px 30px;
  margin: 15px 15px;
  font-weight: 700;
  font-size: 20px;
  background: #484a50;
  border: none;
  outline: none;
`;
const Available = styled.p`
  @media only screen and (max-width: 765px) {
    text-align: center;
  }
`;
const RightSection = styled.div`
  grid-area: second;
`;
const Img = styled.img`
  /* height: 847px;
  width: 685px; */
  max-width: 100%;
`;

const WatchIcon = styled(AiFillPlayCircle)`
  color: #fff;
  margin: 0 10px;
`;
