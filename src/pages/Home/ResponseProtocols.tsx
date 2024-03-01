import SectionTitle from "../../components/ui/SectionTitle";
import Container from "../../components/ui/Container";
import { useTheme } from "../../context/ThemeContaxt";

const ResponseProtocols = () => {
  const { theme } = useTheme();

  return (
    <Container className=" py-20 mt-32 rounded-md">
      <div
        style={{ background: theme.background, color: theme.text }}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold  sm:text-4xl">
            <SectionTitle heading=" Emergency Response Protocols" />
          </h2>
          <p className="mt-4 text-md text-gray-500">
            Learn about our comprehensive emergency response protocols to
            efficiently manage health and medical supplies in post-disaster
            scenarios.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-md">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW1lcmdlbmN5JTIwQ29tbXVuaWNhdGlvbiUyMFBsYW58ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-md font-medium text-gray-900">
                Emergency Communication Plan
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Details about how we communicate with stakeholders during
                emergencies.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-md">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW1lcmdlbmN5JTIwQ29tbXVuaWNhdGlvbiUyMFBsYW58ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-md font-medium text-gray-900">
                Supply Chain Management
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Information on how we ensure a continuous supply of medical
                resources.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-md">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW1lcmdlbmN5JTIwQ29tbXVuaWNhdGlvbiUyMFBsYW58ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-md font-medium text-gray-900">
                Emergency Response Team
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Introduction to our trained team members and their roles during
                emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResponseProtocols;
