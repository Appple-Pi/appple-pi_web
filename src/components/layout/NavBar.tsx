'use client'

import React, {useEffect, useState} from 'react';
import {Row} from "@/components/base/Atomic";
import styled from "styled-components";
import AppplePiLogo from '@public/icons/appple_pi.svg';
import colors from "@/themes/colors";
import NavBarItem from "@/components/layout/NavBarItem";

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar = ({children}: NavBarProps) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const welcomeSectionHeight = window.innerHeight - 60;
      setIsScrolled(window.scrollY > welcomeSectionHeight);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Container isScrolled={isScrolled}>
      <Row padding={[20, 160]} justifyContent={'space-between'} alignItems={'center'} fill>
        <AppplePiLogo
          width={'42px'} height={'42px'}
          fill={isScrolled ? colors.red500 : colors.white}
          style={{transition: 'fill 0.3s ease-in-out'}}/>
        <Row gap={40}>
          <NavBarItem text={'동아리 소개'} color={isScrolled ? colors.gray900 : colors.white}/>
          <NavBarItem text={'수업 커리큘럼'} color={isScrolled ? colors.gray900 : colors.white}/>
          <NavBarItem text={'수상 실적'} color={isScrolled ? colors.gray900 : colors.white}/>
          <NavBarItem text={'포트폴리오'} color={isScrolled ? colors.gray900 : colors.white}/>
        </Row>
      </Row>
    </Container>
  );
};

const Container = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: ${props => props.isScrolled ? colors.white : 'transparent'};
  transition: background-color 0.3s ease-in-out;
`;

export default NavBar;
