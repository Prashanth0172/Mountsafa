package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Approval;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApprovalRepository extends JpaRepository<Approval,Long> {

    List<Approval> findAllByApprover1(String name);
    Approval findByApprovalId(Long id);
}
