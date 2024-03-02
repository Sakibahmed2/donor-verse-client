import React from "react";
import { useGetAllDonationQuery } from "../../redux/features/user/donationApi";
import SectionTitle from "../../components/ui/SectionTitle";

type TDonarData = {
  _id?: string;
  name: string;
  amount: number;
};

const Leaderboard = () => {
  const { data } = useGetAllDonationQuery(undefined);

  return (
    <div className="mt-28">
      <SectionTitle heading="Top Donors" />
      <div className="max-w-md mx-auto p-6 primary-bg-gray bg-opacity-40 rounded-lg shadow-lg -mt-10">
        <ol className="list-none">
          {data?.data?.map((donor: TDonarData, index: number) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-300 py-2 bg-red-200 px-4 rounded-md mt-2 text-2xl"
            >
              <span className=" font-semibold">
                {index + 1}. {donor.name}
              </span>
              <span className="text-gray-600 ">${donor.amount.toFixed(2)}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Leaderboard;
