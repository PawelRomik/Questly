"use client";
import Image from "next/image";
import sword from "../../../public/assets/sword.webp";

type Props = {
	label: string;
	checked: boolean;
	disabled?: boolean;
	onChange: (value: boolean) => void;
	theme: {
		border: string;
		color: string;
	};
};

export function Checkbox({ label, checked, disabled, onChange, theme }: Props) {
	return (
		<label
			className={`
        flex items-center gap-3 cursor-pointer text-sm
        ${disabled ? "opacity-40 cursor-not-allowed" : "text-[#cfc6a4] hover:text-white"}
        transition
      `}
		>
			{/* BOX */}
			<div className='relative w-5 h-5'>
				<input type='checkbox' disabled={disabled} checked={checked} onChange={(e) => onChange(e.target.checked)} className='absolute inset-0 opacity-0 cursor-pointer peer' />

				{/* BASE */}
				<div
					className={`
            w-full h-full flex items-center justify-center
            
            bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]
            shadow-[inset_0_0_6px_rgba(0,0,0,0.8)]
            transition
			border-[#c6a85a] relative
			border-2 shadow-3xl 
           
          `}
				>
					{checked && <Image src={sword} alt='check' unoptimized className='absolute select-none pointer-events-none object-contain h-[20px] scale-300' />}
				</div>
			</div>

			{/* LABEL */}
			<span className='uppercase tracking-wide'>{label}</span>
		</label>
	);
}
