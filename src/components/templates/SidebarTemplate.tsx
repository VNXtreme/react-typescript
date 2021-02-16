import React from 'react';

// import useSidebar from 'hooks/useSidebar';
// import Sidebar from 'components/organismos/Sidebar';
// import Appbar from 'components/organismos/Appbar';
// import useAuth from 'hooks/useAuth';

const SidebarTemplate: React.FC<{
  pageTitle?: string;
}> = ({ children, pageTitle }) =>
// const {
//   isSidebarOpen, toggleSidebar, sidebarItems, hierarchy, setHierarchy,
// } = useSidebar();
// const { staffName } = useAuth();

// set page title
// 組織カテゴリについてはカテゴリ名称に従い画面タイトルが変わるので固定処理とする
// const { pathname } = window.location;
// if (pathname === '/organizationCategory/import') {
//   sessionStorage.setItem('PageTitleCurrent', '組織カテゴリ項目インポート');
// } else if (pathname.indexOf('/organizationCategory/edit') === 0) {
//   sessionStorage.setItem('PageTitleCurrent', '組織カテゴリ項目編集');
// } else if (pathname === '/organizationCategory/add') {
//   sessionStorage.setItem('PageTitleCurrent', '組織カテゴリ項目作成');
// } else {
//   sessionStorage.setItem('PageTitleCurrent', String(pageTitle));
// }

  (
    <div>{children}</div>
  // <Sidebar
  //   isOpen={isSidebarOpen}
  //   items={sidebarItems}
  //   hierarchy={hierarchy}
  //   setHierarchy={setHierarchy}
  // >
  //   <Appbar
  //     toggleSidebar={toggleSidebar}
  //     title={pageTitle}
  //     staffName={staffName}
  //   />
  //   {children}
  // </Sidebar>
  );
export default SidebarTemplate;
