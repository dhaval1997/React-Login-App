import { MdMenu } from "react-icons/md";
import { toggleMenu } from "../utils/store/genteralSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between h-20 border w-full ps-4 pr-12">
      <h2 className="font-bold text-2xl cursor-pointer">
        <MdMenu onClick={() => dispatch(toggleMenu())} />
      </h2>
      <div>User Profile</div>
    </div>
  );
};

export default Header;
