import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { LOCALES } from '@constants/i18n';
export default createMiddleware(routing);
 
export const config = {
  matcher: ['/', `/(${LOCALES.join('|')})/:path*`]
};