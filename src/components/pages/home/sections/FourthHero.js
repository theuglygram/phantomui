import React from "react";
import styled from "styled-components";
import { Heading } from "styles/Globalstyle";
import user1 from "assets/jpg/user1.jpg";
import user2 from "assets/jpg/user2.jpg";
import user3 from "assets/jpg/user3.jpg";
import user4 from "assets/jpg/user4.jpg";
import user5 from "assets/jpg/user5.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
const FourthHero = () => {
  const Details = [
    {
      img: `${user1}`,
      user: "Rooter | Solend (hiring!)",
      name: "@0xrooter",
      desc: ".@phantom is everything I've ever wanted from a web wallet. If it's a sign of what's to come, Solana UX will dwarf Ethereum.",
      time: "3:54 PM · Jul 13, 2021",
    },
    {
      img: `${user2}`,
      user: "tom 🐵🌻",
      name: "@muhnkee",
      desc: "A wallet can make or break a chain. Having spent some time w/ @phantom's beta, I can say that it makes using @solana a lot more fun.",
      time: "2:06 PM · Apr 16, 2021",
    },
    {
      img: `${user3}`,
      user: "Dylan Macalinao",
      name: "@DylanMacalinao",
      desc: ".@phantom is leading the charge for better crypto UX — huge props to Chris Kalani @fragosti @BChillman and the rest of the team! Now open to anyone: https://t.co/Y3sK6rwkuN https://t.co/ouGDLZg7Dh",
      time: "7:20 PM · Jul 11, 2021",
    },
    {
      img: `${user4}`,
      user: "Brad.s◎l",
      name: "@CryptoBradS",
      desc: "I can not express in words the ease and quality of utilizing @FTX_Official and the @phantom wallet. If you are utilizing any other combination of exchange and wallet, I assure you that you are doing it wrong.",
      time: "10:04 PM · May 26, 2021",
    },
    {
      img: `${user5}`,
      user: "  Jason",
      name: "@iwearahoodie",
      desc: "Absofriginlutely loving the @phantom wallet on Solana. Even got multiple hardware wallets connected, which is something even metamask hasn't been able to achieve yet. Great watching the solana defi ecosystem evolve bit by bit. $SOL",
      time: "5:47 PM · Apr 21, 2021",
    },
  ];
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <TitleHolder>
            <Title>People love using Phantom</Title>
            <Description>
              Here are some nice things our users have said about us
            </Description>
          </TitleHolder>

          <CardsContainer>
            <CardsWrapper>
              {Details.map((detail, index) => (
                <ItemWrapper key={index}>
                  <TopSec>
                    <ImgSec>
                      <Img src={detail.img} />
                      <Hold>
                        <Username>{detail.user}</Username> <br />
                        <Name>{detail.name}</Name>
                      </Hold>
                    </ImgSec>
                    <Twitter>
                      <TwIcon />
                    </Twitter>
                  </TopSec>

                  <Head>{detail.desc}</Head>
                  <Desc>{detail.time}</Desc>
                </ItemWrapper>
              ))}
            </CardsWrapper>
          </CardsContainer>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default FourthHero;

const HeroContainer = styled.div``;
const HeroWrapper = styled.div`
  max-width: 1210px;
  margin: 200px auto;
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

const CardsContainer = styled.div``;
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  place-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;
const ItemWrapper = styled.div`
  background-color: #232426;
  margin: 20px;
  padding: 1.5rem;
  border-radius: 0.75rem;
`;

const Head = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
  font-weight: 400;
  margin-top: 0.875em;
`;
const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 0.875em;
`;

const TopSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgSec = styled.div`
  display: flex;
  align-items: center;
`;

const Hold = styled.div``;
const Img = styled.img`
  border-radius: 50%;
  margin-right: 15px;
`;
const Username = styled.span``;
const Name = styled.span``;
const Twitter = styled.div``;
const TwIcon = styled(AiOutlineTwitter)`
  color: #1da1f2;
  font-size: 30px;
`;
