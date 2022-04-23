import React from "react";
import styled from "styled-components";
import nft from "assets/webp/nft.png";
import sol from "assets/png/sol.png";
import ic from "assets/svgs/ic.svg";
import g from "assets/svgs/g.svg";
import { Heading } from "styles/Globalstyle";

const SecondHero = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <SectionOne>
            <TextSection>A beautiful home for all your NFTs</TextSection>
            <ImgSection>
              <Img src={nft} />
            </ImgSection>
          </SectionOne>
          <SecWrapper>
            <SectionTwo>
              <TextSection>Earn SOL with a couple clicks</TextSection>
              <ImgSection>
                <Img src={sol} />
              </ImgSection>
            </SectionTwo>
            <SectionThree>
              <TextSection>Lightning fast swaps, super low fees</TextSection>
              <ImgSection>
                <Img src={ic} />
              </ImgSection>
            </SectionThree>
          </SecWrapper>

          <SectionFour>
            {" "}
            <TextSection>A beautiful home for all your NFTs</TextSection>
            <ImgSection>
              <Img src={g} />
            </ImgSection>
          </SectionFour>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default SecondHero;

const HeroContainer = styled.div``;
const HeroWrapper = styled.div`
  max-width: 1210px;
  margin: 50px auto;
  /* place-items: center; */
  padding: 0 20px;
`;

const TextSection = styled(Heading)`
  color: #fff;
  font-size: 60px;
  font-weight: 400;
  text-align: center;

  @media only screen and (max-width: 670px) {
    font-size: 24px;
  }
`;
const ImgSection = styled.span``;
const Img = styled.img`
  width: 100%;
`;

const SecWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1210px;
  grid-gap: 20px;
  /* place-items: center; */
  justify-content: center;
  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

const SectionOne = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* place-items: center; */
  align-items: center;
  font-weight: 500;
  border-radius: 0.75rem;
  background-image: linear-gradient(#4e44ce, #4e44ce);
  font-size: 28px;

  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    padding: 20px 10px;
  }
`;
const SectionTwo = styled.div`
  border-radius: 0.75rem;
  background-image: linear-gradient(#4e44ce, #4e44ce);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px 0;
  padding-top: 30px;
  @media only screen and (max-width: 670px) {
    padding: 20px 10px;
    margin: 20px 0;
  }
`;
const SectionThree = styled.div`
  border-radius: 0.75rem;
  background-image: linear-gradient(#4e44ce, #4e44ce);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px 0;
  padding-top: 30px;
  @media only screen and (max-width: 670px) {
    padding: 20px 10px;
    margin: 20px 0;
  }
`;
const SectionFour = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* place-items: center; */
  align-items: center;
  font-weight: 500;
  border-radius: 0.75rem;
  background-image: linear-gradient(#4e44ce, #4e44ce);
  font-size: 28px;
  place-items: center;
  justify-content: center;

  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    padding: 20px 10px;
  }
`;
