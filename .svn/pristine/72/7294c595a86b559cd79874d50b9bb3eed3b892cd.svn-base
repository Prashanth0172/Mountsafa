package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.HrApplication;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface BsHrApplicRepository extends JpaRepository<HrApplication, Long> ,JpaSpecificationExecutor {
    HrApplication findByHrFullName(String name);
    HrApplication findByHrFullNameAndHrId(String name, Long id);
    HrApplication findByHrFullNameAndHrIdNotIn(String name, Long id);
    HrApplication findByHrId(Long id);
    List<HrApplication> findAllByHrFullName(String name);
    List<HrApplication> findByStatus(String status);
    HrApplication findFirstByStatus(String status, Sort sort);
    List<HrApplication> findAllByStatus(String name, Pageable pageable);
}