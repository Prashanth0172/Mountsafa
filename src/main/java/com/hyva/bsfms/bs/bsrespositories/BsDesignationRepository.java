package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Designation;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsDesignationRepository extends JpaRepository<Designation, Long> {

    Designation findByDesignationNameAndDesignationIdNotIn(String name, Long id);
    Designation findByDesignationName(String name);
    List<Designation> findAllByDesignationStatus(String status);

    Designation findByDesignationId(Long id);
    Designation findFirstByDesignationNameContainingAndDesignationStatus(String name, String status, Sort sort);
    List<Designation> findAllByDesignationNameContainingAndDesignationStatus(String name, String status, Pageable pageable);
    Designation findFirstByDesignationStatus(String status, Sort sort);
    List<Designation> findAllByDesignationStatus(String status, Pageable pageable);

    List<Designation> findByDesignationStatusAndDesignationNameContaining(String status,String name);
    List<Designation> findAllByDesignationNameContainingAndDesignationStatus(String name,String status);



}
