import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Exprore,
  ForgotPassword,
  Offers,
  Profile,
  SignIn,
  SignUp,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Exprore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
