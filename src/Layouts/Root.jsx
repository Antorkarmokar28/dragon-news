import { Outlet } from "react-router";
import Header from "../Components/shared/Header/Header";

const Root = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <aside></aside>
      <main>
        <Outlet />
      </main>
      <aside></aside>
    </div>
  );
};

export default Root;
