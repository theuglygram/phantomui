import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterContent>
          <Phantom>
            <Head>Phantom</Head>
            <Base>© Phantom Technologies, Inc.</Base>
          </Phantom>
          <LinkShield>
            <LinkWrapper>
              <Title>Product</Title>
              <LinksHolder>
                <Links>Overview</Links>
                <Links>Download</Links>
                <Links>Security</Links>
                <Links>Support</Links>
              </LinksHolder>
            </LinkWrapper>
            <LinkWrapper>
              <Title>Product</Title>
              <LinksHolder>
                <Links>Blog</Links>
                <Links>Docs</Links>
                <Links>Status</Links>
                <Links>Terms</Links>
                <Links>Privacy</Links>
              </LinksHolder>
            </LinkWrapper>
            <LinkWrapper>
              <Title>Product</Title>
              <LinksHolder>
                <Links>About</Links>
                <Links>Jobs</Links>
                <Links>Press</Links>
                <Links>Kit</Links>
                <Links>Twitter</Links>
              </LinksHolder>
            </LinkWrapper>
          </LinkShield>
        </FooterContent>
      </FooterWrap>
    </>
  );
};

export default Footer;

const FooterWrap = styled.div`
  background: #222222;
  padding: 5rem 20px;
  /* backdrop-filter: blur(10px); */
`;
const FooterContent = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 350px auto;

  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;
const LinkShield = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }
`;
const Phantom = styled.div``;
const Head = styled.h4`
  font-size: 32px;
  color: #fff;
  margin-bottom: 20px;
`;
const Base = styled.h4``;
const LinkWrapper = styled.div``;
const Title = styled.h4`
  color: #fff;
  margin-bottom: 10px;
`;
const LinksHolder = styled.div`
  display: flex;
  flex-direction: column;
`;
const Links = styled.a`
  margin: 10px 0;
  cursor: pointer;
  font-weight: 500;

  :hover {
    color: #8a81f8;
  }
`;
