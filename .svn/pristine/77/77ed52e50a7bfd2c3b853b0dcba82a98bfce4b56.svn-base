package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Notification;
import com.hyva.bsfms.bs.bsentities.Qualification;
import com.hyva.bsfms.bs.bsentities.TrainingModule;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsQualificationRepository extends JpaRepository<Qualification, Long> {

    Qualification findByQualificationName(String name);
    Qualification findByQualificationNameAndQualificationIdNotIn(String name, Long id);
    List<Qualification> findAllByQualificationName(String name);
    List<Qualification> findAllByStatus(String status);
   List<Qualification> findAllByQualificationNameContainingAndStatus(String name,String status);
    Qualification findFirstByQualificationNameContainingAndStatus(String name, String status, Sort sort);
    List<Qualification> findAllByQualificationNameContainingAndStatus(String name, String status, Pageable pageable);
    Qualification findFirstByStatus(String status,Sort sort);
    List<Qualification> findAllByStatus(String status,Pageable pageable);






}
