package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.AssesmentSubmissionDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssesmentSubmissionDetailsRepository extends JpaRepository<AssesmentSubmissionDetails,Long> {
    List<AssesmentSubmissionDetails> findByAssesmentId(Long assesmentId);
}
