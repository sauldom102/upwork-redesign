import range from 'lodash/range';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export const JOB_OFFERS = range(20).map(() => ({
  id: uuidv4(),
  title: 'Jobhunt Redesign Project',
  description:
    'I am looking for a Co-Founder to join me visualize an idea to fruition. The Macro Idea is an Platform BYOB which stands for  BeYourOwnBoss will be a social media to give a platform to entrepreneurs and investors and freelancers enhance the way they regularly network and to create for themselves and as our slogan says "Make it Real". I also have a nice project to work on.',
  featured: Math.random() > 0.5,
  paymentVerified: Math.random() > 0.5,
}));
