import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Explore,
  ForgotPassword,
  Offers,
  Profile,
  SignIn,
  SignUp,
  Category,
  CreateListing,
} from "./pages";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-listing" element={<CreateListing />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
