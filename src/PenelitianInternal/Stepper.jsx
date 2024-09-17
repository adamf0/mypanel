import React from "react";
import StepperItem from "./StepperItem";

function Stepper({ children }) {
  return <div className="flex flex-col">{children}</div>;
}

Stepper.Item = StepperItem;

export default Stepper;
