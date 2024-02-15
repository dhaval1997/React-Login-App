import { useForm } from "react-hook-form";

export const FormModal = ({ day, closeDayModal, submitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    const allData = {...data, day:day}
    console.log(data);
    submitHandler(allData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto bg-gray-800 bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-between p-4 md:p-5 border-b bg-indigo-400 rounded-t">
          <h3 className="text-xl  font-bold text-white">Day {day}</h3>
          <button
            type="button"
            onClick={closeDayModal}
            className="bg-white font-bold text-lg hover:bg-red-600 hover:text-white rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            X<span className="sr-only">Close modal</span>
          </button>
        </div>
        <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-3 mb-4 grid-cols-2">
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Name Visit
              </label>
              <input
                type="text"
                {...register("nameVisit", {
                  required: "Name Visit is Required.",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Name Visit"
              />
              {errors.nameVisit && (
                <p className="text-red-600">{errors.nameVisit.message}</p>
              )}
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Remarks
              </label>
              <input
                type="text"
                {...register("remarks")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Remarks"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Window Start Size
              </label>
              <input
                type="number"
                {...register("windowStartSize", {
                  required: "Window Start Size is Required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Window Start Size"
              />
              {errors.windowStartSize && (
                <p className="text-red-600">{errors.windowStartSize.message}</p>
              )}
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Window End Size
              </label>
              <input
                type="number"
                {...register("windowEndSize", {
                  required: "Window End Size is Required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Window End Size"
              />
              {errors.windowEndSize && (
                <p className="text-red-600">{errors.windowEndSize.message}</p>
              )}
            </div>

            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                {...register("autoStartNextCycle", {})}
                id="autoStartNextCycle"
                value="autoStartNextCycle"
                className="w-4 h-4 text-indigo-600 bg-gray-50 border-gray-300 rounded"
              />
              <label
                htmlFor="autoStartNextCycle"
                className=" m-2 text-sm font-medium text-gray-900 cursor-pointer"
              >
                Auto Start Next Cycle
              </label>
            </div>
            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                {...register("restartTheCycle", {})}
                id="restartTheCycle"
                value="restartTheCycle"
                className="w-4 h-4 text-indigo-600 bg-gray-50 border-gray-300 rounded"
              />
              <label
                htmlFor="restartTheCycle"
                className=" m-2 text-sm font-medium text-gray-900 cursor-pointer"
              >
                Restart the cycle from Day 1
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white w-full bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
