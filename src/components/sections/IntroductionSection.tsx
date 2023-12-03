'use client'

import React, {forwardRef} from 'react';
import {Column, Row, Spacer} from "@/components/base/Atomic";
import colors from "@/themes/colors";
import styled from "styled-components";
import Typography from '@/components/base/Typography';
import IntroductionImage from '@public/images/introduction_image.png';
import Image from "next/image";

const IntroductionSection = forwardRef<HTMLDivElement>((_,ref) => {
  return (
    <Row padding={[250, 160]} justifyContent={'space-between'} alignItems={'center'} fill ref={ref}>
      <Column>
        <Title>
            최고의 앱 개발 창업 동아리
        </Title>
        <Spacer height={16}/>
        <Typography.Bold5 color={colors.gray900}>무언가에 몰입하는 애플파이</Typography.Bold5>
        <Spacer height={32}/>
        <IntroductionText>
          애플파이는 선린인터넷고등학교의 교내 <b>앱 개발 창업 동아리</b>입니다.<br/>
          안드로이드 앱 개발과 UI/UX 디자인을 중점으로 매년 꾸준한 실적을 내고있습니다.<br/>
          또한, 화목하고 즐거운 분위기와 체계적인 커리큘럼으로 인해 선후배간의 교류가 높은 편으로,<br/>
          신입생이더라도 교내외에서 다양한 경험을 쌓을 수 있는 동아리입니다.<br/>
          그리고, 신설된 4호관에 우수한 동아리실을 보유하고 있어 자유롭고 우수한 환경을 제공하고있습니다.<br/>
          <b>모바일의 혁신을 향하여, App:ple Pi</b>
        </IntroductionText>
      </Column>
      <ImageContainer>
        <Image src={IntroductionImage} alt={'introduction image'} width={346} height={346}/>
      </ImageContainer>
    </Row>
  );
});
IntroductionSection.displayName = 'IntroductionSection'

const Title = styled(Typography.SemiBold7)`
  border-radius: 12px;
  color: ${colors.red500};
  background-color: ${colors.red50};
  padding: 12px;
`;

const ImageContainer = styled.div`
  @media (max-width: 1500px) {
    display: none;
  }
`;

const IntroductionText = styled.div`
  b {
    color: ${colors.gray900};
    font-weight: 600;
  }
  white-space: pre-line;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.gray700};
  line-height: 185%;
`;

export default IntroductionSection;
