import { ChangeEventHandler } from "react";

interface Props {
  label: string;
  value: any;
  type: "text" | "number";
  handleInput: ChangeEventHandler<HTMLInputElement>;
  isRequired?: boolean;
  placeholderText: string;
  name: string;
  className?: string;
  pattern?: string;
  minLength?: number;
  minValue?: number;
  error?: string;
  handleBlur?: VoidFunction;
}

const Input = ({
  label,
  value,
  type,
  handleInput,
  isRequired = false,
  placeholderText,
  name,
  className = "",
  pattern,
  error,
  handleBlur,
}: Props) => {
  return (
    <div className="flex flex-col mt-2">
      <label className="text-sm">
        {label} {isRequired && <span className="text-[#ff0000]">*</span>}
      </label>
      <input
        pattern={pattern}
        className={`border border-[#808080] py-2 px-4 mt-1 ${className}`}
        type={type}
        value={value}
        onChange={handleInput}
        required={isRequired}
        placeholder={placeholderText}
        name={name}
        onBlur={handleBlur}
      />
      {error && <span className="text-[#ff0000] text-xs mt-2">{error}</span>}
    </div>
  );
};

export default Input;
