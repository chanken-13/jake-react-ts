import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style: object = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px",
};

type Props = {
  onClickReset: () => void;
};

export const Child1 = memo((props: Props): JSX.Element => {
  console.log("Child1 レンダリング ");

  // Propsから関数を展開(分割代入)
  const { onClickReset } = props;

  return (
    <div style={style}>
      <p>Child1</p>
      <button onClick={onClickReset}>リセット</button>
      <Child2 />
      <Child3 />
    </div>
  );
});
