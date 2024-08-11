package com.deepak.fullstack.repo;

import com.deepak.fullstack.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpRepo extends JpaRepository<Employee,Long> {
}
