package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Department;
import com.hyva.bsfms.bs.bsentities.GradeMaster;
import com.hyva.bsfms.bs.bsentities.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsGrademasterRepository extends JpaRepository<GradeMaster, Long> {

    GradeMaster findByGradeId(Long gradeId);
    GradeMaster findByGradeName(String GradeName);
    GradeMaster findByGradeNameAndGradeIdNotIn(String GradeName,Long gradeId);
    List<GradeMaster> findByGradeNameIsStartingWith(String name);
    List<GradeMaster> findByGradeNameIsStartingWithAndGradeStatusAndUserId(String name ,String Active,User userId);
    List<GradeMaster>findByGradeStatus(String Active);
    List<GradeMaster> findByGradeStatusAndUserId(String Active,User userId);
    List<GradeMaster> findAllByGradeIdIn(List<Long> ids);
    List<GradeMaster> findAllByGradeId(Long ids);
    List<GradeMaster> findAllByGradeNameContaining(String typeName);
    GradeMaster findFirstByGradeNameContainingAndGradeStatus(String typeName,String status, Sort sort);
    List<GradeMaster> findAllByGradeNameContainingAndGradeStatus(String typeName,String status, Pageable pageable);
//    GradeMaster findFirstByGradeStatus(String status,Sort sort);
   List<GradeMaster> findByGradeStatusAndGradeNameContaining(String status,String name);
//    List<GradeMaster>findAllByGradeStatus(String status);
    List<GradeMaster>findAllByGradeStatus(String status);
    List<GradeMaster>findAllBygradeNameContainingAndGradeStatus(String name,String status);
    GradeMaster findFirstBygradeNameAndGradeStatus(String name,String status,Sort sort);
    List<GradeMaster>findAllBygradeNameContainingAndGradeStatus(String name,String status,Pageable pageable);
    GradeMaster findFirstByGradeStatus(String status,Sort sort);
    List<GradeMaster>findAllByGradeStatus(String status,Pageable pageable);

}
