type SearchBarProps = {
	search: string;
	setSearch: (value: string) => void;
	groupByType: boolean;
	setGroupByType: (value: boolean) => void;
	sort: string;
	setSort: (value: string) => void;
	searchTags: boolean;
	setSearchTags: (value: boolean) => void;
};

export default function SearchBar({ search, setSearch, groupByType, setGroupByType, sort, setSort, searchTags, setSearchTags }: SearchBarProps) {
	return (
		<div className='w-full max-w-xl m-auto flex flex-col gap-3 px-3'>
			<input
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Search quests...'
				className='w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-red-600'
			/>

			<div className='flex justify-between items-center'>
				<label className='flex items-center gap-2 text-sm text-zinc-300 cursor-pointer'>
					<input type='checkbox' checked={groupByType} onChange={(e) => setGroupByType(e.target.checked)} className='accent-red-600' />
					Group by type
				</label>
				<label className='flex items-center gap-2 text-sm text-zinc-300 cursor-pointer'>
					<input type='checkbox' checked={searchTags} onChange={(e) => setSearchTags(e.target.checked)} className='accent-red-600' />
					Search in tags
				</label>

				<select value={sort} onChange={(e) => setSort(e.target.value)} className='bg-zinc-800 border border-zinc-700 text-sm px-3 py-1 rounded text-white'>
					<option value='az'>Title A-Z</option>
					<option value='za'>Title Z-A</option>
					<option value='levelAsc'>Level ↑</option>
					<option value='levelDesc'>Level ↓</option>
				</select>
			</div>
		</div>
	);
}
