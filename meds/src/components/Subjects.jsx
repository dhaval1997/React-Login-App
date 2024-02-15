import Title from "./Container/Title";
import PrimaryButton from "../components/Container/PrimaryButton";
import { useForm } from "react-hook-form";

const Subjects = () => {
  const headerTitle = "Search Subject";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Title title={headerTitle} />
      <form className="md:mx-16 m-4 px-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mx-auto my-1 gap-2">
          <label htmlFor="subjectName">Subject Name</label>
          <input
            type="text"
            {...register("subjectName", {})}
            id="subjectName"
            className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
          />
          {errors.subjectName && (
            <p className="text-red-600">{errors.subjectName.message}</p>
          )}
        </div>
        <p className="text-center">OR</p>
        <div className="flex flex-col mx-auto my-1 gap-2">
          <label htmlFor="subjectRandomisationNo">
            Subject Randomisation No
          </label>
          <input
            type="text"
            {...register("subjectRandomisationNo", {})}
            id="subjectRandomisationNo"
            className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
          />
          {errors.subjectRandomisationNo && (
            <p className="text-red-600">
              {errors.subjectRandomisationNo.message}
            </p>
          )}
        </div>
        <p className="text-center">OR</p>
        <div className="flex flex-col mx-auto my-1 gap-2">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            {...register("phoneNumber", {})}
            id="phoneNumber"
            className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
          />
          {errors.phoneNumber && (
            <p className="text-red-600">{errors.phoneNumber.message}</p>
          )}
        </div>
        <p className="text-center">OR</p>
        <div className="flex flex-col mx-auto my-1 gap-2">
          <label htmlFor="studyName">Study Name</label>
          <input
            type="text"
            {...register("studyName", {})}
            id="studyName"
            className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
          />
          {errors.studyName && (
            <p className="text-red-600">{errors.studyName.message}</p>
          )}
        </div>
        <p className="text-center">OR</p>
        <div className="flex justify-center items-center m-6">
          <PrimaryButton type="submit">Search</PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default Subjects;
