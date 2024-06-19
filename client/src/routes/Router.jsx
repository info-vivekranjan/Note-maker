import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/auth/Login";
import Register from "../components/register/Register";
import NotesData from "../components/NotesData/NotesData";
import CreateNote from "../components/CreateNote/CreateNote";
import EditNote from "../components/EditNote/EditNote";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile/Profile";
import TextEditor from '../components/TextEditor'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <NotesData />
            </PrivateRoute>
          }
        />
        <Route
          path="/text-editor"
          element={
            <PrivateRoute>
              <TextEditor />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-note"
          element={
            <PrivateRoute>
              <CreateNote />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-note/:id"
          element={
            <PrivateRoute>
              <EditNote />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
