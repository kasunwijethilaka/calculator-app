import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonContainer from "./components/ButtonContainer";
import OutputContainer from "./components/OutputContainer";
import InputContainer from "./components/InputContainer";

function App() {
  const [calculatorValue, setCalculatorValue] = useState<any>("");
  const [output, setoutput] = useState<any>(0);

  const valueOnchange = (e: any) => {
    setCalculatorValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="main">
          <InputContainer
            calculatorValue={calculatorValue}
            valueOnchange={valueOnchange}
          />
          <ButtonContainer
            setoutput={setoutput}
            calculatorValue={calculatorValue}
            output={output}
            setCalculatorValue={setCalculatorValue}
          />
          <OutputContainer output={output} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
