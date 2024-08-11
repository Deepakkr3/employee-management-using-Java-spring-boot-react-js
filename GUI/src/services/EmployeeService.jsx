import axios from "axios";
const BASE_URL = "http://localhost:8080/api/employee";

export const listEmployees = async function () {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createEmployee = function (data) {
  axios.post(BASE_URL, data);
};

export const getEmployeeById = function (id) {
  return axios.get(BASE_URL + "/" + id);
};
export const updateEmployeeById = function (id, employee) {
  const response = axios.put(BASE_URL + "/" + id, employee);
  return response.data;
};
export const deleteById = function (id) {
  return axios.delete(BASE_URL + "/" + id);
};
