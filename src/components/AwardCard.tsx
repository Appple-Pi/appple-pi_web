'use client'

import React from 'react';
import styled from "styled-components";
import colors from "@/themes/colors";
import Typography from "@/components/base/Typography";

interface AwardCardProps {
  title: string;
  member: string[];
}

const AwardCard = ({title, member}: AwardCardProps) => {
  return (
    <Container>
      <Typography.Bold7 color={colors.gray800}>
        {title}
      </Typography.Bold7>
      <Typography.SemiBold9 color={colors.gray600}>
        {member.join(', ')}
      </Typography.SemiBold9>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  width: 385px;
  height: 108px;
  background-color: ${colors.gray200};
`;

export default AwardCard;
