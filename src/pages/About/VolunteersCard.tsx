import { TVolunteerData } from "../volunteer/VolunteerForm";

const VolunteersCard = ({ items }: { items: TVolunteerData }) => {
  console.log(items);
  return (
    <div className="md:flex md:justify-start justify-self-center md:w-full max-w-[1000px] items-center gap-5  border rounded-lg p-6 bg-white shadow-md ">
      <img
        src={items.image}
        alt={items.name}
        className="w-full max-w-[200px] h-full max-h-[200px] object-cover  rounded-lg"
      />
      <div>
        <h2 className="text-xl font-semibold mb-2">{items.name}</h2>
        <p className="text-gray-600">{items.address}</p>
        <p className="text-gray-600">Email: {items.email}</p>
        <p className="text-gray-600">Contact No: {items.contactNo}</p>
        <p className="text-gray-600">Birth Date: {items.birthDate}</p>
      </div>
    </div>
  );
};

export default VolunteersCard;
