import { Rewards } from "@/app/types/quest";
import { ItemDisplay } from "@/app/components/item/ItemDisplay";
import { Tooltip } from "radix-ui";

export function ModalRewards({ rewards }: { rewards: Rewards }) {
	return (
		<div className='border-t border-r flex flex-1 flex-col border-zinc-700 p-5 bg-zinc-900'>
			<h3 className='font-semibold text-gray-300 mb-2'>REWARDS</h3>

			<div className='flex gap-2 mt-4'>
				<div className='flex items-center'>
					<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>XP</span>
					<span className='px-2 py-1 text-xs bg-zinc-950 rounded-r'>{rewards.experience}</span>
				</div>

				<div className='flex items-center'>
					<span className='px-2 py-1 text-xs bg-zinc-700 rounded-l'>Gold</span>
					<span className='px-2 py-1 text-xs bg-zinc-950 rounded-r'>{rewards.money}</span>
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
	);
}
