import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <section className="grid grid-cols-[300px_1fr]">
      <AppNav />
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default AppLayout;
