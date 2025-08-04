import { NavLink } from "react-router-dom";

const SubHeader = ({ to, headerText }) => {
  return (
    <header className="flex justify-between items-center mb-5 mt-8">
      <h2 className="font-roboto font-medium text-2xl max-tabletSm:text-lg">
        {headerText}
      </h2>
      <NavLink to={to} className="text-blue-500 font-bold max-tabletSm:text-sm">
        Show More
      </NavLink>
    </header>
  );
};

export default SubHeader;
