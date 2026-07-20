import { Routes, Route } from "react-router";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import DashBoard from "./components/DashBoard";
import AllBooks from "./pages/AllBooks";
import AddBooks from "./pages/AddBooks";
import EditPages from "./pages/EditPages";
import ViewDetails from "./pages/ViewDetails";

export default function App() {
  const [sendBookDetails, setSendBookDetails] = useState(null);//i want store when i click on view detail then after i click this button so that book-card save on this state and then i used in viewdetails jsx.
  return (
    <>
      <div className="">
        <Routes element={<DashBoard />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Home setSendBookDetails={setSendBookDetails} />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/addbooks"
            element={
              <ProtectedRoutes>
                <AddBooks />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/editbooks"
            element={
              <ProtectedRoutes>
                <EditPages />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/viewdetails"
            element={
              <ProtectedRoutes>
                <ViewDetails sendBookDetails={sendBookDetails} />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </div>
    </>
  );
}
