package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.AssessmentQuestions;
import com.hyva.bsfms.bs.bspojo.AssessmentQuestionsPojo;

import java.util.ArrayList;
import java.util.List;

public class BsAssessmentQuestionsDetailsMapper {

    public static AssessmentQuestions mapPojoToEntity(AssessmentQuestionsPojo assessmentQuestionsPojo){
        AssessmentQuestions assessmentQuestions = new AssessmentQuestions();
        assessmentQuestions.setAssessmentQuestionsId(assessmentQuestionsPojo.getAssessmentQuestionsId());
        assessmentQuestions.setChapterId(assessmentQuestionsPojo.getChapterId());
        assessmentQuestions.setClassId(assessmentQuestionsPojo.getClassId());
        assessmentQuestions.setLevelId(assessmentQuestionsPojo.getLevelId());
        assessmentQuestions.setSemesterId(assessmentQuestionsPojo.getSemesterId());
        assessmentQuestions.setSubjectId(assessmentQuestionsPojo.getSubjectId());
        assessmentQuestions.setTermId(assessmentQuestionsPojo.getTermId());
        assessmentQuestions.setAcademicyear(assessmentQuestionsPojo.getAcademicyear());
        assessmentQuestions.setTopicId(assessmentQuestionsPojo.getTopicId());
        return assessmentQuestions;
    }

    public static List<AssessmentQuestionsPojo> mapEntityToPojo(List<AssessmentQuestions> assessmentQuestionsList){
        List<AssessmentQuestionsPojo> assessmentQuestionsPojos = new ArrayList<>();
        for (AssessmentQuestions assessmentQuestions : assessmentQuestionsList){
            AssessmentQuestionsPojo assessmentQuestionsPojo = new AssessmentQuestionsPojo();
            assessmentQuestionsPojo.setAssessmentQuestionsId(assessmentQuestions.getAssessmentQuestionsId());
            assessmentQuestionsPojo.setChapterId(assessmentQuestions.getChapterId());
            assessmentQuestionsPojo.setClassId(assessmentQuestions.getClassId());
            assessmentQuestionsPojo.setLevelId(assessmentQuestions.getLevelId());
            assessmentQuestionsPojo.setSemesterId(assessmentQuestions.getSemesterId());
            assessmentQuestionsPojo.setSubjectId(assessmentQuestions.getSubjectId());
            assessmentQuestionsPojo.setTermId(assessmentQuestions.getTermId());
            assessmentQuestionsPojo.setAcademicyear(assessmentQuestions.getAcademicyear());
            assessmentQuestionsPojo.setTopicId(assessmentQuestions.getTopicId());
            assessmentQuestionsPojos.add(assessmentQuestionsPojo);
        }
        return assessmentQuestionsPojos;
    }

}
