import { memo } from "react";
function Child(props) {
  console.log("child is running");
  let ram = props.count();
  return <div>{props.count()}</div>;
}
export default memo(Child);
