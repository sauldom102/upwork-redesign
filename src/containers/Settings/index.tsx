import React, { FC, Fragment } from 'react';
import { StatusBar, Header } from 'components';
import { Props } from './types';
import {
  Container,
  Body,
  Block,
  Switch,
  Separator,
  LogoutButton,
} from './styles';
import useConnect from './connect';
import { OPTIONS } from './constants';

const Settings: FC<Props> = () => {
  const { handlePressBack, control, handlePressLogout } = useConnect();

  return (
    <Container>
      <StatusBar />
      <Header title="Settings" onPressGoBack={handlePressBack} />
      <Body>
        <Block>
          {OPTIONS.map((o, i) => (
            <Fragment key={o.name}>
              <Switch name={o.name} control={control} label={o.label} />
              {i !== OPTIONS.length - 1 && <Separator />}
            </Fragment>
          ))}
        </Block>
        <LogoutButton title="Log out" onPress={handlePressLogout} />
      </Body>
    </Container>
  );
};

export default Settings;
