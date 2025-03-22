"use client";

import { InputContainer, InputContainerProps } from "./InputContainer";

export interface SelectProps<T> extends InputContainerProps {
  options: T[];
  value: T | undefined;
  onChangeValue: (value: T) => void;
  labelFn?: (option: T) => string;
  keyFn?: (option: T) => string;
  placeholder?: string;
  displayFn?: (option: T) => string;
  disabled?: boolean;
}

export function Select<T>({
  label,
  options,
  value,
  labelFn = (o) => String(o),
  keyFn = labelFn,
  displayFn,
  description,
  onChangeValue,
  placeholder,
  ...props
}: SelectProps<T>) {
  const displayValue = displayFn && value ? displayFn(value) : value ? labelFn(value) : "";
  
  return (
    <InputContainer label={label} description={description}>
      <div className="relative">
        <select
          className="border-divider bg-content text-primary hover:bg-content-alt focus:border-primary disabled:hover:bg-content disabled:text-placeholder w-full rounded-sm border px-2 py-1 text-sm"
          value={value ? labelFn(value) : ""}
          onChange={(e) => {
            const { value } = e.target;
            const option = options.find((o) => value === labelFn(o));
            if (option) onChangeValue(option);
            else onChangeValue(options[0]);
          }}
          {...props}
        >
          {options.map((option) => (
            <option key={keyFn(option)} value={keyFn(option)}>
              {displayFn ? displayFn(option) : labelFn(option)}
            </option>
          ))}
        </select>
        {!value && placeholder !== undefined && (
          <p className="text-placeholder pointer-events-none absolute top-1/2 left-2 w-[calc(100%-2rem)] -translate-y-1/2 truncate pl-[1px] text-sm">
            {placeholder}
          </p>
        )}
      </div>
    </InputContainer>
  );
}
