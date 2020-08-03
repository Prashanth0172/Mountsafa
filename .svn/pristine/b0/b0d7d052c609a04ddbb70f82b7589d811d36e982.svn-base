package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Assignment;
import com.hyva.bsfms.bs.bsentities.Department;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssignmentRepository extends JpaRepository<Assignment,Long> {
    Assignment findByAssignmentName(String name);
    Assignment findByAssignmentId(Long id);
    Assignment findByAssignmentNameAndAssignmentIdNotIn(String name, Long id);
    List<Assignment> findAllByAssignmentName(String name);
    List<Assignment>findAllByStatus(String status);
    List<Assignment>findAllByAssignmentNameContainingAndStatus(String name, String status);
    Assignment findFirstByAssignmentNameContainingAndStatus(String name, String status, Sort sort);
    List<Assignment>findAllByAssignmentNameContainingAndStatus(String name, String status, Pageable pageable);
    Assignment findFirstByStatus(String status, Sort sort);
    List<Assignment>findAllByStatus(String status, Pageable pageable);

}
