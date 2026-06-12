import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./component/Header";

const Register = lazy(() =>
  import("./component/employeeRegister.jsx")
);

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;