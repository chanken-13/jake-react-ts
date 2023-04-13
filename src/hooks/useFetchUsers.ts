import { useState, useEffect } from "react";
import axios from "axios";

// ユーザー一覧を取得するカスタムフック
export const useFetchUsers = () => {
  const [userList, setUserList] = useState<DspUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
    },
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  };

  type DspUser = {
    id: number;
    name: string;
    username: string;
    age: string;
    street: string;
  };

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = (): void => {
    // ボタン押下時にローディングフラグon、エラーフラグoff
    setIsLoading(true);
    setIsError(false);

    // APIの実行
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((result) => {
        // 苗字と名前を結合するように変換
        const users = result.data.map((user: User) => ({
          key: user.id,
          id: user.id,
          name: `${user.name} ${user.username}`,
          age: user.phone,
          street: user.address.street,
        }));
        // ユーザー一覧Stateを更新
        setUserList(users);
      })
      // エラーの場合はエラーフラグをon
      .catch(() => setIsError(true))
      // 処理完了後はローディングフラグをoff
      .finally(() => setIsLoading(false));
  };

  // まとめて返却したいのでオブジェクトに設定する
  return { userList, isLoading, isError, onClickFetchUser };
};
