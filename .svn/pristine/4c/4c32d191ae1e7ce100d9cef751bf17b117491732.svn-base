package com.hyva.bsfms.bs.bsentities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class AssessmentQuestions {
    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long assessmentQuestionsId;
    private Long levelId;
    private Long classId;
    private Long subjectId;
    private Long chapterId;
    private Long topicId;
    private Long semesterId;
    private Long termId;
    private Long academicyear;

    public Long getAcademicyear() {
        return academicyear;
    }

    public void setAcademicyear(Long academicyear) {
        this.academicyear = academicyear;
    }

    public Long getAssessmentQuestionsId() {
        return assessmentQuestionsId;
    }

    public void setAssessmentQuestionsId(Long assessmentQuestionsId) {
        this.assessmentQuestionsId = assessmentQuestionsId;
    }

    public Long getLevelId() {
        return levelId;
    }

    public void setLevelId(Long levelId) {
        this.levelId = levelId;
    }

    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }

    public Long getChapterId() {
        return chapterId;
    }

    public void setChapterId(Long chapterId) {
        this.chapterId = chapterId;
    }

    public Long getTopicId() {
        return topicId;
    }

    public void setTopicId(Long topicId) {
        this.topicId = topicId;
    }

    public Long getSemesterId() {
        return semesterId;
    }

    public void setSemesterId(Long semesterId) {
        this.semesterId = semesterId;
    }

    public Long getTermId() {
        return termId;
    }

    public void setTermId(Long termId) {
        this.termId = termId;
    }
}
