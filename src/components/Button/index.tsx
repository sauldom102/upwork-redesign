import React, { FC, memo } from 'react';
import { FlagIcon, PlayRoundIcon } from 'components/Icons';
import { Container, Main, Left, Title } from './styles';
import { Props } from './types';
import Icon from './Icon';

const Button: FC<Props> = ({
  title,
  onPress,
  leftIcon,
  enabled = true,
  variant = 'primary',
  style,
  mainStyle,
}) => (
  <Container onPress={onPress} enabled={enabled} style={style}>
    <Main variant={variant} style={mainStyle}>
      <Icon variant={variant} />
      {leftIcon && (
        <Left>
          {leftIcon === 'play' && <PlayRoundIcon />}
          {leftIcon === 'flag' && <FlagIcon />}
        </Left>
      )}
      <Title variant={variant}>{title}</Title>
    </Main>
  </Container>
);

export default memo(Button);
