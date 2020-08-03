package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.SubjectCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubjectCategoryRepository extends JpaRepository<SubjectCategory,Long> {
    List<SubjectCategory> findAllBySubjectCategroyNameContainingAndStatus(String name,String status);
    List<SubjectCategory> findAllByStatus(String status);
    List<SubjectCategory> findAllBySubjectCategroyName(String name);
    List<SubjectCategory> findAllByStatus(String status,Pageable pageable);
    SubjectCategory findFirstByStatus(String status, Sort sort);
    SubjectCategory findFirstBySubjectCategroyNameContainingAndStatus(String name, String status, Sort sort);
    List<SubjectCategory> findAllBySubjectCategroyNameContainingAndStatus(String name, String status, Pageable pageable);


}
