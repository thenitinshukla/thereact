/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
  // Replace 'personal-website' with your actual GitHub repository name
  trailingSlash: true,
};

export default nextConfig;
