import { useGetAllSupplyQuery } from "../../redux/features/user/supplyApi";
import { Spin } from "antd";
import Container from "../../components/ui/Container";
import { TSupplyItems } from "./SuppliesHome";
import SectionTitle from "../../components/ui/SectionTitle";

const Gallery = () => {
  const { data, isLoading } = useGetAllSupplyQuery(undefined);

  if (isLoading) {
    return (
      <Spin
        size="large"
        className="h-screen flex justify-center items-center"
      />
    );
  }

  return (
    <Container className="mt-40">
      <div>
        <SectionTitle heading="Gallery" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {data?.data?.slice(2, 8).map((items: TSupplyItems) => (
          <div
            key={items._id}
            className="bg-white rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={items.image}
              className="w-full md:h-64 object-cover object-center"
              alt={items.title}
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {items.title}
              </p>
              {/* Additional details if needed */}
            </div>
          </div>
        ))}
      </div>

      {/* <div>
        <Carousel autoplay speed={500}>
          {data?.data.map((items: TSupplyItems) => (
            <div
              key={items._id}
              className="bg-opacity-45 p-10 text-center w-full"
            >
              <img
                src={items.image}
                className="flex mx-auto w-full max-w-[700px] rounded-tl-full border-4  drop-shadow-xl"
                alt=""
              />
              <p className="text-2xl md:text-4xl font-semibold mt-4 text-teal-500">
                {items?.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div> */}
    </Container>
  );
};

export default Gallery;
