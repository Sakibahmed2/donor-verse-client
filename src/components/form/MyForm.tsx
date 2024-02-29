import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import cn from "../../utils/cn";
import { Form } from "antd";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
};

const MyForm = ({ onSubmit, children, className }: TFormProps) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <div
        className={cn(
          "primary-bg-dark p-5 md:p-20 rounded-lg bg-opacity-40 shadow-lg",
          className
        )}
      >
        <Form
          layout="vertical"
          onFinish={methods.handleSubmit(submit)}
          className="bg-white p-10 rounded-lg drop-shadow-lg "
        >
          {children}
        </Form>
      </div>
    </FormProvider>
  );
};

export default MyForm;
