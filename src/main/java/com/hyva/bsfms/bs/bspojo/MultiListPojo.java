package com.hyva.bsfms.bs.bspojo;

import com.hyva.bsfms.bs.bsentities.LessonPlanDetails;

import java.util.List;

public class MultiListPojo {
    List<AssessmentQuestionDetailsPojo> assessmentQuestionDetailsPojo;
    private String QuestionListDetails;

    public List<AssessmentQuestionDetailsPojo> getAssessmentQuestionDetailsPojo() {
        return assessmentQuestionDetailsPojo;
    }

    public void setAssessmentQuestionDetailsPojo(List<AssessmentQuestionDetailsPojo> assessmentQuestionDetailsPojo) {
        this.assessmentQuestionDetailsPojo = assessmentQuestionDetailsPojo;
    }

    public String getQuestionListDetails() {
        return QuestionListDetails;
    }

    public void setQuestionListDetails(String questionListDetails) {
        QuestionListDetails = questionListDetails;
    }
}
