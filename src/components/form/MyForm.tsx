import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import cn from "../../utils/cn";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
};

const MyForm = ({ onSubmit, children, className }: TFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div
        className={cn(
          "primary-bg-dark p-5 md:p-20 rounded-lg bg-opacity-40 shadow-lg",
          className
        )}
      >
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="bg-white p-10 rounded-lg drop-shadow-lg "
        >
          {children}
        </form>
      </div>
    </FormProvider>
  );
};

export default MyForm;
