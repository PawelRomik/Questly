import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
