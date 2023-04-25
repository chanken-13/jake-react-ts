
//#region 5章 CSS(TypeScript化)

// // import {Fragment} from "react";
// // State
// import { useState } from "react";
// // メッセージ出力
// import { ColoredMessage } from "./components/4_basic/ColoredMessage";
// // CSS
// import { CssModules } from "./components/5_css/CssModules";
// import { StyledJsx } from "./components/5_css/StyledJsx";
// import { StyledComponents } from "./components/5_css/StyledComponents";
// import { Emotion } from "./components/5_css/Emotion";
// // import { TailwindCss } from "./components/5_css/TailwindCss";
// // import Parent from "./components/ComponentSample1"

// export const App = (): JSX.Element => {
//   // Stateの定義
// const [num, setNum] = useState<number>(0);

//   // ボタンクリックイベント
//   const onClickButton = (): void => {
//     setNum((prev) => prev + 1);
//   };

//   return (
//     // return以降は1つのタグ
//     <>
//       {console.log("test")}
//       <h1 style={{color:"red"}}>こんにちは</h1>
//       <ColoredMessage color="blue">おげんきですか？</ColoredMessage>
//       <ColoredMessage color="pink">げんきです！</ColoredMessage>
//       <button onClick={onClickButton}>ボタン</button>
//       <p>{num}</p>
//       <CssModules/>
//       <StyledJsx/>
//       <StyledComponents/>
//       <Emotion/>
//       {/* <TailwindCss/> */}
//     </>
//   );
// };

//#endregion

//#region 6章 再レンダリング(TypeScript化)

import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/6_re-rendering/Child1";
import { Child4 } from "./components/6_re-rendering/Child4";

