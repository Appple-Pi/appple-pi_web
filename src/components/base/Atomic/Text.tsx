import styled from 'styled-components';
import colors from '@/themes/colors';

interface TextProps {
  size?: number;
  weight?: number;
  color?: string;
}

export const Text = styled.p<TextProps>`
  font-weight: ${props => props.weight || 500};
  font-size: ${props => props.size || 14}px;
  color: ${props => props.color || colors.gray900};
  white-space: pre-line;
`;
