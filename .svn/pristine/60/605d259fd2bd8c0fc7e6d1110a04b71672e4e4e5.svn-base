package com.hyva.bsfms.bs.bsrespositories;



import com.hyva.bsfms.bs.bsentities.Class;
import com.hyva.bsfms.bs.bsentities.Semester;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsSemesterRepository extends JpaRepository<Semester, Long> {
    Semester findBySemesterNameAndLevel(String name, String levelid);
    Semester findBySemesterNameAndLevelAndSemesterIdNotIn(String name,String levelid, Long id);
    Semester findBySemesterNameAndSemesterIdNotIn(String name, Long id);
    Semester findBySemesterName(String name);
    Semester findBySemesterId(Long id);
    List<Semester> findAllBySemesterNameContainingAndSemesterStatus(String name,String status);
    Semester findFirstBySemesterNameContainingAndSemesterStatus(String name, String status, Sort sort);
    List<Semester> findAllBySemesterNameContainingAndSemesterStatus(String name, String status, Pageable pageable);
    Semester findFirstBySemesterStatus(String status,Sort sort);
    List<Semester> findAllBySemesterStatus(String status, Pageable pageable);
    List<Semester> findAllBySemesterStatus(String status);
    List<Semester> findBySemesterStatusAndSemesterNameContaining(String status,String name);





}
