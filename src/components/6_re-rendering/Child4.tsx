import { memo } from "react";

const style: object = {
  height: "200px",
  backgroundColor: "wheat",
  padding: "8px",
};

export const Child4 = memo((): JSX.Element => {
  console.log("Child4 レンダリング ");

  return (
    <div style={style}>
      <p>Child4</p>
    </div>
  );
});
