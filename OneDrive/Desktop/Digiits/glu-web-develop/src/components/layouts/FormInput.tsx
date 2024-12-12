import { FormInputProps } from "./interfaces/FormInputInterfaces";

const FormInput = ({ label, children, isFontNormal, active }: FormInputProps) => {
  return (
    <fieldset className={`border rounded-xl pl-4 pb-2 ${active ? 'border-black' : 'border-gray-300'}`}>
      <legend className={`p-1 text-gray-600 text-sm ${isFontNormal ? "" : "font-bold"}`}>
        {label}
      </legend>
      {children}
    </fieldset>
  );
};

export default FormInput;