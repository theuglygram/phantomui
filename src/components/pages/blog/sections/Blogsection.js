import React from "react";
import styled from "styled-components";
import { Heading } from "styles/Globalstyle";
import cover from "assets/png/ct_cover.png";
import deeplinking from "assets/png/deeplinking.png";
import notifications from "assets/png/notifications.png";
import android from "assets/png/android.png";
import launch from "assets/png/launch.png";
import collections from "assets/png/collections.png";
import swap from "assets/png/swap.png";
import Security from "assets/png/Security.png";
import staking from "assets/png/staking.png";
import founders from "assets/png/founders.jpg";

const Blogsection = () => {
  const blogPost = [
    {
      img: `${cover}`,
      text: "Partnering with CoinTracker for Solana tax support",
    },
    {
      img: `${deeplinking}`,
      text: "Introducing Phantom Deeplinks",
    },
    {
      img: `${notifications}`,
      text: "Product updates: Recent activity, notifications, performance, and more",
    },
    {
      img: `${android}`,
      text: "Android Beta Launch",
    },
    {
      img: `${launch}`,
      text: `Phantom’s $109M Series B and launch of iOS App`,
    },
    {
      img: `${collections}`,
      text: "NFT Collections, Localization, Moonpay, and more",
    },
    {
      img: `${Security}`,
      text: "Staying safe with Phantom",
    },
    {
      img: `${swap}`,
      text: "Swapping Tokens in Phantom",
    },
    {
      img: `${staking}`,
      text: "Solana staking in just 3 clicks",
    },
    {
      img: `${founders}`,
      text: "Partnering with CoinTracker for Solana tax support",
    },
  ];
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <TitleHolder>
            <Title>Latest Updates</Title>
            <Description>
              All the latest news and updates about Phantom the product, the
              company, and the team
            </Description>
          </TitleHolder>

          <CardsContainer>
            <CardsWrapper>
              {blogPost.map((blogitem, index) => (
                <ItemWrapper key={index}>
                  <Head src={blogitem.img} />

                  <Desc>{blogitem.text}</Desc>
                </ItemWrapper>
              ))}
            </CardsWrapper>
          </CardsContainer>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Blogsection;

const HeroContainer = styled.div`
  margin-top: 7rem;
  margin-bottom: 5rem;
`;
const HeroWrapper = styled.div`
  max-width: 1210px;
  margin: 50px auto;
  padding: 0 20px;
`;
const TitleHolder = styled.div``;
const Title = styled(Heading)`
  font-weight: 600;
  text-align: center;
  color: #fff;
  font-size: 4.375rem;

  @media only screen and (max-width: 550px) {
    font-size: 2rem;
  }
`;
const Description = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;

  @media only screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const CardsContainer = styled.div``;
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  /* grid-gap: 30px; */
  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;
const ItemWrapper = styled.div`
  margin: 5px 0;
  padding: 1.5rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease-in;
  cursor: pointer;
  :hover {
    transform: scale(0.97);
  }

  @media only screen and (max-width: 550px) {
    padding: 1.5rem;
  }
`;

const Head = styled.img`
  width: 100%;
  border-radius: 0.75rem;
`;
const Desc = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-top: 0.875em;
  line-height: 1.5;
  color: #fff;
  ${ItemWrapper}:hover & {
    color: #4e44ce;
  }
`;
