package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Assessor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AssessorRepository extends JpaRepository<Assessor,Long> , JpaSpecificationExecutor {
    Assessor findByStaffNameAndAssrIdNotIn(String Name, Long id);
    Assessor findByStaffName(String Name);
}
