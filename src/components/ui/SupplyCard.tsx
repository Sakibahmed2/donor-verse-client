/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import ModalUi from "./Modal";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContaxt";
import { useAddDonationsMutation } from "../../redux/features/user/donationApi";
import { toast } from "sonner";
import { TResponse } from "../../types/global";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const SupplyCard = ({ items }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { image, title, amount, category, description } = items;
  const [addDonation] = useAddDonationsMutation();
  const email = useAppSelector((state) => state.login.user?.email);
  const isAuthenticate = useAppSelector((state) => state.login.user);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDonate = async (amount: number) => {
    if (!isAuthenticate) {
      navigate("/login");
    }

    const toastId = toast.loading("Donating....");

    const donationData = {
      email,
      amount,
    };

    try {
      const res = (await addDonation(donationData)) as TResponse<any>;
      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Donation done", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  const { theme } = useTheme();

  return (
    <div className="drop-shadow-lg">
      <Card
        style={{ background: theme.background, color: theme.text }}
        cover={<img alt="example" src={image} />}
      >
        <Meta title={title} />
        <div className="flex flex-col justify-start space-y-2 mt-4">
          <p>Category: {category}</p>
          <p>Amount: {amount}</p>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="custom-btn-outline py-1 text-xs md:text-sm"
          >
            View details
          </button>
        </div>
      </Card>

      <ModalUi
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        title="Supply"
      >
        <div>
          <p className="text-4xl font-semibold text-center mb-2"> {title}</p>
          <div className=" gap-4">
            <img className="rounded-lg" src={image} alt="" />
            <div className="mt-6 space-y-2">
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {description}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> {amount}
              </p>
              <Button
                className="w-full"
                size="large"
                onClick={() => handleDonate(amount)}
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </ModalUi>
    </div>
  );
};

export default SupplyCard;
