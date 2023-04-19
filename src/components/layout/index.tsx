/**
 * 整体布局组件
 */
interface LayoutProps {
  header: JSX.Element | JSX.Element[];
  footer: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}

export default function Layout(props: LayoutProps) {

	const { header, footer, children } = props

	return (
    <div className="flex flex-col h-full">
      {/* 头部 */}
      <div className="flex h-14 items-center border-b border-b-slate-300 ">
        {header}
      </div>
      {/* 内容区 */}
      <div className="flex flex-1 px-4 py-4 overflow-auto">{children}</div>
      {/* 底部 */}
      <div className="flex h-14 leading-14">{footer}</div>
    </div>
  );
}
