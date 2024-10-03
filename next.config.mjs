/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true,
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname:"neoyug-media-upload-bucket.s3.amazonaws.com",

            },
            {
                protocol: 'https',
                hostname:"neoyug-par-bucket.s3.eu-north-1.amazonaws.com",

            },
        ]
    }
};

export default nextConfig;
