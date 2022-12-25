package com.employee.management.controller;

import com.employee.management.entity.Employee;
import com.employee.management.exception.ResourceNotFoundException;
import com.employee.management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    private EmployeeRepository employeeRepository;

    @Autowired
    public void setEmployeeRepository(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // getting all employees
    @CrossOrigin        // solved the problem (... has been blocked by cors policy)
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //  create employee
    @PostMapping("/employees")
    @CrossOrigin        // solved the problem (... has been blocked by cors policy)
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // getting employee by id
    @GetMapping("/employees/{id}")
    @CrossOrigin        // solved the problem (... has been blocked by cors policy)
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeRepository
                .findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee with id: " + id + " not found!")
                );
        return ResponseEntity.ok(employee);
    }

    // updating employee
    @PutMapping("/employees/{id}")
    @CrossOrigin        // solved the problem (... has been blocked by cors policy)
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeGiven) {
        Employee employee = employeeRepository
                .findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee with id: " + id + " not found!")
                );
        employee.setFirstname(employeeGiven.getFirstname());
        employee.setLastname(employeeGiven.getLastname());
        employee.setEmail(employeeGiven.getEmail());
        Employee updatedEmp = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmp);
    }


    // Delete employee
    @DeleteMapping("/employees/{id}")
    @CrossOrigin        // solved the problem (... has been blocked by cors policy)
    public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository
                .findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee with id: " + id + " not found!")
                );
        employeeRepository.deleteById(id);
        return ResponseEntity.ok(employee);

    }
}
