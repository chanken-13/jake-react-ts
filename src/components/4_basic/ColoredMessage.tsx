import { FC } from "react";

type Props = {
  color: string;
  children: React.ReactNode;
};

// 色とテキストをpropsとして受け取って色付きの文字を返すコンポーネント
export const ColoredMessage: FC<Props> = (props) => {
  // propsを分割代入
  const { color, children } = props;  // 色、テキスト（children）
  // style
  const contentStyle = {
    color : color,
    fontSize : "20px"
  };

  return <p style={contentStyle}>{children}</p>;
}