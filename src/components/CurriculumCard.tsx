'use client'

import React from 'react';
import asd from 'asdf.svg'
import styled from "styled-components";
import colors from "@/themes/colors";
import Typography from "@/components/base/Typography";
import {Spacer} from "@/components/base/Atomic";

interface CurriculumCardProps {
  title: string;
  description: string;
  Icon: any;
}

const CurriculumCard = ({title, description, Icon}: CurriculumCardProps) => {
  return (
    <Container>
      <Typography.Bold7 color={colors.gray800}>
        {title}
      </Typography.Bold7>
      <Spacer height={8}/>
      <Typography.SemiBold9 color={colors.gray600}>
        {description}
      </Typography.SemiBold9>
      <IconContainer>
        <Icon/>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 385px;
  height: 180px;
  background-color: ${colors.gray100};
  padding: 25px;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 18.5px;
  right: 20px;
`;


export default CurriculumCard;
