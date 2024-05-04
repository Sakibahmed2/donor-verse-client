import { FieldValues } from "react-hook-form";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";
import { toast } from "sonner";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../../redux/features/auth/register/registerApi";
import { TResponse } from "../../types/global";

type TUserRegister = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const [addUser, { data }] = useAddUserMutation();
  console.log(data);
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating...");

    console.log(data);

    try {
      const res = (await addUser(data)) as TResponse<TUserRegister>;
      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("User created", { id: toastId });
        navigate("/login");
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MyForm onSubmit={onSubmit}>
        <MyInput type="text" name="name" label="Name" />
        <MyInput type="text" name="email" label="Email" />
        <MyInput type="text" name="password" label="Password" />
        <p className="mb-2">
          Already have an account?
          <Link to="/login">
            <Button type="link">Login</Button>
          </Link>
        </p>
        <button type="submit" className="custom-btn w-full">
          Submit
        </button>
      </MyForm>
    </div>
  );
};

export default Register;
