package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.CustomApprover;
import com.hyva.bsfms.bs.bsentities.Position;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsCustomApproverRepository extends JpaRepository<CustomApprover, Long> {

    CustomApprover findByCustomRole(String name);
    CustomApprover findByApproverAndCustomApproverIdNotIn(String name, Long id);
    List<CustomApprover> findAllByApprover(String approver);
    List<CustomApprover>findAllByStatus(String status);
    List<CustomApprover>findAllByCustomRoleContainingAndStatus(String countryName, String status);
    CustomApprover findFirstByCustomRoleContainingAndStatus(String countryName, String status, Sort sort);
    List<CustomApprover>findAllByCustomRoleContainingAndStatus(String countryName, String status, Pageable pageable);
    CustomApprover findFirstByStatus(String status, Sort sort);
    List<CustomApprover>findAllByStatus(String status, Pageable pageable);

}
