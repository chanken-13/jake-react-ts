import type { User } from "../../types/user";

export const ListItem = (props: User): JSX.Element => {
  // const { id, name, age, personalColor, hobbies } = props;
  const { id, name, email } = props;
  return (
    // <p style={{ color: personalColor }}>
    <p>
      {/* {id}:{name}({age}) {hobbies?.join(" / ")} */}
      {id}:{name}({email})
    </p>
  );
};

// デフォルト値
ListItem.defaultProps = {
  personalColor: "grey"
};

