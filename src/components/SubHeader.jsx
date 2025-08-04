import { NavLink } from "react-router-dom";

const SubHeader = ({ to, headerText }) => {
  return (
    <header className="flex justify-between items-center mb-5 mt-8">
      <h2 className="font-roboto font-medium text-2xl">{headerText}</h2>
      <NavLink to={to} className="text-blue-500 font-bold">
        Show More
      </NavLink>
    </header>
  );
};

export default SubHeader;
