import React from "react";
import { cn } from "../utils/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { StepState } from "./StepState";

function StepperItem({ title = "", description = "", state, isLast = false }) {
  const styleCircle = () => {
    if (state == StepState.CURRENT) {
      return "bg-[#77099D] text-white";
    } else if (state == StepState.LOADING) {
      return "";
    } else if (state == StepState.WARNING) {
      return "border-2 border-orange-600 text-orange-600";
    } else if (state == StepState.DANGER) {
      return "border-2 border-red-600 text-red-600";
    } else if (state == StepState.SUCCESS) {
      return "border-2 border-green-600 text-green-600";
    } else {
      return "border-2 border-slate-300 text-slate-300";
    }
  };

  const icon = () => {
    if (state == StepState.CURRENT) {
      return <FontAwesomeIcon icon={faArrowDown} />;
    } else if (state == StepState.LOADING) {
      return (
        <div className="border-gray-300 w-full h-full animate-spin rounded-full border-4 border-t-[#77099D]" />
      );
    } else if (state == StepState.WARNING) {
      return <FontAwesomeIcon icon={faExclamationTriangle} />;
    } else if (state == StepState.DANGER) {
      return <FontAwesomeIcon icon={faArrowDown} />;
    } else if (state == StepState.SUCCESS) {
      return <FontAwesomeIcon icon={faCheck} />;
    } else {
      return <FontAwesomeIcon icon={faArrowDown} />;
    }
  };

  const textStyle = () => {
    if (
      [
        StepState.CURRENT,
        StepState.LOADING,
        StepState.SUCCESS,
        StepState.WARNING,
        StepState.DANGER,
      ].includes(state)
    ) {
      return "text-gray-600 text-[clamp(.7rem, .7rem + 1vw, 1rem)]";
    } else {
      return "text-slate-300 text-[clamp(.7rem, .7rem + 1vw, 1rem)]";
    }
  };

  return (
    <div className="flex">
      <div className="mr-[min(2%,1rem)] flex flex-col items-center">
        <div>
          <div
            className={cn(
              "flex w-[min(2rem,8vw)] [aspect-ratio:1/1] items-center justify-center rounded-[100vmax]",
              styleCircle()
            )}
          >
            {icon()}
          </div>
        </div>
        {!isLast && <div className="h-full w-px bg-gray-300"></div>}
      </div>
      <div className="w-full pb-4">
        <span className={cn(textStyle(), "block leading-4 font-bold")}>
          {title}
        </span>
        <span className={textStyle()}>{description}</span>
      </div>
    </div>
  );
}

export default StepperItem;
