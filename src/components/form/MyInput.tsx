import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  defaultValue?: string | number;
};

const MyInput = ({ type, name, label, defaultValue }: TInputProps) => {
  return (
    <div className="mb-5">
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              placeholder={label}
              type={type}
              id={name}
              size="large"
              defaultValue={defaultValue}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default MyInput;
