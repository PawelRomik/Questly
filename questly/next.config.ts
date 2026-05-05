import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		dangerouslyAllowLocalIP: true,
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337"
			}
		]
	}
};

module.exports = nextConfig;
