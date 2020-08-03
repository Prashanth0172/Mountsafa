package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.GradeMaster;
import com.hyva.bsfms.bs.bsentities.Student;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import java.util.List;

public interface BsStudentRepository extends JpaRepository<Student, Long> ,JpaSpecificationExecutor {
    Student findByStudentName(String studentName);
    Student findByStudentNameAndStudentProfileId(String studentName,String studentProfileId);
    Student findByStudentNameAndStudentIdNotIn(String name, Long id);
    Student findByStudentNameAndAdmissionFormNo(String studentName,String formNo);
    List<Student> findByStudentId(Long studentId);
    List<Student> findAllByStudentNameContaining(String studentName);
    List<Student> findByLevel(GradeMaster grademaster);
    List<Student> findStudentByStudentNameIsLike(String searchText);
    List<Student> findByStudentStatus(String status);
    Student findFirstByStudentStatus(String status,Sort sort);
    List<Student> findAllByStudentStatus(String name,Pageable pageable);
    List<Student> findAllByStudentStatus(String name);
    List<Student>  findAllByClassId(Long id);
    List<Student> findAllByLevelAndClassId(GradeMaster level,Long claass);
    Student findFirstByStudentNameContainingAndStudentStatus(String name,String status,Sort sort);
    List<Student> findFirstByStudentNameContainingAndStudentStatus(String name,String status,Pageable pageable);
    List<Student>findAllByStudentNameContainingAndStudentStatus(String name,String status);
    List<Student> findAllByStudentName(String studentName);

}