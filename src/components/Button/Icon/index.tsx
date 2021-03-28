import React, { FC, memo } from 'react';
import { AppleIcon, FacebookIcon, GoogleIcon } from 'components/Icons';
import { Props } from './types';
import { Container } from './styles';

const Icon: FC<Props> = ({ variant }) => {
  if (variant === 'primary' || variant === 'secondary') {
    return null;
  }

  return (
    <Container>
      {variant === 'facebook' && <FacebookIcon />}
      {variant === 'google' && <GoogleIcon />}
      {variant === 'apple' && <AppleIcon />}
    </Container>
  );
};

export default memo(Icon);
