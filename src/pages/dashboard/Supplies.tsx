import { Spin } from "antd";
import {
  useDeleteSupplyMutation,
  useGetAllSupplyQuery,
} from "../../redux/features/user/supplyApi";
import { TSupplyItems } from "../Home/SuppliesHome";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import ModalUi from "../../components/ui/Modal";
import { useState } from "react";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";
import MyTextArea from "../../components/form/MyTextArea";
import { FieldValues } from "react-hook-form";

const Supplies = () => {
  const { data, isLoading } = useGetAllSupplyQuery(undefined);
  const [deleteSupply] = useDeleteSupplyMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (data: FieldValues) => {
    console.log(data);
  };

  const handleDelete = (id: string) => {
    deleteSupply(id);
  };

  if (isLoading) {
    return (
      <Spin
        size="large"
        className="h-screen flex justify-center items-center"
      />
    );
  }

  return (
    <div
      className="overflow-x-auto rounded-lg
    "
    >
      <table className="table-auto min-w-full divide-y divide-gray-200 ">
        <thead className="bg-black h-12 text-xl">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-300 bg-opacity-50 divide-y divide-zinc-400 font-semibold">
          {data?.data.map((items: TSupplyItems, index: number) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{items?.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{items?.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{items?.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-6">
                <button
                  className="text-indigo-600 hover:bg-indigo-200 bg-indigo-100 text-2xl border-2 border-gray-400 py-1 px-2 rounded-md "
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  <EditFilled />
                </button>
                <button
                  className="text-red-600 hover:bg-red-100  bg-red-100 bg-opacity-30 ml-2 text-2xl border border-gray-500 py-1 px-2 rounded-md"
                  onClick={() => handleDelete(items?._id as string)}
                >
                  <DeleteOutlined />
                </button>
                {/* modal */}
                <ModalUi
                  isModalOpen={isModalOpen}
                  handleCancel={handleCancel}
                  title="Update supply"
                >
                  <MyForm onSubmit={handleUpdate} className="md:p-5">
                    <div className="md:flex w-full md:space-x-8">
                      <MyInput
                        name="title"
                        label="Title"
                        type="text"
                        defaultValue={items?.title}
                      />
                      <MyInput
                        name="category"
                        label="Category"
                        type="text"
                        defaultValue={items?.category}
                      />
                    </div>
                    <MyTextArea
                      name="description"
                      label="Description"
                      defaultValue={items?.description}
                    />
                    <MyInput
                      name="image"
                      label="Image"
                      type="text"
                      defaultValue={items?.image}
                    />

                    <button type="submit" className="custom-btn w-full">
                      Submit
                    </button>
                  </MyForm>
                </ModalUi>
              </td>
            </tr>
          ))}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Supplies;
