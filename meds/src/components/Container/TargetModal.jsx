import { Controller, useForm } from "react-hook-form";

const TargetModal = ({ closeTargetModal }) => {
  const {
    control,
    watch,
    handleSubmit,
  } = useForm();

  const takenValue = watch("taken");
  const reasonValue = watch("reason");

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto bg-gray-800 bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-between p-4 md:p-5 border-b bg-indigo-400 rounded-t">
          <h3 className="text-xl text-center font-bold text-white">
            Target : M1H2 - Med
          </h3>
          <button
            type="button"
            onClick={closeTargetModal}
            className="bg-white font-bold text-lg hover:bg-red-600 hover:text-white rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            X<span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="flex flex-col p-4 md:p-5">
          <h2 className="border border-gray-400 p-2 mb-4">
            Target 1: Field Value - Skip, redirect to - Reason{" "}
          </h2>
          <div className="flex gap-1">
            <span className=" font-bold">Field Name:</span>
            <span>Have you taken the drug?</span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
          <div className="grid gap-3 mb-4 grid-cols-1">
            <div className="grid grid-cols-2 p-2 items-center gap-2">
              <label>Field Value</label>
              <Controller
                control={control}
                name="taken"
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  >
                    <option value="">Select...</option>
                    <option value="taken">Taken</option>
                    <option value="skip">Skip</option>
                  </select>
                )}
              />
            </div>
            {takenValue === "taken" && (
              <div className="grid grid-cols-2 p-2 items-center gap-2">
                <label>Redirect To</label>
                <Controller
                  control={control}
                  name="reason"
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    >
                      <option value="">Select...</option>
                      <option value="reason">Reason</option>
                      <option value="other">Other</option>
                    </select>
                  )}
                />
              </div>
            )}
            {reasonValue === "other" && (
              <div className="grid grid-cols-2 p-2 items-center gap-2">
              <label>Other Reason</label>
                <Controller
                  control={control}
                  name="otherReason"
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    />
                  )}
                />
              </div>
            )}
            <button
              type="submit"
              className="text-white w-full bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TargetModal;
