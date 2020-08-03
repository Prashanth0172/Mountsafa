package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.StudentAssesmentMarks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentAssesmentMarksRepository extends JpaRepository<StudentAssesmentMarks,Long> {
    List<StudentAssesmentMarks> findAllByLevelAndSubject(String level, String subject);
}
