import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

function ButtonContainer(props: any) {
  const { setoutput, calculatorValue, output, setCalculatorValue } = props;
  const sub = () => {
    setoutput(Math.abs(Number(calculatorValue) - Number(output)));
  };
  const add = () => {
    setoutput(Number(calculatorValue) + Number(output));
  };
  const mul = () => {
    output === 0
      ? setoutput(Number(calculatorValue) * 1)
      : setoutput(Number(calculatorValue) * Number(output));
  };
  const div = () => {
    output === 0
      ? setoutput(Number(calculatorValue) / 1)
      : setoutput(Number(output) / Number(calculatorValue));
  };
  const reset = () => {
    setoutput(0);
    setCalculatorValue("");
  };
  return (
    <div className="row button-wrapper">
      <div className="col-lg-12 d-flex justify-content-center">
        <Button variant="contained" onClick={add}>
          <AddIcon />
        </Button>
        <Button variant="contained" onClick={sub}>
          <RemoveIcon />
        </Button>
        <Button variant="contained" onClick={mul}>
          <CloseIcon />
        </Button>
        <Button variant="contained" onClick={div}>
          /
        </Button>
        <Button variant="contained" onClick={reset}>
          C
        </Button>
      </div>
    </div>
  );
}

export default ButtonContainer;
