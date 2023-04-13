import { memo } from "react";

const style: object = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child3 = memo((): JSX.Element => {
  console.log("Child3 レンダリング ");

  return (
    <div style={style}>
      <p>Child3</p>
    </div>
  );
});
