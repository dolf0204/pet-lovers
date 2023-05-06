import { ChangeEvent, FC } from "react";

import { Input as AntInput } from "antd";

import "./Input.less";

interface IDefaultProps {
  label?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
}

type TProps = IDefaultProps;

export const Input: FC<TProps> = (props) => {
  const { label, name, onChange, disabled, required } = props;

  return (
    <div className="input">
      {label && (
        <label
          htmlFor={name}
          className={`input__label
                     ${!!required ? "is-required" : ""}`}
        >
          {label}
        </label>
      )}
      <AntInput
        disabled={disabled}
        onChange={onChange}
        name={name}
        className="input__input"
        onWheelCapture={(e) => e.currentTarget.blur()}
      />
    </div>
  );
};
