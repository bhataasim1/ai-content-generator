/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            '127.0.0.1',
            "images.unsplash.com",
            "unsplash.com",
            "plus.unsplash.com",
            "firebasestorage.googleapis.com",
            "img.clerk.com"
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
