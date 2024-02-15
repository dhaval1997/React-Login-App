import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { MdControlPointDuplicate } from "react-icons/md";
import TargetModal from "./Container/TargetModal";

const FieldTab = ({ addedData, activeFieldTab, setActiveFieldTab }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <TargetModal closeTargetModal={closeModal} />}
      <div className="w-48 px-2 rounded shadow-inner border border-gray-400 h-96">
        {addedData.map((item, index) => (
          <div
            key={index}
            className={`py-2 px-3 border rounded shadow flex items-center my-2 justify-between border-gray-300 cursor-pointer hover:bg-gray-100 ${
              activeFieldTab === index
                ? "bg-gray-300 text-gray-800 ps-1 hover:bg-gray-300"
                : ""
            }`}
            onClick={() => setActiveFieldTab(index)}
          >
            <div className="flex items-center">
              {activeFieldTab === index ? <FaCaretRight /> : ""}
              {item.fieldDisplayName}
            </div>
            <MdControlPointDuplicate onClick={handleShowModal} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FieldTab;
