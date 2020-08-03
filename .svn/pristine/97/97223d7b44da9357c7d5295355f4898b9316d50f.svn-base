package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.GradingMaster;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface GradingMasterRepository extends JpaRepository<GradingMaster,Long> {
    GradingMaster findBy(Sort sort);
    List<GradingMaster> findBy(Pageable pageable);
    List<GradingMaster> findAllBy(Pageable pageable);
    GradingMaster findFirstBy(Sort sort);


}
