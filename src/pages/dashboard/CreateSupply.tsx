import { FieldValues } from "react-hook-form";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";
import MyTextArea from "../../components/form/MyTextArea";
import { useAddSupplyMutation } from "../../redux/features/user/supplyApi";
import { toast } from "sonner";

const CreateSupply = () => {
  const [addSupply, { error, isLoading, isSuccess }] = useAddSupplyMutation();
  if (error) {
    toast.error("Something went wrong");
  }

  if (isLoading) {
    toast.loading("Loading");
  }

  if (isSuccess) {
    toast.success("Supply created");
  }

  const onSubmit = (data: FieldValues) => {
    addSupply(data);
  };

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <MyForm onSubmit={onSubmit}>
        <div className="md:flex w-full md:space-x-8">
          <MyInput name="title" label="Title" type="text" />
          <MyInput name="category" label="Category" type="text" />
          <MyInput name="amount" label="Amount" type="text" />
        </div>
        <MyTextArea name="description" label="Description" />
        <MyInput name="image" label="Image" type="text" />

        <button type="submit" className="custom-btn w-full">
          Submit
        </button>
      </MyForm>
    </div>
  );
};

export default CreateSupply;
