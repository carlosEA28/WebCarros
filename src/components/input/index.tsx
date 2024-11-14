import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rule?: RegisterOptions;
}

export function InputComponent({
  name,
  placeholder,
  type,
  register,
  error,
  rule,
}: InputProps) {
  return (
    <div>
      <input
        className={`w-full border-2 rounded-md h-11 px-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name, rule)}
        id={name}
      />

      {error && <p className="my-1 text-red-500">{error}</p>}
    </div>
  );
}
