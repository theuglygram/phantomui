import React from "react";
import styled from "styled-components";
import { Heading } from "styles/Globalstyle";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <TitleHolder>
            <Title>
              How we keep you <br />
              and your crypto safe
            </Title>
            <Description>
              You will never have to worry about the safety of your funds when
              using the decentralized web.
            </Description>
          </TitleHolder>

          <CardsContainer>
            <CardsWrapper>
              <ItemWrapper>
                <Head>We never have access to your funds or private keys</Head>
                <Desc>
                  Phantom is a self-custodial wallet. Your private keys are
                  encrypted on your device by your password and are never shared
                  with anyone.
                </Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Head>Independently audited</Head>
                <Desc>
                  Our code has been audited by Kudelski Security, a top software
                  auditing firm trusted by technology companies worldwide.
                </Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Head>Your privacy is respected</Head>
                <Desc>
                  Phantom wallet doesn’t track any personal identifiable
                  information, your account addresses or asset balances or
                  biodata.
                </Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Head>Check out our bug bounty</Head>
                <Desc>
                  White hat hackers can be rewarded up to $50,000 for finding
                  vulnerabilities that may result in the loss of user funds.
                </Desc>
              </ItemWrapper>
            </CardsWrapper>
          </CardsContainer>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;

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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* place-items: center; */
  justify-content: center;
  grid-gap: 30px;
  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;
const ItemWrapper = styled.div`
  background-color: #453db0;
  margin: 20px 0;
  padding: 2.5rem;
  border-radius: 0.75rem;
  @media only screen and (max-width: 550px) {
    padding: 1.5rem;
  }
`;

const Head = styled.h2`
  font-size: 32px;
  color: #fff;
  font-weight: 600;
  margin-top: 0.875em;
`;
const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 0.875em;
  line-height: 1.5;
`;
