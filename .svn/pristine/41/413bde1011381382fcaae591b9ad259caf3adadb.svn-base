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
public class MarksSubmission implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long id;
    private Long levelId;
    private Long classId;
    private Long subjectId;
    private Long quesyionId;
    private String studentName;
    private Long employee;
    @Column(columnDefinition="text")
    private String topicDetails;

    public Long getEmployee() {
        return employee;
    }

    public void setEmployee(Long employee) {
        this.employee = employee;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Long getQuesyionId() {
        return quesyionId;
    }

    public void setQuesyionId(Long quesyionId) {
        this.quesyionId = quesyionId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getTopicDetails() {
        return topicDetails;
    }

    public void setTopicDetails(String topicDetails) {
        this.topicDetails = topicDetails;
    }
}
