import styled from "styled-components";

interface ContainerProps {
  gap?: number;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  fill?: boolean;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  padding?: [number, number] | [number];
  wrap?: boolean;
  backgroundColor?: string;
}

const base = styled.div<ContainerProps>`
  display: flex;
  gap: ${props => props.gap || 0}px;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  padding: ${props =>
          `${props.padding ? props.padding[0] : 0}px ${props.padding ? props.padding[1] ?? props.padding[0] : 0}px`
  };
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export const Column = styled(base)`
  flex-direction: column;
`;
export const Row = styled(base)`
  flex-direction: row;
`;
