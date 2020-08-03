package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.Agegroup;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgegroupRepository extends JpaRepository<Agegroup, Long> {

    List<Agegroup>findAllByStatus(String status);
    List<Agegroup>findAllByFromAgegroupContainingAndStatus(String name,String status);
    Agegroup findFirstByFromAgegroupContainingAndStatus(String name,String status,Sort sort);
    List<Agegroup> findAllByFromAgegroupAndStatus(String name,String status,Pageable pageable);
    Agegroup findFirstByStatus(String status,Sort sort);
    List<Agegroup>findAllByStatus(String status,Pageable pageable);


}
