import { useState } from "react";
import RegisteredUser from "./RegisteredUser";
import PrimaryButton from "./Container/PrimaryButton";
import Title from "./Container/Title";
import { useNavigate } from "react-router-dom";

const SearchSubject = () => {
  const headerTitle = "Search Subject";
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <Title title={headerTitle} />
      <div className="flex sm:justify-between flex-wrap items-center m-4 gap-4">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search Subject"
          className="border min-w-64 px-2 py-1 rounded focus:outline-none focus:border-gray-600"
        />
        <PrimaryButton
          type="button"
          onClick={() => navigate("/subjects/register")}
        >
          Register Subject
        </PrimaryButton>
      </div>
      <p className="mx-6 my-4">Total Subjects: 1</p>
      <div className="m-4">
        <RegisteredUser />
        <RegisteredUser />
      </div>
    </div>
  );
};

export default SearchSubject;
