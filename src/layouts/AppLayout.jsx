import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <section className="grid grid-cols-[300px_1fr] max-laptop1:grid-cols-[200px_1fr] max-mobileLg:grid-cols-[1fr]">
      <AppNav />
      <main className="overflow-scroll h-screen bg-slate-100">
        <Outlet />
      </main>
    </section>
  );
};

export default AppLayout;
