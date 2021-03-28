import React, { FC, memo } from 'react';
import { Props } from './types';
import {
  Container,
  Main,
  Body,
  Top,
  TopLeft,
  TopRight,
  IconButton,
  Subtitle,
  Title,
  Feats,
  Feat,
  Description,
  Verified,
} from './styles';
import Featured from './Featured';
import useLogic from './logic';

const Item: FC<Props> = ({
  id,
  title,
  description,
  featured = false,
  paymentVerified = false,
  fave = false,
  onPress,
  onPressFave,
  onPressClose,
}) => {
  const {
    animatedStyle,
    handlePress,
    handlePressFave,
    handlePressClose,
    onLayout,
  } = useLogic({
    id,
    onPress,
    onPressFave,
    onPressClose,
  });

  return (
    <Container style={animatedStyle} onPress={handlePress}>
      <Main onLayout={onLayout}>
        {featured && <Featured />}
        <Body featured={featured}>
          <Top>
            <TopLeft>
              <Subtitle>Hourly - Posted 2 hours ago</Subtitle>
              <Title>{title}</Title>
            </TopLeft>
            <TopRight>
              <IconButton type="fave" active={fave} onPress={handlePressFave} />
              <IconButton type="remove" onPress={handlePressClose} />
            </TopRight>
          </Top>
          <Feats>
            <Feat title="Less than 10 hrs/week" />
            <Feat title="More than 6 Month" />
            <Feat title="$" />
          </Feats>
          <Description>{description}</Description>
          <Feats>
            {paymentVerified && <Verified title="Payment Verified" />}
            <Feat title="10K+" subtitle="Spend" />
          </Feats>
        </Body>
      </Main>
    </Container>
  );
};

export default memo(Item);
