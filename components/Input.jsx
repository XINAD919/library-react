import React from "react";
import { Tooltip } from "@mui/material";
const Input = ({
  type,
  autoComplete,
  name,
  label,
  maxLength,
  defaultValue,
  required,
  optional,
  toolTip,
  toolTipTitle,
}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='font-light text-md text-slate-500'>
        <span>{label}</span>{" "}
        {toolTip && (
          <span className='font-light text-md text-slate-500'>
            {optional && "Optional"}
            <Tooltip title={toolTipTitle} arrow>
              <i className='fas fa-circle-question text-xs' />
            </Tooltip>
          </span>
        )}
      </label>
      <input
        className='border border-slate-300 h-7 rounded-md my-2 pl-2 outline-none shadow-sm'
        type={type}
        id={name}
        name={name}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
