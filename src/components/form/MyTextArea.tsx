import TextArea from "antd/es/input/TextArea";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const MyTextArea = ({ name, label, defaultValue }: TInputProps) => {
  return (
    <div className="mb-5">
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <TextArea
            {...field}
            rows={4}
            placeholder={label}
            name={name}
            id={name}
            defaultValue={defaultValue}
          />
        )}
      />
    </div>
  );
};

export default MyTextArea;
