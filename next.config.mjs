/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;*/

const nextConfig = {
  skipTrailingSlashRedirect: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
