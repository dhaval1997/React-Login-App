import { NavLink } from "react-router-dom";

function NavItem({ navData }) {
  return (
    <li className="py-0.5">
      <NavLink
        to={navData.path}
        className={({ isActive }) => {
          return isActive
            ? " text-white bg-indigo-600 font-bold"
            : " text-white font-semibold hover:text-indigo-500 hover:bg-gray-100";
        }}
      >
        <div
          className="headFont relative bg-inherit flex items-center justify-start ps-3
          py-2 space-x-2"
        >
          <p> {navData.icon}</p>
          <p className="block">{navData.navName}</p>
        </div>
      </NavLink>
    </li>
  );
}

export default NavItem;
