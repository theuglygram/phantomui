import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-button-accent), var(--tw-bg-opacity));
  padding: 8px 14px 10px;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: #fff;
  outline: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
`;

export const Heading = styled.h2`
  font-size: 4.375rem;
  @media only screen and (max-width: 768px) {
    font-size: 3.25rem;
  }
  @media only screen and (max-width: 568px) {
    font-weight: 700;
    min-width: 12ch;
    font-size: 2.5rem;
    line-height: 1.15;
    text-align: center;
  }
`;
