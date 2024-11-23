import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    loader: 'cloudinary',
    path:'https://res.cloudinary.com/yasirucloudi/image/upload/'
  }
};

export default nextConfig;
