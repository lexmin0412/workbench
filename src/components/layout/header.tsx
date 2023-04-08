import clsx from 'clsx'
import { useState } from 'react'

interface HeaderTab {
	id: string
	title: string
}

const headerTabs: HeaderTab[] = [
	{
		id: 'issues',
		title: '事项管理'
	},
	{
		id: 'repos',
		title: '仓库管理'
	}
]

export default function Header() {

	const [selected, setSelected] = useState(headerTabs[0].id);

	return (
    <div className="flex items-center">
			{/* logo */}
			<div className="px-4 font-bold text-lg mr-4">
				Lexmin0412
			</div>

			{/* tabs */}
      <div className="flex justify-center w-full">
        {headerTabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={clsx({
                "h-9 leading-9 mr-4 cursor-pointer hover:bg-theme hover:text-white rounded px-2 text-sm":
                  true,
                "bg-theme text-white": selected === tab.id,
              })}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
