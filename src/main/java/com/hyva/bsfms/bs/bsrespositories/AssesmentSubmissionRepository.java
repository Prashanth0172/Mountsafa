package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.AssesmentSubmission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssesmentSubmissionRepository extends JpaRepository<AssesmentSubmission,Long> {
//    List<AssesmentSubmission> findAllByStudentsNameAndChapterAndComponent(String name,String chapter,String component);
    List<AssesmentSubmission> findAllByLevelAndSubject(String level,String subject);
    List<AssesmentSubmission> findAllByFlag(String flag);
    List<AssesmentSubmission> findAllByLevelAndSubjectAndComponent(String level,String subject,String component);
}
