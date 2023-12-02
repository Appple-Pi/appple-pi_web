'use client'

import React from 'react';
import styled from "styled-components";
import {Column, Row, Spacer, Text} from "@/components/base/Atomic";
import Logo from "@public/icons/appple_pi.svg";
import Typography from "@/components/base/Typography";
import colors from "@/themes/colors";

const Footer = () => {
  return (
    <Column padding={[60,160]}>
      <Column gap={8}>
        <Row alignItems={'center'} gap={4}>
          <Typography.SemiBold8 color={'#1D1D1D'}>2023 App:ple Pi</Typography.SemiBold8>
          <Logo width='40px' height='40px' fill={colors.red500}/>
        </Row>
        <Typography.Medium10 color={colors.gray600}>
          서울 용산구 원효로97길 33-4, 선린인터넷고등학교
        </Typography.Medium10>
        <Typography.Medium10 color={colors.gray600}>
          Copyright ©2023 App:ple Pi. All rights reserved.
        </Typography.Medium10>
      </Column>
      <Spacer height={40}/>
      <Row gap={35}>
        <SNSLink href={'https://github.com/Appple-Pi'}>{'깃허브 >'}</SNSLink>
        <SNSLink href={'https://github.com/Appple-Pi'}>{'페이스북 >'}</SNSLink>
        <SNSLink href={'https://www.instagram.com/appple.pi.official/'}>{'인스타그램 >'}</SNSLink>
      </Row>
    </Column>
  );
};


const SNSLink = styled.a.attrs({
  target: '_blank',
})`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.gray600};
  text-decoration-line: underline;

`;

export default Footer;
