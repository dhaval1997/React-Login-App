const Container = ({ children }) => {
    
  return (
    <div className=" w-full h-auto flex items-center justify-center bg-gray-50 p-2 sm:p-6">
      <div className="w-full h-full border text-gray-700 px-6 border-gray-200 shadow-lg bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Container;
