'use client'

import React, {forwardRef} from 'react';
import {Column, Row, Spacer} from "@/components/base/Atomic";
import styled from "styled-components";
import colors from "@/themes/colors";
import Typography from "@/components/base/Typography";

interface CurriculumSectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

const CurriculumSection = forwardRef<HTMLDivElement, CurriculumSectionProps>(({
                                                                             title,
                                                                             description,
                                                                             children,
                                                                             backgroundColor
                                                                           }, ref) => {
  return (
    <Column
      ref={ref}
      padding={[258, 0]}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={backgroundColor}>
      <Title>
          {title}
      </Title>
      <Spacer height={16}/>
      <Typography.Bold5 color={colors.gray900}>
        {description}
      </Typography.Bold5>
      <Spacer height={48}/>
      <CurriculumContainer>
        {children}
      </CurriculumContainer>
    </Column>
  );
});
CurriculumSection.displayName = 'CurriculumSection'

const Title = styled(Typography.SemiBold7)`
  border-radius: 12px;
  color: ${colors.red500};
  background-color: ${colors.red50};
  padding: 12px;
`;

const CurriculumContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default CurriculumSection;
