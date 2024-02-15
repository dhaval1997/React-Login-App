const Title = ({title}) => {
  return (
    <div className="w-full pt-6 pb-2 ">
      <div className="text-white font-bold text-xl rounded-md flex justify-center items-center bg-indigo-500 h-auto py-1 px-4 lg:h-8">
        {title}
      </div>
    </div>
  );
};

export default Title;
