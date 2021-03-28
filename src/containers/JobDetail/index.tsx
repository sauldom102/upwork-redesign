import React, { FC } from 'react';
import { ButtonFooter, StatusBar } from 'components';
import { Props } from './types';
import {
  Container,
  Body,
  Main,
  Description,
  Feats,
  Feat,
  Cards,
  ActivityCard,
  SkillsCard,
  DataCard,
  FlagButton,
} from './styles';
import Header from './Header';
import useConnect from './connect';

const JobDetail: FC<Props> = () => {
  const {
    handlePressGoBack,
    handlePressSubmitProposal,
    liked,
    handlePressFave,
  } = useConnect();

  return (
    <Container>
      <StatusBar />
      <Header
        title="Jobhunt Redesign Project"
        subtitle="Product Designer"
        onPressBack={handlePressGoBack}
        isFave={liked}
        onPressFave={handlePressFave}
      />
      <Body>
        <Main>
          <Description>
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
          <Feats>
            <Feat title="Less Than 10 hrs/week" />
            <Feat title="More Than 6 Month" />
            <Feat title="$$$" />
          </Feats>
        </Main>
        <Cards>
          <SkillsCard
            skills={[
              'Figma',
              'Sketch',
              'UI Design',
              'UX Design',
              'Wireframes',
              'Prototyping',
              'User Flows',
            ]}
          />
          <ActivityCard
            feats={[
              {
                title: '5 to 6',
                subtitle: 'Proposals',
              },
              {
                title: '6',
                subtitle: 'Interviewing',
              },
              {
                title: '15',
                subtitle: 'Invites Sent',
              },
              {
                title: '4',
                subtitle: 'Answered Invites',
              },
            ]}
          />
          <DataCard
            title="About the Client"
            data={[
              {
                title: 'United States',
                subtitle: 'Tampa 02:32 PM',
              },
              {
                title: '25 Jobs Posted',
                subtitle: '80% Hire Rate, 1 Job Open',
              },
              {
                title: '$ 200M+ Total Spent',
                subtitle: '372 Hires, 55 Active',
              },
              {
                title: '$ 37.25 Avg Hourly Rate Paid',
                subtitle: '110,152 Hours',
              },
            ]}
            rating={4}
            ratingTotal={12}
            paymentVerified
          />
          <FlagButton title="Flag as Inappropiate" leftIcon="flag" />
        </Cards>
      </Body>
      <ButtonFooter
        title="Submit a Proposal"
        onPress={handlePressSubmitProposal}
      />
    </Container>
  );
};

export default JobDetail;
