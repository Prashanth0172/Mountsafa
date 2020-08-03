package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.State;
import com.hyva.bsfms.bs.bsentities.TeacherTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsTeacherClearanceRepository extends JpaRepository<TeacherTable, Long> {

    TeacherTable findByTeacherNm(String name);
    TeacherTable findByTeacherNmAndTeachingIdNotIn(String name, Long id);
    List<TeacherTable> findAllByTeacherNm(String name);
    List<TeacherTable> findAllByEmployeeName(String employeeName);
}
