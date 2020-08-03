package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Roles;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RolesRepository extends JpaRepository<Roles,Long> {
    Roles findByBranchIdAndRoleAndRolesIdNotIn(Long branchId,String role,Long id);
    Roles findByRoleAndBranchId(String name, Long id);
    List<Roles> findAllByRole(String name);
    List<Roles>findAllByStatus(String status);
    List<Roles>findAllByRoleContainingAndStatus(String name,String status);
    Roles findFirstByRoleContainingAndStatus(String name,String status,Sort sort);
    List<Roles>findAllByRoleContainingAndStatus(String name,String status,Pageable pageable);
    Roles findFirstByStatus(String status,Sort sort);
    List<Roles>findAllByStatus(String status,Pageable pageable);

}
