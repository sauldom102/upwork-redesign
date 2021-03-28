import React, { useCallback, FC, memo } from 'react';
import {
  BriefcaseIcon,
  ProposalsIcon,
  MessagesIcon,
  NotificationsIcon,
  StatsIcon,
  ReportsIcon,
  ContractIcon,
  SupportIcon,
  SettingsIcon,
} from 'components/Icons';
import Avatar from 'components/Avatar';
import {
  Container,
  Content,
  Icon,
  Label,
  BadgeMain,
  BadgeText,
} from './styles';
import { Props } from './types';

const MenuItem: FC<Props> = ({
  isFocused = false,
  title,
  routeKey,
  routeName,
  badge,
  onPress,
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress({ routeName, routeKey, isFocused });
    }
  }, [onPress, isFocused, routeKey, routeName]);

  return (
    <Container onPress={handlePress} activeOpacity={0.5}>
      <Content>
        <Icon focused={isFocused}>
          {routeName === 'Jobs' && <BriefcaseIcon focused={isFocused} />}
          {routeName === 'Proposals' && <ProposalsIcon focused={isFocused} />}
          {routeName === 'Messages' && <MessagesIcon focused={isFocused} />}
          {routeName === 'Notifications' && (
            <NotificationsIcon focused={isFocused} />
          )}
          {routeName === 'MyStats' && <StatsIcon />}
          {routeName === 'Reports' && <ReportsIcon />}
          {routeName === 'Contracts' && <ContractIcon />}
          {routeName === 'Support' && <SupportIcon />}
          {routeName === 'Settings' && <SettingsIcon />}
          {routeName === 'Profile' && (
            <Avatar
              uri="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              size={26}
            />
          )}
          {!!badge && (
            <BadgeMain>
              <BadgeText>{badge}</BadgeText>
            </BadgeMain>
          )}
        </Icon>
        <Label focused={isFocused}>{title ?? routeName}</Label>
      </Content>
    </Container>
  );
};

export default memo(MenuItem);
