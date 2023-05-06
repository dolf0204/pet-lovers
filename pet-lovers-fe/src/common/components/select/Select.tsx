import { FC } from "react";
import { Select as AntSelect } from "antd";
import "./Select.less";

const { Option } = AntSelect;

interface IDefaultProps {
  options: { id: number | string; label: string }[];
  label?: string;
  name?: string;
  className?: string;
  allowClear?: boolean;
  disabled?: boolean;
  style?: any;
  required?: boolean;
}

type ISingleProps = {
  onChange?: (value: string | any, options: any) => void;
  value?: string | undefined;
};

export type TSelectProps = IDefaultProps & ISingleProps;

export const Select: FC<TSelectProps> = (props) => {
  const {
    options,
    label,
    name,
    value,
    onChange,
    className,
    allowClear,
    disabled,
    style,
    required,
  } = props;

  return (
    <div className={`select ${className ?? ""}`}>
      {label && (
        <label htmlFor={name} className={`${!!required ? "is__required" : ""}`}>
          {label}
        </label>
      )}
      <AntSelect
        allowClear={allowClear}
        onChange={onChange as any}
        className={`${className ?? ""}`}
        disabled={disabled}
        value={value as any}
        style={{ ...style, minHeight: "40px" }}
      >
        {options.map(({ id, label }, idx) => (
          <Option key={id + "_" + idx} value={id}>
            {label}
          </Option>
        ))}
      </AntSelect>
    </div>
  );
};
