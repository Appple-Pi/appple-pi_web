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
      padding={[258, 160]}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={backgroundColor}>
      <TitleContainer>
        <Typography.SemiBold7 color={colors.red500}>
          {title}
        </Typography.SemiBold7>
      </TitleContainer>
      <Spacer height={16}/>
      <Typography.Bold5 color={colors.gray900}>
        {description}
      </Typography.Bold5>
      <Spacer height={48}/>
      <Row gap={10} fill justifyContent={'flex-start'} style={{
        overflowX: 'scroll',
      }}>
        {children}
      </Row>
    </Column>
  );
});
CurriculumSection.displayName = 'CurriculumSection'

const TitleContainer = styled.div`
  border-radius: 12px;
  background-color: ${colors.red50};
  padding: 12px;
`;


export default CurriculumSection;
