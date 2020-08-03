package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Deduction;
import com.hyva.bsfms.bs.bsentities.Earnings;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsDeductionRepository extends JpaRepository<Deduction, Long> {

    Deduction findByDeductionNameAndDeductionIdNotIn(String name, Long id);
    Deduction findByDeductionName(String name);
    List<Deduction> findAllByStatus(String status);
   List  <Deduction> findByStatusAndDeductionNameContaining(String status, String name);
    Deduction findByDeductionId(Long id);
    Deduction findFirstByStatus(String status,Sort sort);
    List<Deduction> findByStatus(String status,Pageable pageable);
    Deduction findFirstByDeductionNameContainingAndStatus(String name, String status, Sort sort);
    List<Deduction> findAllByDeductionNameContainingAndStatus(String name, String status, Pageable pageable);
    List<Deduction> findAllByDeductionNameContainingAndStatus(String name,String status);

}
