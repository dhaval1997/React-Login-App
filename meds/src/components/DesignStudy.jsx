import Title from "./Container/Title";
import PrimaryButton from "../components/Container/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../utils/store/deisgnStudySlice";
import { useForm } from "react-hook-form";

const DesignStudy = () => {
  const headerTitle = "Design Study - Basic Details";
  const addedData = useSelector((store) => store.designStudy.basicDetails);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: addedData.title || "",
      croAddress: addedData.croAddress || "",
      croCountry: addedData.croCountry || "",
      croName: addedData.croName || "",
      croPhone: addedData.croPhone || "",
      date: addedData.date || "",
      protocol: addedData.protocol || "",
      sponsorAddress: addedData.sponsorAddress || "",
      sponsorCountry: addedData.sponsorCountry || "",
      sponsorName: addedData.sponsorName || "",
      sponsorPhone: addedData.sponsorPhone || "",
      studyDuration: addedData.studyDuration || "",
      versionNo: addedData.versionNo || "",
    },
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addDetails(data));
    console.log(data);
    navigate("/design/visit");
  };

  return (
    <>
      <Title title={headerTitle} />
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full ">
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              {...register("title", {
                required: "Title is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.title && (
              <p className="text-red-600">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="versionNo">Version No.</label>
            <input
              type="text"
              id="versionNo"
              {...register("versionNo", {
                required: "Version No. is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.versionNo && (
              <p className="text-red-600">{errors.versionNo.message}</p>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="protocol">Protocol</label>
            <input
              type="text"
              id="protocol"
              {...register("protocol", {
                required: "Protocol is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.protocol && (
              <p className="text-red-600">{errors.protocol.message}</p>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="studyDuration">Study Duration</label>
            <input
              type="number"
              id="studyDuration"
              {...register("studyDuration", {
                required: "Study Duration is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.studyDuration && (
              <p className="text-red-600">{errors.studyDuration.message}</p>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="sponsorName">Sponsor Name</label>
            <input
              type="text"
              id="sponsorName"
              {...register("sponsorName", {
                required: "Sponsor Name is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.sponsorName && (
              <p className="text-red-600">{errors.sponsorName.message}</p>
            )}
          </div>

          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="croName">CRO Name</label>
            <input
              type="text"
              id="croName"
              {...register("croName", {
                required: "CRO Name is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.croName && (
              <p className="text-red-600">{errors.croName.message}</p>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="sponsorAddress">Sponsor Address</label>
            <input
              type="text"
              id="sponsorAddress"
              {...register("sponsorAddress", {
                required: "Sponsor Address is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.sponsorAddress && (
              <p className="text-red-600">{errors.sponsorAddress.message}</p>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="croAddress">CRO Address</label>
            <input
              type="text"
              id="croAddress"
              {...register("croAddress", {
                required: "CRO Address is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.croAddress && (
              <p className="text-red-600">{errors.croAddress.message}</p>
            )}
          </div>
          <div className="grid grid-cols-2 ">
            <div className="flex flex-col m-4 gap-2">
              <label htmlFor="sponsorCountry">Sponsor Country</label>
              <input
                type="text"
                id="sponsorCountry"
                {...register("sponsorCountry", {
                  required: "Sponsor Country is Required",
                })}
                className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
              />
              {errors.sponsorCountry && (
                <p className="text-red-600">{errors.sponsorCountry.message}</p>
              )}
            </div>
            <div className="flex flex-col m-4 gap-2">
              <label htmlFor="sponsorPhone">Sponsor Phone</label>
              <input
                type="text"
                id="sponsorPhone"
                {...register("sponsorPhone", {
                  required: "Sponsor Phone is Required",
                })}
                className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
              />
              {errors.sponsorPhone && (
                <p className="text-red-600">{errors.sponsorPhone.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col m-4 gap-2">
              <label htmlFor="croCountry">CRO Country</label>
              <input
                type="text"
                id="croCountry"
                {...register("croCountry", {
                  required: "CRO Country is Required",
                })}
                className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
              />
              {errors.croCountry && (
                <p className="text-red-600">{errors.croCountry.message}</p>
              )}
            </div>
            <div className="flex flex-col m-4 gap-2">
              <label htmlFor="croPhone">CRO Phone</label>
              <input
                type="text"
                id="croPhone"
                {...register("croPhone", {
                  required: "CRO Phone is Required",
                })}
                className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
              />
              {errors.croPhone && (
                <p className="text-red-600">{errors.croPhone.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex m-4 gap-6">
          <label htmlFor="">Date & Time Format:</label>
          <input
            type="date"
            {...register("date", { required: "Date is Required" })}
          />
          {errors.date && <p className="text-red-600">{errors.date.message}</p>}
        </div>
        <div className="flex sm:justify-between flex-wrap items-center m-4 gap-4">
          {" "}
          <PrimaryButton type="button">Modify Existing Study</PrimaryButton>
          <PrimaryButton type="button">Copy Study Data</PrimaryButton>
          <PrimaryButton type="Submit">Next</PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default DesignStudy;
