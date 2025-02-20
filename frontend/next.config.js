// eslint-disable-next-line @typescript-eslint/no-require-imports
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

const config = withNextIntl(nextConfig);

module.exports = config; 