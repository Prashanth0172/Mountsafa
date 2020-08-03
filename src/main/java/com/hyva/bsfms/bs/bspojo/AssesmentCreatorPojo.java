package com.hyva.bsfms.bs.bspojo;

import javax.persistence.Column;
import java.util.List;
import java.util.Map;

public class AssesmentCreatorPojo {
    private Long acreatorId;
    private String assesmentName;
    private String assesmentType;
    private String levelId;
    private String levelName;
    private String classId;
    private String className;
    private String subjectId;
    private String chapterId;
    private String semesterId;
    private String semesterName;
    private String termId;
    private String termName;
    private String topicId;
    @Column(columnDefinition="text")
    private String questionName;
    private String questionMarks;
    private String Checklist;


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

    public String getChecklist() {
        return Checklist;
    }

    public void setChecklist(String checklist) {
        Checklist = checklist;
    }

    private String assesmentDate;
    private String status;

    public String getQuestionName() {
        return questionName;
    }

    public void setQuestionName(String questionName) {
        this.questionName = questionName;
    }

    public String getQuestionMarks() {
        return questionMarks;
    }

    public void setQuestionMarks(String questionMarks) {
        this.questionMarks = questionMarks;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public Long getAcreatorId() {
        return acreatorId;
    }

    public void setAcreatorId(Long acreatorId) {
        this.acreatorId = acreatorId;
    }

    public String getAssesmentName() {
        return assesmentName;
    }

    public void setAssesmentName(String assesmentName) {
        this.assesmentName = assesmentName;
    }

    public String getAssesmentType() {
        return assesmentType;
    }

    public void setAssesmentType(String assesmentType) {
        this.assesmentType = assesmentType;
    }

    public String getLevelId() {
        return levelId;
    }

    public void setLevelId(String levelId) {
        this.levelId = levelId;
    }

    public String getClassId() {
        return classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }

    public String getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(String subjectId) {
        this.subjectId = subjectId;
    }

    public String getChapterId() {
        return chapterId;
    }

    public void setChapterId(String chapterId) {
        this.chapterId = chapterId;
    }

    public String getSemesterId() {
        return semesterId;
    }

    public void setSemesterId(String semesterId) {
        this.semesterId = semesterId;
    }

    public String getTermId() {
        return termId;
    }

    public void setTermId(String termId) {
        this.termId = termId;
    }

    public String getAssesmentDate() {
        return assesmentDate;
    }

    public void setAssesmentDate(String assesmentDate) {
        this.assesmentDate = assesmentDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
