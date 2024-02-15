import Title from "./Container/Title";
import PrimaryButton from "./Container/PrimaryButton";
import { useForm } from "react-hook-form";

const RegisterSubject = () => {
  const headerTitle = "Register Subject";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Title title={headerTitle} />
      <div className="m-2 sm:m-4">
        <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-col m-4 gap-2">
            <label htmlFor="subjectInitials">Subject Initials</label>
            <input
              type="text"
              id="subjectInitials"
              {...register("subjectInitials", {
                required: "Subject Initials is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.subjectInitials && (
              <p className="text-red-600">{errors.subjectInitials.message}</p>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="randomizationNumber">Randomization Number</label>
            <input
              type="number"
              id="randomizationNumber"
              {...register("randomizationNumber", {
                required: "Randomization Number is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.randomizationNumber && (
              <p className="text-red-600">{errors.randomizationNumber.message}</p>
            )}
          </div>
          <div className="flex flex-col m-4 gap-2">
            <label htmlFor="subjectScreeningNumber">Subject Screening Number</label>
            <input
              type="number"
              id="subjectScreeningNumber"
              {...register("subjectScreeningNumber", {
                required: "Subject Screening Number is Required",
              })}
              className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
            />
            {errors.subjectScreeningNumber && (
              <p className="text-red-600">{errors.subjectScreeningNumber.message}</p>
            )}
          </div>
          {/* <Input title="Subject Initials" type="text" inputRef={subjectRef} />
          <Input
            title="Randomization Number"
            type="text"
            inputRef={RandNoRef}
          />
          <Input
            title="Subject Screening Number"
            type="text"
            inputRef={subjectNoRef}
          /> */}
          <div className="flex justify-center items-center p-4">
            <PrimaryButton type="submit">Register</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterSubject;
