import React, { FC, memo, useMemo } from 'react';
import { Props } from './types';
import { Container, Bottom, Button } from './styles';
import Top from './Top';
import Indicator from './Indicator';

const Footer: FC<Props> = ({ step, totalSteps, onPressButton, control }) => {
  const buttonTitle = useMemo(() => {
    if (step === totalSteps - 1) {
      return 'Submit';
    }

    return step === totalSteps ? 'Great!' : 'Next';
  }, [step, totalSteps]);

  return (
    <Container>
      <Top
        title="You'll Receive"
        subtitle="The estimated amount you'll receive after service fees"
        control={control}
      />
      <Bottom>
        <Indicator count={totalSteps} current={step} />
        <Button title={buttonTitle} onPress={onPressButton} />
      </Bottom>
    </Container>
  );
};

export default memo(Footer);
