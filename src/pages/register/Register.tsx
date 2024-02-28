import { FieldValues } from "react-hook-form";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";
import { toast } from "sonner";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../../redux/features/auth/register/registerApi";

const Register = () => {
  const [addUser, { error, isSuccess }] = useAddUserMutation();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    addUser(data);
    if (error) {
      return toast.error("something went wrong");
    }
    if (isSuccess) {
      toast.success("User created successfully");
      navigate("/login");
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
