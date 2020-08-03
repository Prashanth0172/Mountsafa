package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.ResourceCategory;
import com.hyva.bsfms.bs.bsentities.Roles;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResourceCategoryRepository extends JpaRepository<ResourceCategory,Long> {
    ResourceCategory findByResourceCategoryName(String name);
    ResourceCategory findByResourceCategoryNameAndResourceCategoryIdNotIn(String name, Long id);
    List<ResourceCategory> findAllByResourceCategoryName(String name);
    List<ResourceCategory>findAllByStatus(String status);
    List<ResourceCategory>findAllByResourceCategoryNameContainingAndStatus(String name,String status);
    ResourceCategory findFirstByResourceCategoryNameContainingAndStatus(String name,String status,Sort sort);
    List<ResourceCategory>findAllByResourceCategoryNameContainingAndStatus(String name,String status,Pageable pageable);
    ResourceCategory findFirstByStatus(String status,Sort sort);
    List<ResourceCategory>findAllByStatus(String status,Pageable pageable);

}
