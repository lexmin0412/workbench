import { useState } from "react"

interface EditModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (formValues: any) => void;
}

export default function EditModal(props: EditModalProps) {

	const { visible, onClose, onConfirm } = props
	const [formValues, setFormValues] = useState({
		title: '',
		desc: ''
	})

	const handleConfirm = () => {
		onConfirm(formValues);
	}

	const handleValueChange = (fieldName: string, e) => {
		setFormValues({
			...formValues,
			[fieldName]: e.target.value
		})
	}

	if (!visible) {
		return null
  }

	return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]">
      <div className="bg-white absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded">
        {/* 头部 */}
        <div className="flex items-center">
          <div className="font-bold px-4 h-12 leading-12 flex-1">添加事项</div>
          <div
            className="pr-4 h-8 leading-8 cursor-pointer"
            onClick={() => onClose()}
          >
            X
          </div>
        </div>

        {/* 表单 */}
        <div className="mt-4">
          <div className="px-4 flex h-12 leading-12 mb-4">
            <label className="w-20">标题</label>
            <input
              className="flex-1 px-3"
              type="text"
              placeholder="请输入标题"
              value={formValues.title}
              onChange={(e) => handleValueChange("title", e)}
            />
          </div>
          <div className="px-4 flex h-12 leading-12">
            <label className="w-20">描述</label>
            <textarea
              className="flex-1 px-3"
              placeholder="请输入描述"
              value={formValues.desc}
              onChange={(e) => handleValueChange("desc", e)}
            />
          </div>
        </div>

        {/* 底部按钮组 */}
        <div className="buttons flex justify-end my-5 pr-4">
          <button
            className="text-sm text-theme border-theme mr-4"
            onClick={() => onClose()}
          >
            取消
          </button>
          <button
            className="text-sm text-white bg-theme"
            onClick={handleConfirm}
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
}
