import Banner from "./Banner";
import FeaturesPosts from "./FeaturesPosts";
import Gallery from "./Gallery";
import ResponseProtocols from "./ResponseProtocols";
import SuppliesHome from "./SuppliesHome";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <SuppliesHome />

      <Gallery />

      <FeaturesPosts />
      <ResponseProtocols />

      <Testimonials />
    </div>
  );
};

export default Home;
