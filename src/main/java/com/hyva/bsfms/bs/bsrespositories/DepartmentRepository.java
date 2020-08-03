package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Department;
import com.hyva.bsfms.bs.bsentities.Resource;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartmentRepository extends JpaRepository<Department,Long> {
    Department findByDepartmentNameAndBranchIdAndDepartmentIdNotIn(String name,Long branchId, Long id);
    Department findByDepartmentNameAndBranchId(String name, Long id);
    List<Department> findAllByDepartmentName(String name);
    List<Department>findAllByStatus(String status);
    List<Department>findAllByDepartmentNameContainingAndStatus(String name,String status);
    Department findFirstByDepartmentNameContainingAndStatus(String name,String status,Sort sort);
    List<Department>findAllByDepartmentNameContainingAndStatus(String name,String status,Pageable pageable);
    Department findFirstByStatus(String status,Sort sort);
    List<Department>findAllByStatus(String status,Pageable pageable);

}
