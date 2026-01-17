import { Outlet } from "react-router";
import Header from "../Components/shared/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/shared/Header/Navbar";

const Root = () => {
  return (
    <div>
      <header>
        <Header />
        <LatestNews />
        <Navbar />
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
