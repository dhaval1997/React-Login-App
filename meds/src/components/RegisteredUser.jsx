import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import RegisteredUserDetails from "./RegisteredUserDetails";

const RegisteredUser = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <div className="border rounded border-gray-300 hover:border-gray-600 my-2">
        <div
          onClick={() => setIsExpand(!isExpand)}
          className="flex justify-between items-center cursor-pointer mx-4 my-2"
        >
          <p>Prayas Patidar</p>
          <p>M/24</p>
          {isExpand ? <MdExpandLess /> : <MdExpandMore />}
        </div>
      </div>
      {isExpand && <RegisteredUserDetails />}
    </>
  );
};

export default RegisteredUser;
