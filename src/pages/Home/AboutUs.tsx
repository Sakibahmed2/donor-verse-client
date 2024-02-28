import SectionTitle from "../../components/ui/SectionTitle";

const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionTitle heading="About us" />
          <p className="mt-4 text-lg text-gray-600">
            We are dedicated to providing efficient coordination and management
            of health and medical supplies in post-disaster scenarios.
          </p>
        </div>
        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-8 lg:gap-y-12">
          <div className="text-center bg-gray-200 py-10 rounded-lg drop-shadow-md">
            <p className="text-5xl font-extrabold text-[#436850]">10+</p>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Years of Experience
            </p>
          </div>
          <div className="text-center bg-gray-200 py-10 rounded-lg drop-shadow-md">
            <p className="text-5xl font-extrabold text-[#436850]">1000+</p>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Supplies Distributed
            </p>
          </div>
          <div className="text-center bg-gray-200 py-10 rounded-lg drop-shadow-md">
            <p className="text-5xl font-extrabold text-[#436850]">24/7</p>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Emergency Response
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
