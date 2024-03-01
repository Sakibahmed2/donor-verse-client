import Banner from "./Banner";
import FeaturesPosts from "./FeaturesPosts";
import Footer from "./Footer";
import Gallery from "./Gallery";
import ResponseProtocols from "./ResponseProtocols";
import SuppliesHome from "./SuppliesHome";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <SuppliesHome />
      <Testimonials />

      <Gallery />

      {/* My two section */}
      <FeaturesPosts />
      <ResponseProtocols />

      <Footer />
    </div>
  );
};

export default Home;
