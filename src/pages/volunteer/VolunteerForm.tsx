import { Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";

const VolunteerForm = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
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

            <button className="custom-btn-outline text-lg" type="submit">
              submit
            </button>
          </MyForm>
        </Col>
      </Row>
    </div>
  );
};

export default VolunteerForm;
