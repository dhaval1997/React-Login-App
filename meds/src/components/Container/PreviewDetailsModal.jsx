import React from "react";
import { findNextNonNullItem } from "../../utils/helper";

export const PreviewDetailsModal = ({
  closePreviewModal,
  setShowDayModal,
  formData,
}) => {
  const handleDayClick = (day) => {
    setShowDayModal(day);
    closePreviewModal();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto bg-gray-800 bg-opacity-50">
        <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full">
          <div className="flex items-center justify-between p-4 md:p-5 border-b bg-indigo-400 rounded-t">
            <h3 className="text-xl  font-bold text-white">Preview</h3>
            <button
              type="button"
              onClick={closePreviewModal}
              className="bg-white font-bold text-lg hover:bg-red-400 hover:text-white rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              X
            </button>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center m-6 text-gray-700">
              {formData.map((item, index) => {
                if (item) {
                  const previousItem = findNextNonNullItem(formData, index);
                  const dayDifference = previousItem
                    ? Math.abs(item.day - previousItem.day)
                    : null;

                  return (
                    <React.Fragment key={index}>
                      <div
                        onClick={() => handleDayClick(item.day)}
                        className="flex items-center justify-center cursor-pointer bg-gray-50 p-1.5 rounded border border-opacity-25 shadow-md border-gray-800 min-w-64"
                      >
                        <h3 className="font-medium capitalize text-center text-sm mb-1">
                          Day {item.day} - {item.nameVisit}
                        </h3>
                      </div>
                      {dayDifference && (
                        <div className="h-12 border flex justify-center items-center border-gray-500 relative">
                          <p className="absolute text-xs w-24 text-center bg-gray-100 px-3 border-white border-4 rounded">
                            {dayDifference && `${dayDifference} days`}
                          </p>
                        </div>
                      )}
                    </React.Fragment>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
