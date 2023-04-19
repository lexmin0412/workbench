import {useState} from "react";
import {useRequest} from "ahooks";
import dayjs from "dayjs";
import EditModal from "../../components/edit-modal";
import {listUserRepos} from "../../apis";

export default function Repos() {
  const [editModalVisible, setEditModalVisible] = useState(false);

  const {data: repos, loading} = useRequest(() => {
    return listUserRepos("lexmin0412", {
      page: 1,
      per_page: 1000,
      sort: "created",
    });
  });

  console.log("repos111", repos);

  const handleIssueAddBtnClick = () => {
    setEditModalVisible(true);
  };

  const handleEditConfirm = (formValues: any) => {
    console.log("handleEditConfirm", formValues);
    setEditModalVisible(false);
  };

  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="text-xl font-bold">仓库清单</div>
        <div
          className="border w-7 h-7 rounded text-center ml-2 cursor-pointer"
          onClick={handleIssueAddBtnClick}
        >
          +
        </div>
      </div>
      <div className="mt-4 flex flex-wrap">
        {loading
          ? "正在加载..."
          : repos?.map((repo) => {
              return (
                <div className="rounded-md shadow-xl p-4 mb-4 bg-desc cursor-pointer w-96 h-40 mr-4 flex flex-col">
                  <div className="font-semibold">{repo.name}</div>
                  <div className="mt-2 text-sm flex-1">{repo.description}</div>
                  <div className="flex justify-between">
                    <div className="flex text-sm mr-2">
                      创建于 {dayjs(repo.created_at).format("YYYY-MM-DD")}
                    </div>
                    <div className="overflow-auto flex-1">
                      <div className="flex items-center">
                        {repo.topics?.map((topic) => {
                          return (
                            <div className="bg-theme text-white px-2 text-xs ml-2 rounded h-5 leading-5 whitespace-nowrap">
                              {topic}
                            </div>
                          );
                        })}
                      </div>
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
