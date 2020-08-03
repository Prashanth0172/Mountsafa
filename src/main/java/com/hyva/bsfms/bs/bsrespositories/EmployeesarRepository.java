package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Employeesar;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface EmployeesarRepository extends JpaRepository<Employeesar,Long> , JpaSpecificationExecutor {
    Employeesar findByStaffNameAndApprIdNotIn(String Name, Long id);
    Employeesar findByStaffName(String Name);

}