export const App = memo((): JSX.Element => {
  console.log("App レンダリング ");

  const [num, setNum] = useState<number>(0);

  const onClickButton = (): void => {
    setNum(num + 1);
  };

  const onClickReset = useCallback((): void => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});

//#endregion

//#region 7章 グローバルなState管理(TypeScript化)

// import { useContext } from "react";
// import { AdminFlagContext } from "./components/7_global-state/providers/AdminFlagProvider";
// import { Card } from "./components/7_global-state/Card";

// export const App = (): JSX.Element => {
//   // Context内のisAdminと更新関数を取得
//   const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

//   // 切り替え押下時
//   const onClickSwitch = (): void => {
//     setIsAdmin((boolVal: boolean) => !boolVal);  // 意味は一緒（boolVal:前回の値）
//   };

//   return (
//     <div>
//       {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
//       <button onClick={onClickSwitch}>切り替え</button>
//       <Card />
//     </div>
//   );
// };

//#endregion

//#region 8章 TypeScript

// import { useEffect, useState } from "react";
// import { ListItem } from "./components/8_typescript/ListItem";
// import axios from "axios";
// import type { User } from "./types/user";

// // データサンプル
// export const App = (): JSX.Element => {
//   // const users = [
//   //   {"id": 1,"name": "会田","age": 11,"personalColor": "blue"},
//   //   {"id": 2,"name": "飯塚","age": 22,"personalColor": "red"},
//   //   {
//   //     "id": 3,"name": "薄田","age": 33,
//   //     // "personalColor": "green"
//   //     "hobbies": ["game", "soccer", "youtube"],
//   //   }
//   // ];

//   // 取得したユーザー情報
//   const [users, setUsers] = useState<User[]>([]);

//   // 画面表示時にユーザー情報取得
//   useEffect((): void => {
//     axios.get<User[]>("https://jsonplaceholder.typicode.com/users/").then((res) => {
//       setUsers(res.data);
//     });
//   }, []);

//   return (
//     <div>
//       {users.map((user, idx) => (
//         <ListItem
//           id={user.id}
//           name={user.name}
//           email={user.email}
//           // companyname={user.company.name}
//           // personalColor={user.personalColor}
//           // hobbies={user.hobbies}
//           key={idx}
//         />
//       ))}
//     </div>
//   );
// };

//#endregion

//#region 9章 カスタムフック(TypeScript化)

// import { useFetchUsers } from "./hooks/useFetchUsers";

// export const App = (): JSX.Element => {
//   // カスタムフックの使用
//   // 関数を実行し返却値を分割代入で受け取る
//   const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

//   return (
//     <div>
//       <button onClick={onClickFetchUser}>ユーザー取得</button>
//       {/* エラーの場合はエラーメッセージを表示 */}
//       {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
//       {/* ローディング中は表示を切り替える */}{" "}
//       {isLoading ? (
//         <p>データ取得中です</p>
//       ) : (
//         userList.map((user) => (
//           <p key={user.id}>{`${user.id}:${user.name} (${user.age} 歳) ${user.street}`}</p>
//         ))
//       )}
//     </div>
//   );
// };

//#endregion

//#region 10章 TypeScript実践(簡単メモアプリ)

// import { ChangeEvent, useState, useCallback } from "react";
// import styled from "styled-components";
// import { MemoList } from "./components/10_react-typescript-app/MemoList";
// import { useMemoList } from "./hooks/useMemoList";

// export const App = (): JSX.Element => {
//   // カスタムフックからそれぞれ取得
//   const { memos, addTodo, deleteTodo } = useMemoList();
//   // テキストボックスState
//   const [text, setText] = useState<string>("");

//   // テキストボックス入力時に入力内容をStateに設定
//   const onChangeText = (e: ChangeEvent<HTMLInputElement>): void =>
//     setText(e.target.value);

//   // [追加]ボタン押下時
//   const onClickAdd = (): void => {
//     // カスタムフックのメモ追加ロジック実行
//     addTodo(text);
//     // テキストボックスを空に
//     setText("");
//   };

//   // [削除]ボタン押下時(何番目が押されたかを引数で受け取る)
//   const onClickDelete = useCallback(
//     (index: number): void => {
//       // カスタムフックのメモ削除ロジック実行
//       deleteTodo(index);
//     },
//     [deleteTodo]
//   );

//   return (
//     <div>
//       <h1>簡単メモアプリ</h1>
//       <input type="text" value={text} onChange={onChangeText} />
//       <SButton onClick={onClickAdd}>追加</SButton>
//       <MemoList memos={memos} onClickDelete={onClickDelete} />
//     </div>
//   );
// };

// const SButton = styled.button`
//   margin-left: 16px;
// `;

//#endregion

//#region 10章 TypeScript実践(簡単メモアプリ)：モジュール分割なし

// import { ChangeEvent, useState } from "react";
// import styled from "styled-components";

// export const App = (): JSX.Element => {
//   // テキストボックスState
//   const [text, setText] = useState<string>("");
//   // メモ一覧State
//   const [memos, setMemos] = useState<string[]>([]);

//   // テキストボックス入力時に入力内容をStateに設定
//   const onChangeText = (e: ChangeEvent<HTMLInputElement>): void =>
//     setText(e.target.value);

//   // [追加]ボタン押下時
//   const onClickAdd = (): void => {
//     // State変更を正常に検知させるため新たな配列を生成
//     const newMemos = [...memos];
//     // テキストボックスの入力内容をメモ配列に追加
//     newMemos.push(text);
//     setMemos(newMemos);
//     // テキストボックスを空に
//     setText("");
//   };

//   const onClickDelete = (index: number): void => {
//     // State変更を正常に検知させるため新たな配列を生成
//     const newMemos = [...memos];
//     // メモ配列から該当の要素を削除
//     newMemos.splice(index, 1);
//     setMemos(newMemos);
//   };

//   return (
//     <div>
//       <h1>簡単メモアプリ</h1>
//       <input type="text" value={text} onChange={onChangeText} />
//       <SButton onClick={onClickAdd}>追加</SButton>
//       <SContainer>
//       <p>メモ一覧</p>
//       <ul>
//         {memos.map((memo, index) => (
//           <li key={memo}>
//             <SMemoWrapper>
//               <p>{memo}</p>
//               <SButton onClick={() => onClickDelete(index)}>削除</SButton>
//             </SMemoWrapper>
//           </li>
//         ))}
//       </ul>
//     </SContainer>
//     </div>
//   );
// };

// const SButton = styled.button`
//   margin-left: 16px;
// `;
// const SContainer = styled.div`
//   border: solid 1px #ccc;
//   padding: 16px;
//   margin: 8px;
// `;
// const SMemoWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

//#endregion

