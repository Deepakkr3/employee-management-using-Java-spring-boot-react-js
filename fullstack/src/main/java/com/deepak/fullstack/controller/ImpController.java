package com.deepak.fullstack.controller;


import com.deepak.fullstack.DTO.EmployeeDTO;
import com.deepak.fullstack.service.IMPL.EmpServiceIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin("*")
public class ImpController {
    @Autowired
    EmpServiceIMPL empServiceIMPL;

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAll(){
        List<EmployeeDTO> employeeDTOS=empServiceIMPL.findall();
        return new ResponseEntity<>(employeeDTOS, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<EmployeeDTO> create(@RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO employeeDTOS=empServiceIMPL.create(employeeDTO);
        return new ResponseEntity<>(employeeDTOS, HttpStatus.CREATED);
    }
    @GetMapping("/{id}")

    public ResponseEntity<EmployeeDTO> getById(@PathVariable Long id){
        EmployeeDTO employeeDTOS=empServiceIMPL.getById(id);
        return new ResponseEntity<>(employeeDTOS, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDTO> update(@PathVariable Long id,@RequestBody EmployeeDTO employeeDTO){
        return new ResponseEntity<>(empServiceIMPL.update(id,employeeDTO),HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<EmployeeDTO> delete(@PathVariable Long id){
        return new ResponseEntity<>(empServiceIMPL.deleteById(id),HttpStatus.OK);
    }


}
