import React, { FC, memo } from 'react';
import { MenuItem } from 'components';
import { Props } from './types';
import { Container, FullName, Location, Menu } from './styles';
import RichAvatar from './RichAvatar';

const ITEMS = [
  {
    routeName: 'MyStats',
    title: 'My Stats',
  },
  {
    routeName: 'Reports',
    title: 'Reports',
  },
  {
    routeName: 'Contracts',
    title: 'Contracts',
  },
  {
    routeName: 'Support',
    title: 'Support',
  },
  {
    routeName: 'Settings',
    title: 'Settings',
  },
];

const Header: FC<Props> = ({
  fullName,
  jobSuccess,
  location,
  premium,
  verified,
  onPressMenuItem,
}) => (
  <Container>
    <RichAvatar progress={jobSuccess} />
    <FullName title={fullName} verified={verified} premium={premium} />
    <Location title={location} />
    <Menu>
      {ITEMS.map((it) => (
        <MenuItem key={it.routeName} {...it} onPress={onPressMenuItem} />
      ))}
    </Menu>
  </Container>
);

export default memo(Header);
