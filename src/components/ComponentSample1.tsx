import React from "react";

type ContainerProps = {
  title: string;
  children?: React.ReactNode
};

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;

  return (
    <div style={{background: 'red'}}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

const Parent = ():JSX.Element => {
  return (
    <Container title="Hello">
      <p>背景色</p>
    </Container>
  );
};

export default Parent;
