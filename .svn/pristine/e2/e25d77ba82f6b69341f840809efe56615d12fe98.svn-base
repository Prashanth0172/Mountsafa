/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hyva.bsfms.bs.bsentities;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author Admin
 */
@Entity
public class AssesmentCreator implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long acreatorId;
    private String assesmentName;
    private String assesmentType;
    private String levelId;
    private String classId;
    private String subjectId;
    private String chapterId;
    private String semesterId;
    private String termId;
    private String topicId;
    @Column(columnDefinition="text")
    private String questionName;
    private String questionMarks;
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
