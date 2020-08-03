package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.AssessmentQuestionDetails;
import com.hyva.bsfms.bs.bsentities.AssessmentQuestions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsAssessmentQuestionDetailsRepository  extends JpaRepository<AssessmentQuestionDetails,Long>{

    List<AssessmentQuestionDetails> findAllByAssessmentQuestions(AssessmentQuestions assessmentQuestions);
    List<AssessmentQuestionDetails> findAllByAssessmentQuestionsAndSubComponent(AssessmentQuestions assessmentQuestions,String subcomponent);
    List<AssessmentQuestionDetails> findAllByQuestion(String name);
    List<AssessmentQuestionDetails> findAllByAssessmentDetailsId(Long id);

}
