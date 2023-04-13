import { memo } from "react";

const style: object = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child2 = memo((): JSX.Element => {
  console.log("Child2 レンダリング ");

  return (
    <div style={style}>
      <p>Child2</p>
    </div>
  );
});
