package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Subject;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject,Long> {
    Subject findBySubjectName(String name);
    Subject findBySubjectId(Long Id);
    Subject findBySubjectNameAndClassesIdAndSubjectIdNotIn(String name, Long classId,Long id);
    Subject findBySubjectNameAndClassesId(String name, Long classId);
    List<Subject> findAllBySubjectName(String name);
    List<Subject> findAllByClassesId(Long id);
    List<Subject> findAllBySubjectNameContainingAndStatus(String name,String status);
    Subject findFirstBySubjectNameContainingAndStatus(String name, String status, Sort sort);
    List<Subject> findAllBySubjectNameContainingAndStatus(String name, String status, Pageable pageable);
    Subject findFirstByStatus(String status, Sort sort);
    List<Subject> findAllByStatus(String status, Pageable pageable);
    List<Subject> findAllByStatus(String status);









}
