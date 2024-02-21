/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/arsdfirst/spatium/**",
      },
    ],
  },
};

module.exports = nextConfig;
