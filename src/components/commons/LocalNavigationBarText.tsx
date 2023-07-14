import React from 'react';
import styled from 'styled-components/native';
import { label, light } from '@/assets/themes';
import { horizontalScale, verticalScale } from '@/utils/matric';

interface StLocalNavigationBarTextProps {
  textColor?: string;
}

interface LocalNavigationBarTextProps extends StLocalNavigationBarTextProps {
  backgroundColor?: string;
  height?: number;
  text: string;
}

const LocalNavigationBarText = ({
  height = 40,
  backgroundColor = light.background,
  textColor = light.contents.contentMain,
  text,
}: LocalNavigationBarTextProps) => {
  return (
    <StCommonLocalNavigationBarText height={height} backgroundColor={backgroundColor}>
      <StLocalNavigationBarText textColor={textColor}>{text}</StLocalNavigationBarText>
    </StCommonLocalNavigationBarText>
  );
};

export default LocalNavigationBarText;

const StCommonLocalNavigationBarText = styled.View<Omit<LocalNavigationBarTextProps, 'text'>>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => verticalScale(props.height!)}px;
  background-color: ${(props) => props.backgroundColor};
  padding: ${verticalScale(12)}px ${horizontalScale(20)}px ${verticalScale(4)}px
    ${horizontalScale(20)}px;
  border-bottom-width: 1px;
  border-color: ${light.border.borderSub};
`;

const StLocalNavigationBarText = styled.Text<StLocalNavigationBarTextProps>`
  color: ${(props) => props.textColor};
  ${label.Medium};
`;
