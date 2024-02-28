import { NavLink } from "react-router-dom";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import SupplyCard from "../../components/ui/SupplyCard";
import { useGetAllSupplyQuery } from "../../redux/features/user/supplyApi";
import { ArrowRightOutlined } from "@ant-design/icons";

export type TSupplyItems = {
  _id?: string;
  image: string;
  title: string;
  description: string;
  amount: number;
  category: string;
};

const SuppliesHome = () => {
  const { data, isLoading } = useGetAllSupplyQuery(undefined);

  const sixSupply = data?.data.slice(0, 6);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <Container className="mt-40 mb-10">
      <SectionTitle heading="Supply posts" />
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center place-content-center">
          {sixSupply?.map((items: TSupplyItems) => (
            <SupplyCard key={items._id} items={items} />
          ))}
        </div>

        <button className="custom-btn flex mx-auto mt-4 gap-2">
          <NavLink to="/supplies">
            View All{" "}
            <span>
              <ArrowRightOutlined />
            </span>
          </NavLink>
        </button>
      </div>
    </Container>
  );
};

export default SuppliesHome;
