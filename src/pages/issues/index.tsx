import { useState } from "react";
import EditModal from "./components/edit-modal";

export default function Issues() {

	const [editModalVisible, setEditModalVisible] = useState(false);

	const issues = [
    {
      id: Math.random(),
      title: "自定义请求库",
      desc: "封装各平台如 Github Rest API 的请求，统一请求及响应格式，降低心智负担",
      createdAt: "2023.04.08",
      tags: ["重要", "紧急"],
    },
    {
      id: Math.random(),
      title: "tpc 功能增强",
      desc: "加强 TPC 的自定义功能，支持自定义打包格式、运行平台、构建工具、TS 版本等",
      createdAt: "2023.04.08",
      tags: ["重要"],
    },
    {
      id: Math.random(),
      title: "可拖拽排序表单",
      desc: "支持拖拽排序，支持自定义表单组件尺寸，支持动态添加表单，支持数据驱动",
      createdAt: "2023.04.09",
      tags: ["重要"],
    },
    {
      id: Math.random(),
      title: "日程管理",
      desc: "支持通过日历形式展示，支持通过 webhook 发送提醒，支持与 todo 项目同步数据",
      createdAt: "2023.04.10",
      tags: ["重要"],
    },
    {
      id: Math.random(),
      title: "规则选择器",
      desc: "支持通过 AND、OR、IN 等组合关系输出一个标准化的规则集，支持数据驱动，异步规则",
      createdAt: "2023.04.11",
      tags: ["重要"],
    },
    {
      id: Math.random(),
      title: "支持数据驱动和异步的 Select",
      desc: "支持数据驱动、异步请求的 Select 选择器",
      createdAt: "2023.04.11",
      tags: ["重要"],
    },
    {
      id: Math.random(),
      title: "Github 语言趋势统计",
      desc: "通过折线图的趋势来反映自己的 Github 项目中使用语言所占比重的趋势",
      createdAt: "2023.04.11",
      tags: ["重要"],
    },
  ];

	const handleIssueAddBtnClick = () => {
		setEditModalVisible(true)
	}

	const handleEditConfirm = (formValues: any) => {
		console.log("handleEditConfirm", formValues);
    setEditModalVisible(false);
  };

	return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="text-xl font-bold">事项清单</div>
        <div
          className="border w-7 h-7 rounded text-center ml-2 cursor-pointer"
          onClick={handleIssueAddBtnClick}
        >
          +
        </div>
      </div>
      <div className="mt-4 flex flex-wrap">
        {issues.map((issue) => {
          return (
            <div className="rounded-md shadow-xl p-4 mb-4 bg-desc cursor-pointer w-96 h-40 mr-4 flex flex-col">
              <div className="font-semibold">{issue.title}</div>
              <div className="mt-2 text-sm flex-1">{issue.desc}</div>
              <div className="flex justify-between">
								<div className="flex text-sm">
									创建于 {issue.createdAt}
								</div>
                <div className="flex items-center">
                  {issue.tags.map((tag) => {
                    return (
                      <div className="bg-theme text-white px-2 text-xs ml-2 rounded h-5 leading-5">
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <EditModal
        visible={editModalVisible}
        onClose={() => {
          setEditModalVisible(false);
        }}
        onConfirm={handleEditConfirm}
      />
    </div>
  );
}
