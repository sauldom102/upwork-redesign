import React, { FC, memo, useMemo } from 'react';
import {
  StarIcon,
  RemoveIcon,
  AddIcon,
  ChevronLeftIcon,
} from 'components/Icons';
import { colors } from 'theme';
import { Props } from './types';
import { Container, Main } from './styles';
import { getIconSizeValue } from './utils';

const IconButton: FC<Props> = ({
  type,
  active = false,
  onPress,
  size = 'm',
  bgColor = '#fafafa',
  iconColor: initialIconColor,
  style,
}) => {
  const iconSize = useMemo(() => getIconSizeValue(size, type), [size, type]);
  const iconColor =
    initialIconColor ?? (active ? colors.primary : colors.gray1);

  const iconProps = useMemo(() => ({ size: iconSize, color: iconColor }), [
    iconSize,
    iconColor,
  ]);

  return (
    <Container onPress={onPress} style={style}>
      <Main color={bgColor} size={size}>
        {type === 'fave' && <StarIcon {...iconProps} />}
        {type === 'remove' && <RemoveIcon {...iconProps} />}
        {type === 'add' && <AddIcon {...iconProps} />}
        {type === 'back' && <ChevronLeftIcon {...iconProps} />}
      </Main>
    </Container>
  );
};

export default memo(IconButton);
