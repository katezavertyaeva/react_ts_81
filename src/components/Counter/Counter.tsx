import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

function Counter() {
  // type ArrayType<T> = T[];
  // numbers:ArrayType<number>  = [3, 4, 5] --> number[]
  const [counter, setCounter] = useState<number>(0);

  const onCounterMinus = (): void => {
    setCounter((prevState) => prevState - 1);
  };
  const onCounterPlus = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  const onCounterClear = (): void => {
    setCounter(0);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onButtonClick={onCounterMinus} />
      </div>
      <div className="result">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" onButtonClick={onCounterPlus} />
      </div>
      <div className="button-wrapper">
        <Button name="Clear" onButtonClick={onCounterClear} />
      </div>
    </div>
  );
}

export default Counter;
