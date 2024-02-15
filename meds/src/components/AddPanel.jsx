import { useState } from "react";
import Title from "./Container/Title";
import PanelForm from "./PanelForm";
import Tabs from "./Tab";
import FieldForm from "./FieldForm";
import FieldTab from "./FieldTab";

const AddPanel = () => {
  const headerTitle = "Panel - Add Panel";
  const [showPanel, setShowPanel] = useState(false);
  const [showFieldTab, setShowFieldTab] = useState(false);
  const [panelList, setPanelList] = useState([]);
  const [fieldList, setFieldList] = useState([]);
  const [activePanel, setActivePanel] = useState(0);
  const [activeField, setActiveField] = useState(0);

  const handleAddPanel = () => {
    setShowPanel(true);
    setShowFieldTab(false);
  };

  const handleAddFields = (data) => {
    setPanelList([...panelList, data]);
    setShowFieldTab(true);
    setShowPanel(false);
  };

  const handleAddMoreFields = (data) => {
    setFieldList([...fieldList, data]);
  };

  console.log(fieldList);
  console.log(panelList);

  return (
    <div className="w-full">
      <div className="w-full px-4 py-2">
        <Title title={headerTitle} />
        <Tabs handleAddPanel={handleAddPanel} panelList={panelList} />
      </div>
      <div className="flex w-full ps-4">
        {fieldList.length > 0 && (
          <FieldTab
            addedData={fieldList}
            activeFieldTab={activeField}
            setActiveFieldTab={setActiveField}
          />
        )}
        {showPanel && (
          <PanelForm
            onAddClick={handleAddFields}
            activePanel={activePanel}
            setActivePanel={setActivePanel}
          />
        )}
        {showFieldTab && <FieldForm onAddClick={handleAddMoreFields} />}
      </div>
    </div>
  );
};

export default AddPanel;
