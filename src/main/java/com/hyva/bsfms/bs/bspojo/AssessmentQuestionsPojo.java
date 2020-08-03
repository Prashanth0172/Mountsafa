package com.hyva.bsfms.bs.bspojo;


import java.util.List;

public class AssessmentQuestionsPojo {
    private Long assessmentQuestionsId;
    private Long levelId;
    private Long classId;
    private Long subjectId;
    private Long chapterId;
    private Long topicId;
    private Long semesterId;
    private Long termId;
    private Long academicyear;
    private Long subComponent;
    private Long componentNm;
    private String levelName;
    private String className;
    private String subjectName;
    private String chapterName;
    private String topicName;
    private String semesterName;
    private String termName;
    private List<AssessmentQuestionDetailsPojo> assessmentQuestionDetailsPojos;

    public Long getAcademicyear() {
        return academicyear;
    }

    public void setAcademicyear(Long academicyear) {
        this.academicyear = academicyear;
    }


    public Long getSubComponent() {
        return subComponent;
    }

    public void setSubComponent(Long subComponent) {
        this.subComponent = subComponent;
    }

    public Long getComponentNm() {
        return componentNm;
    }

    public void setComponentNm(Long componentNm) {
        this.componentNm = componentNm;
    }

    public Long getAssessmentQuestionsId() {
        return assessmentQuestionsId;
    }

    public void setAssessmentQuestionsId(Long assessmentQuestionsId) {
        this.assessmentQuestionsId = assessmentQuestionsId;
    }

    public List<AssessmentQuestionDetailsPojo> getAssessmentQuestionDetailsPojos() {
        return assessmentQuestionDetailsPojos;
    }

    public void setAssessmentQuestionDetailsPojos(List<AssessmentQuestionDetailsPojo> assessmentQuestionDetailsPojos) {
        this.assessmentQuestionDetailsPojos = assessmentQuestionDetailsPojos;
    }

    public String getLevelName() {
        return levelName;
    }

    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getChapterName() {
        return chapterName;
    }

    public void setChapterName(String chapterName) {
        this.chapterName = chapterName;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public String getSemesterName() {
        return semesterName;
    }

    public void setSemesterName(String semesterName) {
        this.semesterName = semesterName;
    }

    public String getTermName() {
        return termName;
    }

    public void setTermName(String termName) {
        this.termName = termName;
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
