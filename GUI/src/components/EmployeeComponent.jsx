import React, { useEffect, useState } from "react";
import {
  listEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeComponent() {
  const navigator = useNavigate();
  const { id } = useParams();
  listEmployees().then((emp) => console.log(emp.length));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [displayError, setDisplayError] = useState("");
  function vailidFunction() {
    let vailid = true;
    const copyError = { firstName, lastName, email };
    if (copyError.firstName.trim()) {
      copyError.firstName = "";
    } else {
      setDisplayError("Enter ");
      vailid = false;
    }

    if (copyError.lastName.trim()) {
      copyError.lastName = "";
    } else {
      setDisplayError("Enter LastName");
      vailid = false;
    }
    if (copyError.email.trim()) {
      copyError.email = "";
    } else {
      setDisplayError("Enter Email");
      vailid = false;
    }
    setError(copyError);
    return vailid;
  }

  function formHeandler(e) {
    e.preventDefault();
    if (vailidFunction()) {
      const data = {
        firstName,
        lastName,
        email,
      };
      if (id) {
        updateEmployeeById(id, data)
          .then((res) => {
            console.log(res.data);
            navigator("/employee");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      createEmployee(data);
      navigator("/employee");
    }
    console.log(id);
  }
  useEffect(() => {
    if (id) {
      getEmployeeById(id).then((empbyId) => {
        console.log(empbyId.data);
        setFirstName(empbyId.data.firstName);
        setLastName(empbyId.data.lastName);
        setEmail(empbyId.data.email);
      });
    }
  }, [id]);
  return (
    <div className="container w-50">
      <br></br>
      <div className="row">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-albel">FirstName</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <div className="form-group mb-2">
                  <label className="form-albel">LasttName</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    value={lastName}
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="form-group mb-2">
                <label className="form-albel">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <button className="btn btn-success " onClick={formHeandler}>
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;
