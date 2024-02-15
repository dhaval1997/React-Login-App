import { NavLink, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import {
  MdDashboard,
  MdOutlineDesignServices,
  MdRuleFolder,
  MdMessage,
  MdSettings,
} from "react-icons/md";
import { FaUsers, FaSitemap } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

const NavData = [
  {
    navName: "DashBoard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    navName: "Design Study",
    path: "/design",
    icon: <MdOutlineDesignServices />,
  },
  {
    navName: "Manage Subjects",
    path: "/subjects",
    icon: <MdRuleFolder />,
  },
  {
    navName: "User & Permission Management",
    path: "/user",
    icon: <FaUsers />,
  },
  {
    navName: "Audit Trail",
    path: "/audit",
    icon: <FaListCheck />,
  },
  {
    navName: "Manage Site",
    path: "/site",
    icon: <FaSitemap />,
  },
  {
    navName: "Chat",
    path: "/chat",
    icon: <MdMessage />,
  },
  {
    navName: "Settings",
    path: "/settings",
    icon: <MdSettings />,
  },
];

let NAME = "Cliantha Research";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="min-w-36 md:min-w-52 py-3 bg-indigo-500 h-full text-white overflow-x-hidden overflow-y-auto scroll">
      <div className="flex flex-col justify-start h-full">
        <div className="p-2 flex mb-12 mt-6 items-center h-4">
          <h1 className="block ps-3 headFont font-bold text-2xl">{NAME}</h1>
          {/* <p className="lg:hidden">
            <MdMenu />
          </p> */}
        </div>
        <div className="">
          <ul>
            {NavData.map((item) => {
              return <NavItem key={item.navName} navData={item} />;
            })}
          </ul>
        </div>
        <div className="flex-col mt-auto flex">
          <NavLink
            to={"/help"}
            className={({ isActive }) => {
              return isActive
                ? " bg-indigo-500 fill-slate-900 p-2"
                : "fill-white opacity-90 p-2 hover:underline";
            }}
          >
            Help
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => {
              return isActive
                ? "bg-indigo-500 fill-slate-900 rounded p-2"
                : "fill-white opacity-90 p-2 rounded hover:underline";
            }}
          >
            Contact Us
          </NavLink>
          <button
            className="flex px-2 items-center gap-2"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
