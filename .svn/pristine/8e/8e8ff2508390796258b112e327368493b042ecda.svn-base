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
public class MarksSubmissionDetails implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long id;
    private String studentName;
    @Column(columnDefinition="text")
    private String questionDetails;
    private Long marksSubId;

    public Long getMarksSubId() {
        return marksSubId;
    }

    public void setMarksSubId(Long marksSubId) {
        this.marksSubId = marksSubId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getQuestionDetails() {
        return questionDetails;
    }

    public void setQuestionDetails(String questionDetails) {
        this.questionDetails = questionDetails;
    }
}
