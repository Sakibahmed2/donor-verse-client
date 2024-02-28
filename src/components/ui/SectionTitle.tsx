import underline from "../../assets/images/setction- underline.png";

type TSectionTitle = {
  heading: string;
};

const SectionTitle = ({ heading }: TSectionTitle) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl font-semibold">{heading}</h2>
      <img
        className="w-full max-w-64 md:max-w-80 md:-mt-14 -mt-16 -z-1 -rotate-3 h-40"
        src={underline}
        alt=""
      />
    </div>
  );
};

export default SectionTitle;
