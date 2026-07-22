import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const storageHost = process.env.NEXT_PUBLIC_STORAGE_URL ? new URL(process.env.NEXT_PUBLIC_STORAGE_URL).hostname : "";

const nextConfig: NextConfig = {
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: storageHost
			}
		]
	}
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
