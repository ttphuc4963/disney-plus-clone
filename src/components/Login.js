import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get all there</SignUp>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &: before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.7;
    z-index: -1;
  } ;
`;

const CTA = styled.div`
  width: 90%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
  margin: 10px 0;
  width: 100%;
  text-align: center;
  background-color: #0063e5;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  transition: all 250ms;
  letter-spacing: 1.5px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
