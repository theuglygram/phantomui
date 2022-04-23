import React from "react";
import styled from "styled-components";
import { Heading } from "styles/Globalstyle";
import key from "assets/svgs/key.svg";
import ledger from "assets/svgs/ledger.svg";
import lock from "assets/svgs/lock.svg";
import bio from "assets/svgs/bio.svg";
const ThirdHero = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <TitleHolder>
            <Title>We’ve got you covered</Title>
            <Description>
              Phantom has everything you need to traverse the Solana ecosystem
            </Description>
          </TitleHolder>

          <CardsContainer>
            <CardsWrapper>
              <ItemWrapper>
                <Icon src={key} />
                <Head>Non-Custodial</Head>
                <Desc>
                  We never have access to any of your data or funds. Ever.
                </Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Icon src={ledger} />
                <Head>Ledger Support</Head>
                <Desc>
                  For additional security you can connect your hardware wallet.
                </Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Icon src={lock} />
                <Head>Privacy</Head>
                <Desc>
                  Phantom doesn’t track any personal identifiable information.
                </Desc>
              </ItemWrapper>
              <ItemWrapper>
                <Icon src={bio} />
                <Head>Biometric authentication</Head>
                <Desc>
                  Protect your assets on the go with the convenience you expect.
                </Desc>
              </ItemWrapper>
            </CardsWrapper>
          </CardsContainer>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default ThirdHero;

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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  place-items: center;
  grid-gap: 30px;
  place-items: center;
  justify-content: center;

  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;
const ItemWrapper = styled.div`
  background-color: rgba(53, 54, 58);
  margin: 20px 0;
  padding: 2.5rem;
  border-radius: 0.75rem;

  @media only screen and (max-width: 550px) {
    padding: 1.5rem;
  }
`;
const Icon = styled.img`
  width: 70px;
  height: 70px;
`;
const Head = styled.h2`
  font-size: 36px;
  color: #fff;
  font-weight: 400;
  margin-top: 0.875em;

  @media only screen and (max-width: 350px) {
    font-size: 24px;
  }
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-top: 0.875em;
  line-height: 1.5;
  @media only screen and (max-width: 350px) {
    font-size: 16px;
  }
`;
