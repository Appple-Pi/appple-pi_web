'use client'

import React from 'react';
import Image from "next/image";
import LifeImage from "@public/images/life_image.png";
import styled from "styled-components";
import {Column, Row} from "@/components/base/Atomic";
import Typography from "@/components/base/Typography";
import colors from "@/themes/colors";
import RightArrow from "@public/icons/right_arrow.svg";

const LifeSection = () => {
  return (
    <Container>
      <Image
        style={{position: 'absolute', zIndex: -1, objectFit: 'cover'}}
        quality={100}
        src={LifeImage} alt={'life_image'} fill/>
      <Column gap={24} alignItems={'center'}>
        <Row>
          <Typography.Bold6 color={colors.white}>애플파이</Typography.Bold6>
          <Typography.Medium6 color={colors.white}>는 여러분들과 함께할 앞날을 상상해요.</Typography.Medium6>
        </Row>
        <Button onClick={()=>{}}>
          <Typography.SemiBold10 color={colors.white}>슬기로운 애플파이 생활</Typography.SemiBold10>
          <RightArrow />
        </Button>
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
  height: 500px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${colors.red500};
  height: 60px;
  user-select: none;
  padding: 14px 22px;
  gap: 10px;
  border: none;
  cursor: pointer;
  
  &:active {
    background-color: ${colors.red600};
  }
`;

export default LifeSection;
