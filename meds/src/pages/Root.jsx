import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Container from "../components/Container/Container";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Root = () => {
  const isMenuOpen = useSelector((store) => store.general.isMenuOpen);
  return (
    <div className="w-full bg-gray-100 text-slate-900 h-screen flex items-center justify-center p-2 sm:p-6">
      <div className="flex w-full h-full bg-white border">
        {isMenuOpen && <NavBar />}
        <div className="flex flex-col w-full h-full">
          <div className="w-full">
            <Header />
          </div>
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Root;
