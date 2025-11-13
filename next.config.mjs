import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack: (config) => {
        return config;
    },
    cacheComponents: true,
};

export default withNextVideo(nextConfig);