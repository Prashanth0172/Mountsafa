package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.Branches;
import com.hyva.bsfms.bs.bsentities.City;
import org.dom4j.Branch;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BranchesRepository extends JpaRepository<Branches, Long> {

    Branches findByBranchName(String name);
    Branches findByBranchNameAndBranchesIdNotIn(String name, Long id);
    List<Branches> findAllByBranchName(String name);
    Branches findByBranchesId(Long id);
    List<Branches>findAllByStatus(String status);
    List<Branches>findAllByBranchNameContainingAndStatus(String name,String status);
    Branches findFirstByBranchNameContainingAndStatus(String name,String status,Sort sort);
    List<Branches>findAllByBranchNameContainingAndStatus(String name,String status,Pageable pageable);
    Branches findFirstByStatus(String status,Sort sort);
    List<Branches>findAllByStatus(String status,Pageable pageable);


}
