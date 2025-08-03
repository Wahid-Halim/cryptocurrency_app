import { NavLink } from "react-router-dom";

const News = () => {
  return (
    <div>
      <header>
        <h2>Latest Crypto News</h2>
        <NavLink to="/news">Show More</NavLink>
      </header>
      <div>News</div>
    </div>
  );
};

export default News;
