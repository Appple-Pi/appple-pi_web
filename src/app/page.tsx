'use client'

import React, {useRef} from 'react';
import WelcomeSection from "@/components/sections/WelcomeSection";
import {Column, Row} from "@/components/base/Atomic";
import Typography from "@/components/base/Typography";
import colors from "@/themes/colors";

//sections
import CurriculumSection from "@/components/sections/CurriculumSection";
import CurriculumCard from "@/components/CurriculumCard";
import IntroductionSection from "@/components/sections/IntroductionSection";
import LifeSection from "@/components/sections/LifeSection";
import AwardsSection from "@/components/sections/AwardsSection";

//developer curriculum icons
import XMLIcon from "@public/icons/curriculum/xml.svg";
import KotlinIcon from "@public/icons/curriculum/kotlin.svg";
import ComposeIcon from "@public/icons/curriculum/compose.svg";
import AndroidIcon from "@public/icons/curriculum/andoird.svg";

//designer curriculum icons
import FigmaIcon from "@public/icons/curriculum/figma.svg";
import BeachIcon from "@public/icons/curriculum/beach.svg";
import ArtistIcon from "@public/icons/curriculum/artist.svg";
import PhoneIcon from "@public/icons/curriculum/phone.svg";


const Home = () => {
  return (
    <>
      <WelcomeSection/>
      <Column padding={[80, 0]} gap={46} fill alignItems={'center'} backgroundColor={colors.gray50}>
        <div style={{
          height: 109,
          width: 1,
          backgroundColor: colors.gray800,
        }}/>
        <Row>
          <Typography.Medium6 color={colors.gray800}>여러분은 무언가에{' '}</Typography.Medium6>
          <Typography.Bold6 color={colors.red500}>몰입</Typography.Bold6>
          <Typography.Medium6 color={colors.gray800}>해본 경험이 있으신가요?</Typography.Medium6>
        </Row>
        <div style={{
          height: 109,
          width: 1,
          backgroundColor: colors.gray800,
        }}/>
      </Column>
      <IntroductionSection/>
      {/*Developer Curriculum*/}
      <CurriculumSection title={'개발자 커리큘럼'} description={'어디서든 일할 수 있는 개발자로,'} backgroundColor={colors.gray50}>
          <CurriculumCard title={'XML 개발'} description={'안드로이드에서의 UI구현을\nXML을 통해 실습합니다.'} Icon={XMLIcon}/>
          <CurriculumCard title={'XML 개발'} description={'여름방학 시즌에 디자이너와 함께\n프로젝트를 진행합니다.'} Icon={KotlinIcon}/>
          <CurriculumCard title={'안드로이드 심화'} description={'심화적인 개발을 배워봅니다.\nMVVM, 생명주기 등을 배웁니다.'} Icon={AndroidIcon}/>
          <CurriculumCard title={'확장 수업'} description={'학습한 코틀린을 기반으로\n확장된 프레임워크를 배워요.'} Icon={ComposeIcon}/>
      </CurriculumSection>
      {/*Designer Curriculum*/}
      <CurriculumSection title={'디자이너 커리큘럼'} description={'UI·UX 디자이너, 그 이상의 디자이너.'}>
        <CurriculumCard title={'Figma 기초'} description={'UI·UX 제작 전 툴에 대한\n이해도를 높여나갑니다.'} Icon={FigmaIcon}/>
        <CurriculumCard title={'UI·UX 디자인'} description={'앱 UI·UX 제작을 통해 UI에 대한\n'} Icon={PhoneIcon}/>
        <CurriculumCard title={'방학 프로젝트'} description={'여름방학 시즌에 개발자와 함께\n프로젝트를 진행합니다.'} Icon={BeachIcon}/>
        <CurriculumCard title={'브랜딩 디자인'} description={'브랜딩에 대해 배워봅니다.\n또한 브랜딩을 실습해봅니다.'} Icon={ArtistIcon}/>
      </CurriculumSection>
      <AwardsSection />
      <LifeSection/>
    </>
  );
};

export default Home;
