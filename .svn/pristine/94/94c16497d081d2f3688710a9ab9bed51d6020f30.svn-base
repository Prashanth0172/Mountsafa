package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Designation;
import com.hyva.bsfms.bs.bsentities.ExitInterviewForm;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsInterviewRepository extends JpaRepository<ExitInterviewForm, Long> {

    ExitInterviewForm findByEEmployeeNameAndEinterviewFormIdNotIn(String name, Long id);
    ExitInterviewForm findByEEmployeeName(String name);
    List<ExitInterviewForm> findAllByEstatus(String status);
     List<ExitInterviewForm> findByEstatusAndEEmployeeNameContaining(String name,String status);

    ExitInterviewForm findByEinterviewFormId(Long id);
//    Designation findFirstByDesignationNameContainingAndDesignationStatus(String name, String status, Sort sort);
//    List<Designation> findAllByDesignationNameContainingAndDesignationStatus(String name, String status, Pageable pageable);
//    Designation findFirstByDesignationStatus(String status, Sort sort);
//    List<Designation> findAllByDesignationStatus(String status, Pageable pageable);
//
//    List<Designation> findByDesignationStatusAndDesignationNameContaining(String status, String name);
//    List<Designation> findAllByDesignationNameContainingAndDesignationStatus(String name, String status);
//


}
