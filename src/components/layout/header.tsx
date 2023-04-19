import clsx from 'clsx'
import { useEffect, useState } from 'react'

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

const links = [
	{
		type: 'outside',
		text: 'Github',
		url: 'https://github.com/lexmin0412/workbench'
	}
]

const openNewPage = (url: string) => {
	window.open(url)
}

export default function Header() {

	const [selected, setSelected] = useState(headerTabs[0].id);

	useEffect(()=>{
		setSelected(window.location.pathname.slice(1));
	}, [])


	const handleTabChange = (tab) => {
		console.log("handleTabChange", tab);
		window.location.href = `${window.location.origin}/${tab.id}`;
	}

	return (
    <div className="flex items-center w-full">
			{/* logo */}
			<div className="px-4 font-bold text-lg mr-4 cursor-pointer">
				Lexmin0412
			</div>

			{/* tabs */}
      <div className="flex justify-start w-full flex-1">
        {headerTabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={clsx({
                "h-9 leading-9 mr-4 cursor-pointer hover:bg-theme hover:text-white rounded px-2 text-sm":
                  true,
                "bg-theme text-white": selected === tab.id,
              })}
							onClick={()=>handleTabChange(tab)}
            >
              {tab.title}
            </div>
          );
        })}
      </div>

			<div className="pr-4">
				{
					links.map((link)=>{
						return (
              <div
                className="cursor-pointer"
                onClick={() => openNewPage(link.url)}
              >
                {link.text}
              </div>
            );
					})
				}
			</div>
    </div>
  );
}
