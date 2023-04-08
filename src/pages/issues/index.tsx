export default function Issues() {

	const issues = [
    {
      id: Math.random(),
      title: "自定义请求库",
      desc: "封装各平台如 Github Rest API 的请求，统一请求及响应格式，降低心智负担",
			tags: ['重要', '紧急']
    },
    {
      id: Math.random(),
      title: "tpc 功能增强",
      desc: "加强 TPC 的自定义功能，支持自定义打包格式、运行平台、构建工具、TS 版本等",
			tags: ['重要']
    },
  ];

	return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="text-xl font-bold">事项清单</div>
        <div className="border w-7 h-7 rounded text-center ml-2">+</div>
      </div>
      <div className="mt-4 flex flex-wrap">
        {issues.map((issue) => {
          return (
            <div className="rounded-md shadow-xl p-4 mb-4 bg-desc cursor-pointer w-96 h-40 mr-4 flex flex-col">
              <div className="font-semibold">{issue.title}</div>
              <div className="mt-2 text-sm flex-1">{issue.desc}</div>
              <div className="flex justify-end">
                {issue.tags.map((tag) => {
                  return (
                    <div className="bg-theme text-white px-2 text-xs ml-2 rounded h-5 leading-5">
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
