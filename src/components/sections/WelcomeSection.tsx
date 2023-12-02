'use client'

import React from 'react';
import Image from "next/image";
import styled from "styled-components";
import {Column, Row, Spacer, Text} from "@/components/base/Atomic";
import Typography from "@/components/base/Typography";
import colors from "@/themes/colors";
import localFont from "next/font/local";
import GroupImage from "@public/images/group_image.png";
import AppplePi from "@public/icons/appple_pi.svg";

const ydestreetB = localFont({src: '../../assets/fonts/YdestreetB.ttf',});

const WelcomeSection = () => {
  return (
    <Container>
      <Image
        style={{position: 'absolute', zIndex: -1, objectFit: 'cover' }}
        src={GroupImage} alt={'group image'}
        priority={true}
        unoptimized={true}
        fill
      />
      <Column>
        <Column gap={19} alignItems={"center"}>
          <Typography.Medium6 color={colors.white}>선린인터넷고등학교</Typography.Medium6>
          <Row gap={10} alignItems={'center'}>
            <Typography.SemiBold2 color={colors.white}>앱 개발</Typography.SemiBold2>
            <div style={{width: 8, height: 8, backgroundColor: colors.white, borderRadius: '50%'}}/>
            <Typography.SemiBold2 color={colors.white}>창업 동아리</Typography.SemiBold2>
          </Row>
          <Row gap={24} alignItems={'center'}>
            <AppplePi width={52} height={52} fill={colors.white}/>
            <Text className={ydestreetB.className} size={45} color={colors.white}>App:ple Pi</Text>
          </Row>
        </Column>
        <Spacer height={64}/>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default WelcomeSection;
