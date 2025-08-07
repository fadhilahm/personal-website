import { type FC } from 'react';
import GitHubCalendar from 'react-github-calendar';

import { Theme } from '@constants/theme';

type ContributionProps = {
  username: string;
  theme?: Theme;
  year?: number;
};

export const Contribution: FC<ContributionProps> = ({ username, theme = Theme.Dark, year = new Date().getFullYear() }) => {
  return <GitHubCalendar username={username} colorScheme={theme} year={year} />;
};

export default Contribution;
