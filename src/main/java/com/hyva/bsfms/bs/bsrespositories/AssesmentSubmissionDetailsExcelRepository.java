package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.AssesmentSubmissionDetails;
import com.hyva.bsfms.bs.bsentities.AssesmentSubmissionDetailsExcel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssesmentSubmissionDetailsExcelRepository extends JpaRepository<AssesmentSubmissionDetailsExcel,Long> {
    List<AssesmentSubmissionDetailsExcel> findByAssesmentId(Long assesmentId);
}
