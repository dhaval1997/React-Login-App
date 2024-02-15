import { useState } from "react";
import PrimaryButton from "./Container/PrimaryButton";

const PanelForm = ({ onAddClick }) => {
  const [panelName, setPanelName] = useState("");
  const [description, setDescription] = useState("");
  const [annotationName, setAnnotationName] = useState("");
  const [reminderFrequency, setReminderFrequency] = useState(0);
  const [panelType, setPanelType] = useState("others");
  const [appAlarm, setAppAlarm] = useState(false);
  const [reminderTimes, setReminderTimes] = useState([]);
  const [showMedicineFields, setShowMedicineFields] = useState(false);

  const handlePanelType = (e) => {
    setPanelType(e.target.value);
    if (e.target.value === "medicine") {
      setShowMedicineFields(true);
    } else {
      setShowMedicineFields(false);
    }
  };
  const handleFrequencyChange = (e) => {
    setReminderFrequency(parseInt(e.target.value, 10));
  };

  const handleTimeChange = (index, value) => {
    const newTimes = [...reminderTimes];
    newTimes[index] = value;
    setReminderTimes(newTimes);
  };

  const handleAppAlarmChange = (e) => {
    setAppAlarm(e.target.checked);
  };

  const handleAddFields = (e) => {
    e.preventDefault();
    const fieldData = {
      panelName,
      panelType,
      annotationName,
      description,
      reminderFrequency,
      appAlarm,
      times: reminderTimes,
    };
    console.log(fieldData);
    // setAddedData([...addedData, fieldData]);
    onAddClick(fieldData);
    // console.log(addedData);
  };

  return (
    <div className="flex m-4 w-full">
      <form className="w-full">
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full ">
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="panelName">Panel Name</label>
            <input
              type="text"
              required
              id="panelName"
              value={panelName}
              onChange={(e) => setPanelName(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              required
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="annotationName">Annotation Name</label>
            <input
              type="text"
              required
              id="annotationName"
              value={annotationName}
              onChange={(e) => setAnnotationName(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="reminderFrequency">Reminder Frequency</label>
            <select
              id="reminderFrequency"
              value={reminderFrequency}
              required
              onChange={handleFrequencyChange}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            {reminderFrequency > 0 && (
              <div className="flex flex-wrap justify-between">
                <label>Time Selection</label>
                {[...Array(reminderFrequency)].map((_, index) => (
                  <div key={index}>
                    {/* <label>Reminder Time {index + 1}:</label> */}
                    <input
                      type="time"
                      onChange={(e) => handleTimeChange(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="panelType">Panel Type</label>
            <select
              id="panelType"
              required
              value={panelType}
              onChange={handlePanelType}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            >
              <option value="others">others</option>
              <option value="medicine">Medicine</option>
            </select>

            {showMedicineFields && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 py-2 ">
                  <label htmlFor="dosage">Dosage</label>
                  <select
                    id="dosage"
                    className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
                  >
                    {[1, 2, 3, 4].map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 py-2">
                  <label htmlFor="medicineType">Medicine Type</label>
                  <select
                    id="medicineType"
                    className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
                  >
                    <option value="tablet">Tablet</option>
                    <option value="capsule">Capsule</option>
                    <option value="syrup">Syrup</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center m-4 gap-2">
            <label htmlFor="appAlarm">Add Alarm</label>
            <input
              type="checkbox"
              id="appAlarm"
              required
              checked={appAlarm}
              onChange={handleAppAlarmChange}
              className="w-4 h-4 ms-4 text-indigo-600 bg-gray-50 border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex justify-end md:mx-16 m-6 md:mt-16">
          <PrimaryButton type="button" onClick={handleAddFields}>
            Add Fields
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default PanelForm;
