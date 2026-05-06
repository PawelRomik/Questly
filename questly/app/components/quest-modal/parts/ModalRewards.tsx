import { Rewards } from "@/app/types/quest";
import { ItemDisplay } from "@/app/components/item/ItemDisplay";
import { Tooltip } from "radix-ui";
import Image from "next/image";
import money from "../../../../public/assets/money.webp";
import xp from "../../../../public/assets/xp.webp";

export function ModalRewards({ rewards }: { rewards: Rewards }) {
	return (
		<div className='col-2 row-4 flex  flex-col p-4 border-3 border-t-0 border-[rgb(40,37,28)] bg-black/20'>
			<h3 className='text-xs uppercase tracking-wider text-[#a68b5b]'>Rewards</h3>
			<div className=' h-full flex justify-center flex-1 flex-col '>
				<div className='flex gap-6 '>
					<div className='flex items-center gap-2'>
						<Image src={xp} alt='currency' unoptimized />
						<span className=' py-1 text-xs rounded-r'>{rewards.experience}</span>
					</div>

					<div className='flex items-center gap-2'>
						<Image src={money} alt='currency' unoptimized />
						<span className=' py-1 text-xs rounded-r'>{rewards.money}</span>
					</div>

					{rewards.items?.length > 0 && (
						<div>
							<Tooltip.Provider delayDuration={100}>
								<div className='flex gap-3 flex-wrap'>
									{rewards.items.map((item, i) => (
										<ItemDisplay key={i} item={item} />
									))}
								</div>
							</Tooltip.Provider>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
