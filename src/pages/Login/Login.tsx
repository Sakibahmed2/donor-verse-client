import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";
import { useLoginMutation } from "../../redux/features/auth/Login/loginApi";
import { verifyToken } from "../../utils/verifyToken";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/Login/loginSlice";
import { toast } from "sonner";

const Login = () => {
  const [login, { data }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(data);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.token);
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Logged in ", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong ?", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MyForm onSubmit={onSubmit}>
        <MyInput name="email" type="email" label="Email" />
        <MyInput name="password" type="password" label="Password" />

        <p className="mb-2 flex justify-end -mt-4">
          <Link to="/register">
            <Button type="link">Create a new account</Button>
          </Link>
        </p>
        <button type="submit" className="custom-btn w-full">
          Login
        </button>
      </MyForm>
    </div>
  );
};

export default Login;
