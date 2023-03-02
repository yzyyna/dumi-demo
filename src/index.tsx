import React, { type FC } from "react";

export const Test: FC<{ number: number; flag: boolean }> = (props) => (
  <div>
    {props.number}
    <div>
      <p>ppp</p>
    </div>
    {props.flag === true ? <div>has flag</div> : <h4>no flag</h4>}
  </div>
);

export { default as Foo } from "./Foo";
