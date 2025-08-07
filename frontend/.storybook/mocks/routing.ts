import { fn } from '@storybook/test';

export const useRouter = () => ({
  replace: fn().mockName('router.replace'),
  push: fn().mockName('router.push'),
});

export const usePathname = () => '/mock-path';

export const redirect = fn().mockName('redirect');
