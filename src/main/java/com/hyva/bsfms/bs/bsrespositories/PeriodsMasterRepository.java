package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.PeriodsMaster;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PeriodsMasterRepository extends JpaRepository<PeriodsMaster,Long> {
    PeriodsMaster findByPeriodName(String periodName);
    PeriodsMaster findByPeriodNameAndPeriodIdNotIn(String periodName, Long id);
    List<PeriodsMaster> findAllByPeriodName(String periodName);
    List<PeriodsMaster> findAllByStatus(String status);
    List<PeriodsMaster> findAllByPeriodNameContainingAndStatus(String periodName, String status);
    PeriodsMaster findFirstByPeriodNameContainingAndStatus(String periodName, String status, Sort sort);
    List<PeriodsMaster>findAllByPeriodNameContainingAndStatus(String periodName, String status, Pageable pageable);
    PeriodsMaster findFirstByStatus(String status, Sort sort);
    List<PeriodsMaster>findAllByStatus(String status, Pageable pageable);


}
