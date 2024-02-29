import { FieldValues, SubmitHandler } from "react-hook-form";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";
import MyTextArea from "../../components/form/MyTextArea";
import { useAddTestimonialsMutation } from "../../redux/features/user/testimonialsApi";
import { TResponse } from "../../types/global";
import { toast } from "sonner";

type TTestimonialsData = {
  success: boolean;
  message: string;
};

const CreateTestimonial = () => {
  const [addTestimonials] = useAddTestimonialsMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const testimonialData = {
      name: data.name,
      title: data.title,
      description: data.description,
    };

    const toastId = toast.loading("Loading");

    try {
      const res = (await addTestimonials(
        testimonialData
      )) as TResponse<TTestimonialsData>;
      console.log(res.data);

      if (res?.data?.success) {
        toast.success("Testimonials posted", { id: toastId });
      } else {
        toast.error(res?.data?.message, { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div>
      <MyForm onSubmit={onSubmit} className="md:w-1/2 mx-auto">
        <MyInput name="name" label="Your name" type="text" />
        <MyInput name="title" label="Title" type="text" />
        <MyTextArea name="description" label="Description" />
        <button type="submit" className="custom-btn-outline  w-full">
          Submit
        </button>
      </MyForm>
    </div>
  );
};

export default CreateTestimonial;
