import React, { useEffect, useState } from "react";
import { listEmployees, deleteById } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
function ListEmployees() {
  const navigator = useNavigate();
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    listEmployees().then((data) => {
      setEmployee(data);
    });
  }, [employee]);
  function addNewEmployee() {
    navigator("/addemployee");
  }
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }
  function deleteHeandle(id) {
    deleteById(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigator("/employee");
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary mb-2"
        onClick={addNewEmployee}
      >
        +Employee
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((el, i) => (
            <>
              {" "}
              <tr key={i}>
                {" "}
                <td>{el.id}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.email}</td>
                <td className="d-flex p-2 ">
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => updateEmployee(el.id)}
                  >
                    update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mx-3"
                    onClick={() => deleteHeandle(el.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListEmployees;
