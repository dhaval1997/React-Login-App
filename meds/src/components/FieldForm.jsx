import { useState } from "react";
import PrimaryButton from "./Container/PrimaryButton";
import { useNavigate } from "react-router-dom";

const FieldForm = ({ onAddClick }) => {
  const [fieldDisplayName, setFieldDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const [annotationName, setAnnotationName] = useState("");
  const [newFieldType, setNewFieldType] = useState("");
  const [additionalField, setAdditionalField] = useState(null);
  const navigate = useNavigate();

  const handleFieldTypeChange = (e) => {
    setNewFieldType(e.target.value);
    switch (e.target.value) {
      case "text":
        setAdditionalField(
          <input
            className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            type="text"
            placeholder="Add Text"
          />
        );
        break;
      case "textarea":
        setAdditionalField(
          <textarea
            className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            placeholder="Add Text"
          />
        );
        break;
      case "number":
        setAdditionalField(
          <input
            className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            type="number"
            placeholder="Add Number"
          />
        );
        break;
      case "boolean":
        setAdditionalField(
          <div className="flex justify-between">
            <label>
              <input
                type="radio"
                className="w-4 h-4 mx-2 text-center text-indigo-600 bg-gray-50 border-gray-300 rounded"
                value="true"
                name="booleanField"
              />
              Taken
            </label>
            <label>
              <input
                type="radio"
                className="w-4 h-4 mx-2 text-center text-indigo-600 bg-gray-50 border-gray-300 rounded"
                value="false"
                name="booleanField"
              />
              Skip
            </label>
          </div>
        );
        break;
      case "range":
        setAdditionalField(
          <div>
            <input
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
              type="number"
              placeholder="Low"
            />
            <input
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
              type="number"
              placeholder="Moderate"
            />
            <input
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
              type="number"
              placeholder="High"
            />
          </div>
        );
        break;
      case "checkbox":
        setAdditionalField(
          <label htmlFor="check">
            Check
            <input
              className="w-4 h-4 ms-4 text-center text-indigo-600 bg-gray-50 border-gray-300 rounded"
              type="checkbox"
              id="check"
            />
          </label>
        );
        break;
      default:
        setAdditionalField(null);
        break;
    }
  };

  const handleAddFields = (e) => {
    e.preventDefault();
    const fieldData = {
      fieldDisplayName,
      annotationName,
      description,
    };
    console.log(fieldData);
    onAddClick(fieldData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/design/visit/assign-panel");
  };

  return (
    <div className="flex m-4 w-full">
      <form onSubmit={submitHandler} className="w-full">
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full ">
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="fieldDisplayName">Field Display Name</label>
            <input
              type="text"
              required
              id="fieldDisplayName"
              value={fieldDisplayName}
              onChange={(e) => setFieldDisplayName(e.target.value)}
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
            <label htmlFor="newFieldType">Field Type</label>
            <select
              value={newFieldType}
              onChange={handleFieldTypeChange}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            >
              <option value="">Select Field Type</option>
              <option value="text">Text</option>
              <option value="textarea">Others</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
              <option value="range">Range</option>
              <option value="checkbox">Checkbox</option>
            </select>

            {additionalField}
          </div>
        </div>
        <div className="flex sm:justify-end flex-wrap  gap-4 md:mx-16 m-6 md:mt-24">
          <PrimaryButton type="button" onClick={handleAddFields}>
            Add More Fields
          </PrimaryButton>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default FieldForm;
