import React, { useContext } from "react";
import "./Button.css";
import { MyContext } from "../App";
const Button = () => {
  const context = useContext(MyContext);
  return (
    <div>
      <button
        onClick={() => {
          setTimeout(() => {
            context.setDisplay("none");
          }, 4000);
          context.setDisplay("block");

          //   console.log(context);
          if (context.theme.color === "#74eac2") {
            context.setTheme({ backgroundColor: "#74eac2", color: "black" });
          } else {
            context.setTheme({ backgroundColor: "black", color: "#74eac2" });
          }
        }}
      >
        {context.theme.color === "#74eac2" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Button;
