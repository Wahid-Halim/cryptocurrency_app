import { ClipLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ClipLoader color="#7c3aed" size={50} />
    </div>
  );
};

export default Loader;
