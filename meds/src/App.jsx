import { Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Root from "./pages/Root";
import DashBoard from "./components/DashBoard";
import DesignStudy from "./components/DesignStudy";
import Subjects from "./components/Subjects";
import UserAndPermission from "./components/UserAndPermission";
import AuditTrail from "./components/AuditTrail";
import Site from "./components/Site";
import Chat from "./components/Chat";
import UserSettings from "./components/UserSettings";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import DesignStudyVisit from "./components/DesignStudyVisit";
import SearchSubject from "./components/SearchSubject";
import RegisterSubject from "./components/RegisterSubject";
import AddPanel from "./components/AddPanel";
import DesignStudyPanel from "./components/DesignStudyPanel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/design" element={<DesignStudy />} />
          <Route path="/design/visit" element={<DesignStudyVisit />} />
          <Route path="/design/visit/panel" element={<AddPanel />} />
          <Route
            path="/design/visit/assign-panel"
            element={<DesignStudyPanel />}
          />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjects/search" element={<SearchSubject />} />
          <Route path="/subjects/register" element={<RegisterSubject />} />
          <Route path="/user" element={<UserAndPermission />} />
          <Route path="/audit" element={<AuditTrail />} />
          <Route path="/site" element={<Site />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<UserSettings />} />
        </Route>
        <Route path="auth" element={<AuthForm />} />
        <Route path="help" element={<Help />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
