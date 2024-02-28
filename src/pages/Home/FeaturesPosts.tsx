import { BarChartOutlined, UserOutlined } from "@ant-design/icons";
import Container from "../../components/ui/Container";

const FeaturesPosts = () => {
  return (
    <Container className="mt-32">
      <div className="md:flex justify-center items-center space-y-6 md:space-y-0 gap-8">
        <div className="flex flex-col items-center bg-gray-200 hover:bg-teal-700 transition-all hover:text-white rounded-2xl py-10 px-8 shadow-xl">
          <p className="text-5xl primary-bg-light text-white p-4 rounded-full">
            <BarChartOutlined />
          </p>
          <h2 className="text-3xl font-semibold mt-5 mb-2">Give donation</h2>
          <p className=" w-[ch20] mx-auto">
            The evidence is clear. The ability to learn to read is single
            significant factor potential. Became a volunteer people and the
            community.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-200 hover:bg-teal-700 transition-all hover:text-white rounded-2xl py-10 px-8 shadow-xl">
          <p className="text-5xl primary-bg-light text-white p-4 rounded-full">
            <UserOutlined />
          </p>
          <h2 className="text-3xl font-semibold mt-5 mb-2">Become Volunteer</h2>
          <p className=" w-[ch20] mx-auto">
            The evidence is clear. The ability to learn to read is single
            significant factor potential. Became a volunteer people and the
            community.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesPosts;
