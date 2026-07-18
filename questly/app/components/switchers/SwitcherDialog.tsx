"use client";
import { switcherVariants } from "@/app/components/switchers/variant/switcherVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { Dialog } from "radix-ui";

type SwitcherDialogProps = {
	trigger: React.ReactNode;
	title: React.ReactNode;
	children: React.ReactNode;
};

export default function SwitcherDialog({ trigger, title, children }: SwitcherDialogProps) {
	const styles = useGameStyles(switcherVariants);

	return (
		<Dialog.Root>
			<Dialog.Trigger className={styles.dialog.trigger()}>{trigger}</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className={styles.dialog.overlay()} />

				<Dialog.Content className={styles.dialog.content()}>
					<Dialog.Title className={styles.dialog.title()}>{title}</Dialog.Title>

					{children}

					<Dialog.Close asChild>
						<button className={styles.dialog.button()}>✕</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
