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
public class StudentAssesmentMarksDetails implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long id;
    private Long studentAssesmentId;
    private String studentName;
    @Column(columnDefinition="text")
    private String questionDetails;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentAssesmentId() {
        return studentAssesmentId;
    }

    public void setStudentAssesmentId(Long studentAssesmentId) {
        this.studentAssesmentId = studentAssesmentId;
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
