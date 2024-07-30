import { Route, Routes } from "react-router-dom";
import UserList from "./features/users/UserList";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";

const App = () => {
  return (
    <>
      <div className="container mx-auto px-2 max-w-5xl pt-5 md:pt-25">
        <h1 className="text-center font-bold text-gray-800 pb-5">
          Task Managemetnt Crud Application
        </h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
