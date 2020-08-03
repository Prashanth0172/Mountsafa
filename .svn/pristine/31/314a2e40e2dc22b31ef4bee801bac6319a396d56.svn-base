package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.MarksSubmission;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface MarksSubmissionRepository extends JpaRepository<MarksSubmission,Long> {

    List<MarksSubmission>  findAllByLevelIdContainingOrClassIdContainingOrSubjectIdContaining(String level,String Class,String Subject);
    MarksSubmission findAllByLevelIdContainingOrClassIdContainingOrSubjectIdContaining(Sort sort,String level,String Class, String subject);
    List<MarksSubmission> findAllByLevelIdContainingOrClassIdContainingOrSubjectIdContaining(Pageable pageable,String level,String Class,String subject);
    List<MarksSubmission> findAllBy(Pageable pageable);
    MarksSubmission findFirstBy(Sort sort);

}
