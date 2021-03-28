import uuidv4 from 'uuid/v4';
import Notification from '.';

const NOTIFICATIONS: Notification[] = [
  {
    text:
      'The work week has ended, and your <b>weekly timelog</b> is available for review.',
    time: 'Oct 21',
  },
  {
    text:
      'You have received an invitation to interview for the job "<b>Senior Product/UX Designer</b>". ',
    time: 'Oct 20',
  },
  {
    text:
      'You requested payment of $1,407.00 from <b>Jobhunt</b> via Payoneer MasterCard.',
    time: 'Oct 19',
  },
  {
    text:
      'You requested payment of $1,437.00 from <b>Jobhunt</b> via Payoneer MasterCard.',
    time: 'Oct 16',
  },
  {
    text:
      'You have received an invitation to interview for the job "<b>UI/UX Designer</b>". ',
    time: 'Oct 14',
  },
  {
    text:
      'You requested payment of $1,321.00 from <b>Jobhunt</b> via Payoneer MasterCard.',
    time: 'Oct 13',
  },
  {
    text:
      'You have received an invitation to interview for the job "<b>Need Product Manager to help Manage a USA Developer and then future team of Developers</b>".',
    time: 'Oct 11',
  },
  {
    text:
      'A payment of $14.99 has been applied to your <b>financial account</b>.',
    time: 'Oct 10',
  },
  {
    text:
      'The work week has ended, and your <b>weekly timelog</b> is available for review.',
    time: 'Oct 09',
  },
  {
    text:
      'You requested payment of $1,321.00 from <b>Jobhunt</b> via Payoneer MasterCard.',
    time: 'Oct 08',
  },
].map((c) => ({ ...c, id: uuidv4(), text: `<p>${c.text}</p>` }));

export default NOTIFICATIONS;
