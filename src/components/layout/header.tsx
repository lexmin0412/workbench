interface HeaderTab {
	id: string
	title: string
}

const headerTabs: HeaderTab[] = [
	{
		id: 'issues',
		title: '事项'
	},
	{
		id: 'repos',
		title: '仓库'
	}
]

export default function Header() {
	return (
		<div className="flex">
			{headerTabs.map((tab)=>{
				return (
					<div key={tab.id} className='mr-4'>
						{tab.title}
					</div>
				)
			})}
		</div>
	)
}
