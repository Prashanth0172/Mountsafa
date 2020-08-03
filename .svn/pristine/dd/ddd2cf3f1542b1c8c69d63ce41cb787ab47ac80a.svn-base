package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Components;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComponentRepository extends JpaRepository<Components,Long> {
    List<Components>findAllByStatus(String status);
    Components findFirstByStatus(String status, Sort sort);
    Components findByComponentName(String status);
    Components findByComponentNameAndComponentIdNotIn(String name, Long id);
    List<Components> findAllByComponentName(String name);
    List<Components>findAllByComponentNameContainingAndStatus(String name,String status);
    List<Components>findAllByComponentNameContainingAndStatus(String name,String status,Pageable pageable);
    Components findAllByComponentNameContainingAndStatus(String name,String status,Sort sort);
    List<Components>findAllByStatus(String status,Pageable pageable);




}
