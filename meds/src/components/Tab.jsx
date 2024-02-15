import { useState } from "react";

function Tabs({ handleAddPanel, panelList }) {
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    handleAddPanel();
  };

  const setActive = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full py-2">
      <div className="flex justify-between overflow-x-auto">
        {panelList.map((tab, index) => (
          <button
            key={index}
            className={`mr-2 w-full rounded bg-gray-200 hover:bg-gray-300 focus:outline-none ${
              activeTab === index ? "bg-gray-400 text-gray-800 hover:bg-gray-400" : ""
            }`}
            onClick={() => setActive(index)}
          >
            {tab.panelName}
          </button>
        ))}
        <button
          className=" rounded sticky w-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          onClick={addTab}
        >
          + Add Tab
        </button>
      </div>
    </div>
  );
}

export default Tabs;
