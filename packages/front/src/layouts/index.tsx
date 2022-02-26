import { PropsWithChildren } from "react";
import "./index.css";

export default function name(props: PropsWithChildren<{}>) {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div
        style={{ width: 100, height: "100%", backgroundColor: "antiquewhite" }}
      ></div>
      <div>
        <h1>layout</h1>
        {props.children}
      </div>
    </div>
  );
}
