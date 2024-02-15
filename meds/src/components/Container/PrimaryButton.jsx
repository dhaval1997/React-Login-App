const PrimaryButton = ({ children, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-2 px-6 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white min-w-64 md:min-w-36 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
