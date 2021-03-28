import React, { FC, memo, useCallback, useRef } from 'react';
import { Props } from './types';
import { Container, Left, Right } from './styles';

const FullscreenButtons: FC<Props> = ({
  onPressLeft,
  onPressRight,
  onHold,
  onRelease,
}) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const longPressed = useRef(false);

  const handleActiveStateChange = useCallback(
    (active: boolean) => {
      if (onHold && onRelease) {
        if (active) {
          timeout.current = setTimeout(() => {
            longPressed.current = true;
            onHold();
          }, 250);
        } else if (timeout.current) {
          clearTimeout(timeout.current);
        }

        if (longPressed.current) {
          onRelease();
        }
      }
    },
    [onHold, onRelease],
  );

  const handlePressLeft = useCallback(() => {
    if (!longPressed.current && onPressLeft) {
      onPressLeft();
    }
    longPressed.current = false;
  }, [onPressLeft]);

  const handlePressRight = useCallback(() => {
    if (!longPressed.current && onPressRight) {
      onPressRight();
    }
    longPressed.current = false;
  }, [onPressRight]);

  return (
    <Container>
      <Left
        onPress={handlePressLeft}
        onActiveStateChange={handleActiveStateChange}
      />
      <Right
        onPress={handlePressRight}
        onActiveStateChange={handleActiveStateChange}
      />
    </Container>
  );
};

export default memo(FullscreenButtons);
