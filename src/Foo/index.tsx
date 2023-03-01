import React, { type FC } from "react";

const Foo: FC<{ title: string; ls: string }> = (props) => (
  <div title={props.title}>
    <h4>{props.title}</h4>
    <p>{props?.ls || "nop"}</p>
  </div>
);

export default Foo;
