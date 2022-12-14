import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// 他のファイルでも「ColorfulMessage」を使用することを明記
export default ColorfulMessage;
