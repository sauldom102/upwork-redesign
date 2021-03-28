import React, { FC, memo } from 'react';
import isUndefined from 'lodash/isUndefined';
import Rating from 'components/Rating';
import VerifiedBadge from 'components/VerifiedBadge';
import { Props } from './types';
import { Container, Title, Top, Body, Item } from './styles';

const DataCard: FC<Props> = ({
  title,
  data,
  paymentVerified,
  rating,
  ratingTotal,
  style,
}) => (
  <Container style={style}>
    <Title>{title}</Title>
    {(paymentVerified || !isUndefined(rating)) && (
      <Top>
        {paymentVerified && <VerifiedBadge title="Payment Verified" />}
        {!isUndefined(rating) && <Rating value={rating} total={ratingTotal} />}
      </Top>
    )}
    <Body>
      {data.map((it) => (
        <Item key={it.title} {...it} />
      ))}
    </Body>
  </Container>
);

export default memo(DataCard);
