package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Designation;
import com.hyva.bsfms.bs.bsentities.Earnings;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsEarningsRepository extends JpaRepository<Earnings, Long> {

    Earnings findByEarningNameAndEarningIdNotIn(String name, Long id);
    Earnings findByEarningName(String loanName);
    List<Earnings> findAllByStatus(String status);
    List  <Earnings> findByStatusAndEarningNameContaining(String status, String name);
Earnings findByEarningId(Long id);
Earnings findFirstByEarningNameContainingAndStatus(String name,String status,Sort sort);
List<Earnings> findAllByEarningNameContainingAndStatus(String name,String status,Pageable pageable);
Earnings findFirstByStatus(String status,Sort sort);
List<Earnings> findByStatus(String status,Pageable pageable);
List<Earnings> findAllByEarningNameContainingAndStatus(String name,String status);

}
