package com.deepak.fullstack.mapper;

import com.deepak.fullstack.DTO.EmployeeDTO;
import com.deepak.fullstack.model.Employee;

public class EmployeMapper {

    public static Employee dtoToEmployee(EmployeeDTO employeeDTO){
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail()
        );
    }
    public static EmployeeDTO employeeToDto(Employee employee){
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }
}
