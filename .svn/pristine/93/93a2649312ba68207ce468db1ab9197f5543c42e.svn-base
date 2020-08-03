package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsEmployeeRepository extends JpaRepository<Employee, Long> {

    Employee findByEmployeeName(String name);
    Employee findAllByEmployeeNameOrUserName(String name, String userName);
    Employee findByEmployeeNameOrUserNameAndEmployeeIdNotIn(String name, String userName,Long id);
    List<Employee> findAllByEmployeeName(String name);
   Employee findByEmployeeId(Long id);
   Employee findByHrId(Long id);
   List<Employee>  findAllByEmpDepartmentAndStatus(String name,String status);



}
