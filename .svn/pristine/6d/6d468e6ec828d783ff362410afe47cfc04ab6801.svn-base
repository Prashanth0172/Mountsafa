package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Resource;
import com.hyva.bsfms.bs.bsentities.ResourceCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResourceRepository extends JpaRepository<Resource,Long> {
    Resource findByResourceName(String name);
    Resource findByResourceNameAndResourceIdNotIn(String name, Long id);
    List<Resource> findAllByResourceName(String name);
    List<Resource>findAllByStatus(String status);
    List<Resource>findAllByResourceNameContainingAndStatus(String name,String status);
    Resource findFirstByResourceNameContainingAndStatus(String name,String status,Sort sort);
    List<Resource>findAllByResourceNameContainingAndStatus(String name,String status,Pageable pageable);
    Resource findFirstByStatus(String status,Sort sort);
    List<Resource>findAllByStatus(String status,Pageable pageable);

}
