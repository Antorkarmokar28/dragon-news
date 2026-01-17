import { NavLink } from "react-router";
import profile from "../../../assets/user.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <nav className="container mx-auto md:flex justify-between items-center mt-10 p-4">
      <div></div>
      <div>
        <ul className="flex gap-6 text-lg text-accent">{navLinks}</ul>
      </div>
      <div className="flex gap-4 items-center">
        <img src={profile} alt="profile-image" />
        <button className="bg-primary text-base-100 font-bold py-4 px-10 cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
