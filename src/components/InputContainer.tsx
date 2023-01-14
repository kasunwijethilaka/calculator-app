import React from "react";
import TextField from "@mui/material/TextField";

function InputContainer(props: any) {
  const { calculatorValue, valueOnchange } = props;
  return (
    <div className="row input-wrapper">
      <div className="col-lg-12 d-flex justify-content-center">
        <TextField
          type="number"
          label="Enter Number"
          variant="standard"
          onChange={valueOnchange}
          value={calculatorValue}
        />
      </div>
    </div>
  );
}

export default InputContainer;
