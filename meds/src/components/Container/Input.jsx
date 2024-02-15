const Input = ({ title, type, required = true, inputRef }) => {

  return (
    <div className="m-4 ">
      <div className="flex flex-col mx-auto gap-2">
        <label htmlFor={title}>{title}</label>
        <input
          type={type}
          ref={inputRef}
          required={required}
          id={title} 
          className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
        />
      </div>
    </div>
  );
};

export default Input;


export const InputRow =  ({ title, type, inputRef }) => {

  return (
    <>
      <div className="md:grid md:grid-cols-2 flex mx-4 my-2 flex-col gap-2">
        <label htmlFor={title}>{title}</label>
        <input
          type={type}
          ref={inputRef}
          id={title} 
          className="border border-gray-300 px-2 py-1 rounded outline-none focus:border-slate-800"
        />
      </div>
    </>
  );
};