module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/components/*': ['components/*'],
    },
  },
};
