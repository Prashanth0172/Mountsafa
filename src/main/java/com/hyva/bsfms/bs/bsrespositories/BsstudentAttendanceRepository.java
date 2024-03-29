package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.AttendanceMgt;
import com.hyva.bsfms.bs.bsentities.Student;
import com.hyva.bsfms.bs.bsentities.StudentAttendence;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsstudentAttendanceRepository extends JpaRepository<StudentAttendence,Long> {

    StudentAttendence findAllByStudentLevelAndStudentClassAndStudentAttendenceIdNotIn(String level,String c,Long id);
    StudentAttendence findAllByStudentClassAndStudentLevel(String c,String level);
    List<StudentAttendence> findAllByStatus(String status);
    List<StudentAttendence> findByStatusAndStudent(String status,String name);
    StudentAttendence findByStudentAttendenceId(Long id);
    StudentAttendence findByStudent(String name);
    List<StudentAttendence> findAllByStudentLevelAndStudentClass(String level,String classes);

}
