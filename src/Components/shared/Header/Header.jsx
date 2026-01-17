import { format } from "date-fns";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 py-8 px-4">
      <img src={logo} alt="Logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent">
        <span className="font-bold text-black">
          {format(new Date(), "EEEE,")}{" "}
        </span>
        {format(new Date(), "MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
