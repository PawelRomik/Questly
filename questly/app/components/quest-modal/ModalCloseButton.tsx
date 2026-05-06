import { Dialog } from "radix-ui";

export function ModalCloseButton() {
	return (
		<Dialog.Close asChild>
			<button
				className='
          absolute top-3 right-3
          w-8 h-8
          flex items-center justify-center
          bg-black/60
          border border-[#444]
          hover:bg-[#7a1414]
          cursor-pointer
          transition
        '
			>
				✕
			</button>
		</Dialog.Close>
	);
}
