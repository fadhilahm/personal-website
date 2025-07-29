import { env } from '@config/env';
import { type FC } from 'react';


import { Contribution as ContributionComponent } from './Contribution';

export const Contribution: FC = () => {
  return <ContributionComponent username={env.NEXT_PUBLIC_GITHUB_USERNAME} />;
};

export default Contribution;