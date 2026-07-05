"use client";

import { Dialog } from "radix-ui";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/app/data/locales";

export default function LocaleSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();

	const currentLocale = LOCALES.find((l) => l.code === locale)!;

	return (
		<Dialog.Root>
			<Dialog.Trigger className='flex items-center justify-end'>
				<span className={`fi fi-${currentLocale.flag} rounded-sm text-2xl`} />
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 z-40 bg-black/70 backdrop-blur-sm' />

				<Dialog.Content className='fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-800 bg-[#0b0b0f] p-6 shadow-2xl'>
					<Dialog.Title className='mb-6 text-center text-xl font-semibold text-white'>Select language</Dialog.Title>

					<div className='grid grid-cols-3 gap-4'>
						{LOCALES.map((item) => (
							<Link
								key={item.code}
								href={pathname.replace(`/${locale}`, `/${item.code}`)}
								className={`flex flex-col items-center gap-3 rounded-lg p-4 transition hover:bg-neutral-900 ${item.code === locale ? "bg-neutral-800" : ""}`}
							>
								<span className={`fi fi-${item.flag} text-4xl`} />

								<span className='text-center text-sm text-white'>{item.name}</span>
							</Link>
						))}
					</div>

					<Dialog.Close asChild>
						<button className='absolute top-3 right-3 text-neutral-400 hover:text-white'>✕</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
