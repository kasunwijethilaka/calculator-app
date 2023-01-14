import React from "react";

function OutputContainer(props: any) {
  const { output } = props;
  console.log(output);

  return (
    <div className="row output-wrapper">
      <h1 className="text-center">{output}</h1>
    </div>
  );
}

export default OutputContainer;
