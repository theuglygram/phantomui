import React from "react";
import styled from "styled-components";
import { Heading } from "styles/Globalstyle";
import chrome from "assets/png/chrome.png";
import brave from "assets/png/brave.png";
import firefox from "assets/png/firefox.png";
import edge from "assets/png/edge.png";

const FifthHero = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <TitleHolder>
            <Title>Try Phantom now!</Title>
            <Description>
              Turn your favorite browser into a Web3 enabled crypto wallet
            </Description>
          </TitleHolder>

          <CardsContainer>
            <CardsWrapper>
              <ItemWrapper>
                <Icon src={chrome} />
                <Desc>Chrome</Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Icon src={brave} />
                <Desc>Brave</Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Icon src={firefox} />
                <Desc>Firefox</Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Icon src={edge} />
                <Desc>Edge</Desc>
              </ItemWrapper>
            </CardsWrapper>
          </CardsContainer>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default FifthHero;

const HeroContainer = styled.div``;
const HeroWrapper = styled.div`
  max-width: 1210px;
  margin: 100px auto;
  padding: 0 20px;
`;
const TitleHolder = styled.div``;
const Title = styled(Heading)`
  font-weight: 600;
  text-align: center;
  color: #fff;
`;
const Description = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
`;

const CardsContainer = styled.div`
  margin: 0 auto;
`;
const CardsWrapper = styled.div`
  display: grid;
  margin: 55px auto;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  place-items: center;
  grid-gap: 50px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.5s ease-out all;
  :hover {
    transform: scale(0.8);
    cursor: pointer;
  }
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 0.875em;
  margin: 20px 0px;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  background: #4c4c4c;
  color: #fff; ;
`;
