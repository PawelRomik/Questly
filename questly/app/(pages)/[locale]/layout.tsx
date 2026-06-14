import "../../globals.css";
import Providers from "@/app/providers";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	const messages = await getMessages();

	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<NextIntlClientProvider messages={messages} locale={locale}>
					<Providers> {children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
