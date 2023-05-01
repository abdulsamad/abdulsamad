import type React from 'react';
import type {
  FieldError,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form';

interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  register: any;
  name: string;
  error: FieldError | undefined;
}

const TextArea = ({ name, label, error, ...props }: Props) => (
  <div>
    <div className="relative my-4 flex flex-col-reverse items-start">
      <textarea
        className={`w-full relative py-3 px-2 border-none rounded-lg focus:rounded-lg focus:shadow-lg [&:focus~span]:bg-primary`}
        name={name}
        {...props}
      />
      <label
        htmlFor={name}
        className='mb-1 font-semibold [&::after]:[content:"*"] text-red-500 ml-[2px]'>
        {label}
      </label>
    </div>
    {error && (
      <div className="-m-4 pb-2.5 text-sm text-red-500 text-center">
        {error.message}
      </div>
    )}
  </div>
);

export default TextArea;
