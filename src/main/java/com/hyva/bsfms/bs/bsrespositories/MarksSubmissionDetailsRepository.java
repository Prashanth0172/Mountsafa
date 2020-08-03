package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.MarksSubmission;
import com.hyva.bsfms.bs.bsentities.MarksSubmissionDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface MarksSubmissionDetailsRepository extends JpaRepository<MarksSubmissionDetails,Long> {

    List<MarksSubmissionDetails>  findAllByMarksSubId(Long id);

}
