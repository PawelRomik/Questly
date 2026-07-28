"use client";
import { getTheme } from "@/app/lib/utils/getTheme";
import { Dialog } from "radix-ui";

type SwitcherDialogProps = {
	trigger: React.ReactNode;
	title: React.ReactNode;
	children: React.ReactNode;
	game?: string;
};

export default function SwitcherDialog({ trigger, title, children, game }: SwitcherDialogProps) {
	const theme = getTheme("switcher", game);

	return (
		<Dialog.Root>
			<Dialog.Trigger className={theme.dialog.trigger()}>{trigger}</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className={theme.dialog.overlay()} />

				<Dialog.Content className={theme.dialog.content()}>
					<Dialog.Title className={theme.dialog.title()}>{title}</Dialog.Title>

					{children}

					<Dialog.Close asChild>
						<button className={theme.dialog.button()}>✕</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
