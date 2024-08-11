import ListEmployees from "./components/ListEmployees";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ListEmployees />} />
            <Route path="/employee" element={<ListEmployees />} />
            <Route path="/addemployee" element={<EmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
