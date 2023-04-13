import { createContext, useState } from "react";

export const AdminFlagContext = createContext({} as {
  isAdmin: boolean
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>
})

// 必要なPropsはメモ一覧と削除時に実行する関数
type Props = {
  children: React.ReactNode;
};

export const AdminFlagProvider = (props: Props): JSX.Element => {
  // 引数
  const { children } = props;

  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // ContextオブジェクトとしてisAdminとsetIsAdminを設定(オブジェクトの省略記法)
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};
