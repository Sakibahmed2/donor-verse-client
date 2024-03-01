import { Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";
import { useAddVolunteerMutation } from "../../redux/features/user/volunteerApi";
import { toast } from "sonner";
import { TResponse } from "../../types/global";

type TVolunteerData = {
  name: string;
  image: string;
  birthDate: string;
  contactNo: string;
  email: string;
  address: string;
};

const VolunteerForm = () => {
  const [addVolunteer] = useAddVolunteerMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating....");

    const volunteerData = {
      name: `${data.firstName} ${data.lastName}`,
      birthDate: data.birthDate,
      image: data.image,
      contactNo: data.contactNo,
      email: data.email,
      address: data.address,
    };

    try {
      const res = (await addVolunteer(
        volunteerData
      )) as TResponse<TVolunteerData>;
      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Volunteer created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="mt-20 w-full max-w-[1000px] mx-auto">
      <Row>
        <Col span={24}>
          <MyForm onSubmit={onSubmit}>
            <Row gutter={20}>
              <Col span={24} md={{ span: 12 }}>
                <MyInput type="text" name="firstName" label="First name" />
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <MyInput type="text" name="lastName" label="Last name" />
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <MyInput type="text" name="birthDate" label="Birth date" />
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <MyInput type="text" name="contactNo" label="Contact no" />
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <MyInput type="text" name="email" label="email" />
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <MyInput type="text" name="address" label="Address" />
              </Col>
              <Col span={24}>
                <MyInput type="text" name="image" label="Profile image" />
              </Col>
            </Row>

            <button className="custom-btn-outline " type="submit">
              Sign up
            </button>
          </MyForm>
        </Col>
      </Row>
    </div>
  );
};

export default VolunteerForm;
