/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import ModalUi from "./Modal";
import { useState } from "react";

const SupplyCard = ({ items }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { image, title, amount, category, description } = items;

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="drop-shadow-lg">
      <Card cover={<img alt="example" src={image} />}>
        <Meta title={title} />
        <div className="flex flex-col justify-start space-y-2 mt-4">
          <p>Category: {category}</p>
          <p>Amount: {amount}</p>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="custom-btn-outline py-1"
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
            </div>
          </div>
        </div>
      </ModalUi>
    </div>
  );
};

export default SupplyCard;
