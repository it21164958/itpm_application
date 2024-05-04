import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/addUser";
import Login from "./pages/login";
import ViewUsers from "./pages/allUser";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Login />} />  
      <Route path="/sign" element={<Register />} />
      <Route path="/users" element={<ViewUsers />} />
      <Route path="/profile" element={<ProfilePage />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
