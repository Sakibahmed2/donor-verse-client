import { useGetAllSupplyQuery } from "../../redux/features/supply/supplyApi";
import SupplyCard from "../../components/ui/SupplyCard";
import { TSupplyItems } from "./SuppliesHome";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

const AllSupplies = () => {
  const { data } = useGetAllSupplyQuery(undefined);

  return (
    <Container className="pt-32">
      <div>
        <SectionTitle heading="All supplies" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center place-content-center">
        {data?.data?.map((items: TSupplyItems) => (
          <SupplyCard key={items._id} items={items} />
        ))}
      </div>
    </Container>
  );
};

export default AllSupplies;
