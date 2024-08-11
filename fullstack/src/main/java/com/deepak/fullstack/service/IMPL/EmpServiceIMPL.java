package com.deepak.fullstack.service.IMPL;

import com.deepak.fullstack.DTO.EmployeeDTO;
import com.deepak.fullstack.mapper.EmployeMapper;
import com.deepak.fullstack.model.Employee;
import com.deepak.fullstack.repo.EmpRepo;
import com.deepak.fullstack.service.EmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class EmpServiceIMPL implements EmpService {

    @Autowired
    EmpRepo empRepo;
    @Override
    public EmployeeDTO create(EmployeeDTO employeeDTO) {
        Employee employee= EmployeMapper.dtoToEmployee(employeeDTO);
         empRepo.save(employee);
         return employeeDTO;
    }

    @Override
    public List<EmployeeDTO> findall() {
        List<Employee> employes=empRepo.findAll();
        return employes.stream().map((employee)->EmployeMapper.employeeToDto(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO getById(Long id) {
        Employee employee=empRepo.findById(id).orElseThrow(()->new RuntimeException("not found "+id));
        return EmployeMapper.employeeToDto(employee);
    }

    @Override
    public EmployeeDTO update(Long id, EmployeeDTO employeeDTO) {
        Employee employee =empRepo.findById(
                id
        ).orElseThrow(()->new RuntimeException("not found "+id));
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employeeDTO.getLastName());
        employee.setEmail(employeeDTO.getEmail());
        empRepo.save(employee);
        return EmployeMapper.employeeToDto(employee);
    }

    @Override
    public EmployeeDTO deleteById(Long id) {
        Employee employee=empRepo.findById(id).orElseThrow(()->new RuntimeException("not found "+id));
        if(!employee.equals(null)){
            empRepo.deleteById(id);
        }
        return EmployeMapper.employeeToDto(employee);
    }
}
