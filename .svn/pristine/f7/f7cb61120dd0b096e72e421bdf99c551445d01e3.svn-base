package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.StudentAssesmentMarksDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentAssesmentMarksDetailsRepository extends JpaRepository<StudentAssesmentMarksDetails,Long> {
    List<StudentAssesmentMarksDetails> findByStudentAssesmentId(Long assesmentId);
}
