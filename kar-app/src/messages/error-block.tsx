import { ReactNode } from "react";
import "./error-block.css";

function errorBlock(props: Array<string>): ReactNode {
  const cleanText = (text: string): string => {
    return text.toLocaleLowerCase().replace(".", "");
  };

  return (
    <div className={props.length > 0 ? "error-div" : "hiding"}>
      {props.map((error, index) => {
        return (
          <span className="error-span" key={index}>
            {cleanText(error)}!
          </span>
        );
      })}
    </div>
  );
}

export default errorBlock;
