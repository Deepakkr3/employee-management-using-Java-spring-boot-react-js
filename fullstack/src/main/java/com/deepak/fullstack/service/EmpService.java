package com.deepak.fullstack.service;

import com.deepak.fullstack.DTO.EmployeeDTO;

import java.util.List;

public interface EmpService {
    EmployeeDTO create(EmployeeDTO employeeDTO);
    List<EmployeeDTO> findall();
    EmployeeDTO getById(Long id);
    EmployeeDTO update(Long
                       id,EmployeeDTO employeeDTO);
    EmployeeDTO deleteById(Long id);



}
