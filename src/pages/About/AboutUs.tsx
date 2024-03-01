import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { useGetAllVolunteerQuery } from "../../redux/features/user/volunteerApi";
import { TVolunteerData } from "../volunteer/VolunteerForm";
import VolunteersCard from "./VolunteersCard";

const AboutUs = () => {
  const { data: volunteerData } = useGetAllVolunteerQuery(undefined);

  console.log(volunteerData?.data);

  return (
    <div>
      {/* about us */}

      <section className="py-16 bg-gray-100 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle heading="About us" />
            <p className="mt-4 text-lg text-gray-600">
              We are dedicated to providing efficient coordination and
              management of health and medical supplies in post-disaster
              scenarios.
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
      </section>

      {/* our volunteer */}
      <Container className="mt-20">
        <SectionTitle heading="Our volunteer" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteerData?.data?.map((items: TVolunteerData) => (
            <VolunteersCard key={items._id} items={items} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
