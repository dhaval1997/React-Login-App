import { useState } from "react";
import Title from "./Container/Title";
import { FormModal } from "./Container/FormModal";
import PrimaryButton from "./Container/PrimaryButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PreviewDetailsModal } from "./Container/PreviewDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { addStudyDaysData } from "../utils/store/deisgnStudySlice";

const DesignStudyVisit = () => {
  const designData = useSelector((store) => store.designStudy.basicDetails);
  const days = parseInt(designData.studyDuration);

  const headerTitle = "Design Study - Visit Schedule";
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDayModal, setShowDayModal] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [formData, setFormData] = useState(Array(days).fill(null));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowDayModal(day);
  };

  const closeDayModal = () => {
    setShowDayModal(false);
  };

  const closePreviewModal = () => {
    setShowPreviewModal(false);
  };

  const handlePreviewModal = () => {
    setShowPreviewModal(true);
  };

  const handlePreviousPage = () => {
    navigate("/design");
  };

  const handleNextPage = () => {
    navigate("/design/visit/panel");
  };

  const handleFormSubmit = (formData) => {
    setFormData((prevFormData) => {
      const newData = [...prevFormData];
      newData[selectedDay - 1] = formData;
      return newData;
    });
    dispatch(addStudyDaysData(formData));
    closeDayModal();
  };

  return (
    <div>
      <Title title={headerTitle} />
      <div className="m-2 md:m-6 border rounded relative">
        <div className="grid grid-cols-3 md:grid-cols-7 m-2 md:m-6">
          {Array(days)
            .fill("")
            .map((elm, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleDayClick(index + 1)}
                  className={`${
                    formData[index] ? "bg-indigo-100 " : ""
                  }border border-gray-300 capitalize font-sans justify-center flex items-center hover:underline text-sm p-2 font-medium rounded-lg h-20 m-0 cursor-pointer`}
                >
                  {formData[index] && (
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-sm font-sans">
                        {formData[index].nameVisit}
                      </p>
                      <p className="text-xs">
                        Day {formData[index].day} (+-{" "}
                        {Math.abs(
                          +formData[index].windowEndSize -
                            +formData[index].windowStartSize
                        )}
                        )
                      </p>
                    </div>
                  )}
                  {!formData[index] && (
                    <p className="text-sm font-normal font-sans">
                      Day {index + 1}
                    </p>
                  )}
                </div>
              );
            })}
        </div>
        <div className="flex sm:justify-between flex-wrap items-center m-4 gap-4">
          <PrimaryButton type="button" onClick={handlePreviousPage}>
            <FaChevronLeft />
            Previous
          </PrimaryButton>
          <PrimaryButton type="button" onClick={handlePreviewModal}>
            Preview
          </PrimaryButton>
          <PrimaryButton type="button" onClick={handleNextPage}>
            Next
            <FaChevronRight />
          </PrimaryButton>
        </div>
      </div>
      {showDayModal && (
        <FormModal
          day={selectedDay}
          closeDayModal={closeDayModal}
          submitHandler={handleFormSubmit}
        />
      )}
      {showPreviewModal && (
        <PreviewDetailsModal
          formData={formData}
          showDayModal={showDayModal}
          setShowDayModal={setShowDayModal}
          closePreviewModal={closePreviewModal}
        />
      )}
    </div>
  );
};

export default DesignStudyVisit;
