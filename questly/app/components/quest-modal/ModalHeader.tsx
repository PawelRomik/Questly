import { Dialog } from "radix-ui";

export function ModalHeader({ title }: { title: string }) {
	return <Dialog.Title className='text-2xl px-6 py-4 bg-red-700 font-bold tracking-wide text-white'>{title}</Dialog.Title>;
}
