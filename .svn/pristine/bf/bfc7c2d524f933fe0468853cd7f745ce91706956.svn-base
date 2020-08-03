package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.AssesmentCreator;
import com.hyva.bsfms.bs.bsentities.AssesmentSubmission;
import com.hyva.bsfms.bs.bsentities.LessonPlan;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssesmentCreatorRepository extends JpaRepository<AssesmentCreator,Long> {
    AssesmentCreator findByAcreatorId(Long id);
//    List<AssesmentSubmission> findAllByStudentsNameAndChapterAndComponent(String name,String chapter,String component);
    AssesmentCreator findAllBySemesterIdAndTermIdAndLevelIdAndClassIdAndSubjectIdAndChapterIdAndAcreatorIdNotIn(String sid,String tid,String lid,String cid,String subid,String chaid,Long id);
    List<AssesmentCreator> findAllBySemesterIdContainingAndTermIdContainingAndLevelIdContainingAndClassIdContainingAndSubjectIdContainingAndChapterIdContainingAndTopicIdContaining(String sid,String tid,String lid,String cid,String subid,String chaid,String topicId);
    AssesmentCreator findAllByAssesmentNameAndSemesterIdAndTermIdAndLevelIdAndClassIdAndSubjectIdAndChapterId(String name,String sid,String tid,String lid,String cid,String subid,String chaid);
    List<AssesmentCreator> findAllBySubjectIdContainingOrLevelIdContainingOrClassIdContaining(String subject, String level, String classes);
    AssesmentCreator findBySubjectIdContainingOrLevelIdContainingOrClassIdContaining(Sort sort, String subject, String level, String classes);
    AssesmentCreator findFirstByAssesmentNameContaining(String name,Sort sort);
    List<AssesmentCreator>findAllByAssesmentNameContaining(String name,Pageable pageable);
    List<AssesmentCreator>findAllByAssesmentNameContaining(String name);
    List<AssesmentCreator> findBySubjectIdContainingOrLevelIdContainingOrClassIdContaining(Pageable pageable, String subject, String level, String classes);
    List<AssesmentCreator> findAllBy(Pageable pageable);
    AssesmentCreator findFirstBy(Sort sort);
}
