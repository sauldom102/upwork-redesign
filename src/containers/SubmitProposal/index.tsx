import React, { FC } from 'react';
import { StatusBar } from 'components';
import { Props } from './types';
import {
  Container,
  Body,
  Top,
  Title,
  Description,
  Cards,
  Card,
  Question,
} from './styles';
import Header from './Header';
import Footer from './Footer';
import useConnect from './connect';
import FirstCard from './FirstCard';
import Finish from './Finish';

const SubmitProposal: FC<Props> = () => {
  const {
    step,
    cards,
    handlePressClose,
    control,
    submit,
    handleMomentumScrollEnd,
    finished,
  } = useConnect();

  return (
    <Container>
      <StatusBar light={finished} />
      <Header title="Submit Proposal" onPressClose={handlePressClose} />
      <Body>
        <Top>
          <Title>Jobhunt Redesign Project</Title>
          <Description numberOfLines={3}>
            I am looking for a Co-Founder to join me visualize an idea to
            fruition. The Macro Idea is an Platform BYOB which stands for
            BeYourOwnBoss will be a social media to give a platform to
            entrepreneurs and investors and freelancers enhance the way they
            regularly network and to create for themselves and as our slogan
            says &quot;Make it Real&quot;. You will need to show only one or two
            examples of your best quality work with proof, so original sketch
            file (screenshots ok) Will need to be turned around quickly, so
            working over the weekend ay be necessary.
          </Description>
        </Top>
        <Cards ref={cards} onMomentumScrollEnd={handleMomentumScrollEnd}>
          <FirstCard control={control} />
          <Card>
            <Question
              name="help"
              title="Cover Letter"
              placeholder="Try to tell client how you can help"
              control={control}
              centered
              biggerInput
              first
            />
          </Card>
          <Card>
            <Question
              name="suggestions"
              title="Do you have any suggestions to make this project work successfully?"
              placeholder="Notice, that clients see additional questions first, then cover letter"
              control={control}
              first
            />
            <Question
              name="appealing"
              title="What part of this project most appeals to you?"
              placeholder="Notice, that clients see additional questions first, then cover letter"
              control={control}
            />
          </Card>
        </Cards>
      </Body>
      <Footer
        step={step}
        totalSteps={3}
        control={control}
        onPressButton={submit}
      />
      <Finish show={finished} />
    </Container>
  );
};

export default SubmitProposal;
