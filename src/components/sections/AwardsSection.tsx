'use client'

import React from 'react';
import styled from "styled-components";
import colors from "@/themes/colors";
import {Column, Spacer} from "@/components/base/Atomic";
import Typography from "@/components/base/Typography";
import AwardCard from "@/components/AwardCard";
import RightArrow from "@public/icons/right_arrow.svg";

const AwardsSection = () => {
  return (
    <Container>
      <Column padding={[168, 0]} alignItems={'center'} fill>
        <Title>수상 실적</Title>
        <Spacer height={16}/>
        <Typography.Bold5 color={colors.gray900}>
          그동안 애플파이는 무엇을 이루었나요?
        </Typography.Bold5>
        <Spacer height={48}/>
        <AwardsContainer>
          {Array(12).fill(0).map((_, index) => (
            <AwardCard
              key={index}
              title={'대회 이름'}
              member={['대회 이름']}/>
          ))}
        </AwardsContainer>
        <Linear/>
        <Button>
          <Typography.SemiBold6>
            다른 수상 실적 보러가기
          </Typography.SemiBold6>
          <RightArrow width={26} height={26} fill={colors.gray900}/>
        </Button>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: ${colors.gray50};
`;

const AwardsContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, minmax(0, 1fr));
  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled(Typography.SemiBold7)`
  border-radius: 12px;
  color: ${colors.red500};
  background-color: ${colors.red50};
  padding: 12px;
`;

const Linear = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  bottom: 0;
  background: linear-gradient(180deg, transparent, ${colors.gray50});
`;

const Button = styled.div`
  width: 510px;
  height: 94px;
  border-radius: 999px;
  border: 1px solid ${colors.gray900};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  flex-direction: row;
  gap: 12px;
  position: absolute;
  bottom: 80px;
  &:active {
    background-color: ${colors.gray100};
     //color: ${colors.white};
  }
`;
export default AwardsSection;
